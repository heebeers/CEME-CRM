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
      inverted
      vertical
      style={{ marginTop: "20em", padding: "5em 0em" }}
    >
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Customers:" />
              <List link inverted>
                <List.Item as="a">
                  <Link to={"/listCustomers"}>View Customers</Link>
                </List.Item>
                <List.Item as="a">
                  <Link to={"/create"}>Add Customers</Link>
                </List.Item>
                <List.Item as="a">
                  <Link to={"/showInteractions"}>View Interactions</Link>
                </List.Item>
                <List.Item as="a">
                  <Link to={"/"}>Privacy Policy</Link>
                  <br />
                  <Link to={"/"}>Terms & Conditions</Link>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" inverted>
                Ambitious Ventures CRM
              </Header>
              <p>
                Kickstarter live-edge shoreditch glossier locavore, anim forage
                adipisicing. Fashion axe schlitz cred roof party kinfolk.
              </p>
              <p className="legal">
                ©2020 Ambitious Ventures CRM, LLC. All rights reserved.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default Footer;
