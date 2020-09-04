import React from "react";
import "./App.css";
import Create from "./customer/create";
import Edit from "./customer/edit";
import CustomerDelete from "./customer/delete";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container } from "semantic-ui-react";
import CreateInteraction from "./interactions/createInteraction";
import EditInteraction from "./interactions/editInteraction";
import CustomerList from "./customer/customerList";
import InteractionList from "./interactions/interactionsList";
import DeleteInteraction from "./interactions/deleteInteraction";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Clock from "./components/clock/Clock";

function App(props) {
  return (
    <Router>
      <Header />
      <Container className="container" style={{ marginTop: "7em" }}>
        <Switch>
          <Route path="/listCustomers" component={CustomerList} />
          <Route path="/listInteractions" component={InteractionList} />
          <Route path="/create" component={Create} />
          <Route exact path="/edit" component={Edit} />
          <Route exact path="/delete" component={CustomerDelete} />
          <Route exact path="/showInteractions" component={InteractionList} />
          <Route exact path="/addInteraction" component={CreateInteraction} />
          <Route exact path="/editInteraction" component={EditInteraction} />
          <Route
            exact
            path="/deleteInteraction"
            component={DeleteInteraction}
          />
          <Route exact path="/index" component={App} />
          <Route exact path="/" component={HomePage} />
        </Switch>
        <Clock />
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
