import React from "react";
import "./App.css";
import Create from "./customer/create";
import Edit from "./customer/edit";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container } from "semantic-ui-react";
import CreateInteraction from "./interactions/createInteraction";
import EditInteraction from "./interactions/editInteraction";
import CustomerList from "./customer/customerList";
import InteractionList from "./interactions/interactionsList";
import Header from "./components/Header";

function App(props) {
  return (
    <Router>
      <Header />
      <Container className="container" style={{ marginTop: "7em" }}>
        <Container text>
          <h1>Placeholder Title</h1>
          <p>
            Seitan eu try-hard la croix you probably haven't heard of them
            locavore. Sriracha cray offal, magna echo park swag dolore mollit
            pour-over cliche venmo irure scenester. Kickstarter live-edge
            shoreditch glossier locavore, anim forage adipisicing. Fashion axe
            schlitz cred roof party kinfolk, kale chips migas dolore kombucha
            retro gentrify subway tile drinking vinegar paleo.
          </p>
        </Container>

        <Switch>
          <Route path="/listCustomers" component={CustomerList} />
          <Route path="/listInteractions" component={InteractionList} />
          <Route path="/create" component={Create} />
          <Route exact path="/edit" component={Edit} />
          <Route exact path="/showInteractions" component={InteractionList} />
          <Route exact path="/addInteraction" component={CreateInteraction} />
          <Route exact path="/editInteraction" component={EditInteraction} />
          <Route exact path="/index" component={App} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
