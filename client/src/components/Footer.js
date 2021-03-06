import React from "react";
import {
  Menu,
  Container,
  Dropdown,
  Icon,
  Grid,
  Segment,
  List,
  Header,
} from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Footer = () => {
  return (
    <Segment
      id="Footer"
      vertical
      style={{
        marginTop: "20em",
        padding: "5em 0em",
        background: "skyBlue",
        color: "black",
      }}
    >
      <Container>
        <Grid divided stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header style={{ color: "black" }} as="h4" content="Customers:" />
              <List link inverted>
                <List.Item as="a">
                  <Link to={"/listCustomers"}>View Customers</Link>
                </List.Item>
                <List.Item as="a">
                  <Link to={"/create"}>Add Customer</Link>
                </List.Item>
                <List.Item as="a">
                  <Link to={"/"}>Privacy Policy</Link>
                  <br />
                  <Link to={"/"}>Terms & Conditions</Link>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" style={{ color: "black" }}>
                Ambitious Ventures CRM
              </Header>
              <p>
                Some CRM companies seem to think that 15 minutes is all it
                takes. But not Ambitious Ventures. We'll take as long as you
                want to help you make sure your CRM application is right. You
                deserve more than just 15 minutes of fame. Are you on the road
                to victory?
              </p>
              <p className="legal">
                ©2020 Ambitious Ventures CRM, LLC. All rights reserved.
                <br />
                By continuing to use the website, you consent to the use of
                cookies, <a href="#">Read More</a>.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default Footer;
