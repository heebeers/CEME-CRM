import React, { useState, useEffect } from "react";
import { Header, Grid, Container, Message } from "semantic-ui-react";

const Clock = () => {
  const [seconds, setSeconds] = useState(0);
  const getTime = (offset) => {
    let date = new Date();
    let localTime = date.getTime();
    // get local timezone offset and convert to milliseconds
    let localOffset = date.getTimezoneOffset() * 60000;

    // obtain the UTC time in milliseconds
    let utc = localTime + localOffset;

    let newDateTime = utc + 3600000 * offset;

    let convertedDateTime = new Date(newDateTime);
    return convertedDateTime.toLocaleString();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Message style={{ marginTop: "3em" }}>
      <Message.Header>Before your call, check the time.</Message.Header>
      <Grid stackable columns={3} style={{ marginTop: "10px" }}>
        <Grid.Row>
          <Grid.Column>
            <Header as="h4">
              Charlotte:
              <br />
              {getTime(-4)}
            </Header>
          </Grid.Column>
          <Grid.Column>
            <Header as="h4">
              Northbrook:
              <br />
              {getTime(-5)}
            </Header>
          </Grid.Column>
          <Grid.Column>
            <Header as="h4">
              Austin: <br />
              {getTime(-5)}
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Header as="h4">
              Phoenix: <br />
              {getTime(-5)}
            </Header>
          </Grid.Column>

          <Grid.Column>
            <Header as="h4">
              Northern Ireland:
              <br /> {getTime(+1)}
            </Header>
          </Grid.Column>
          <Grid.Column>
            {" "}
            <Header as="h4">
              India:
              <br /> {getTime(+5.5)}
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Message>
  );
};

export default Clock;
