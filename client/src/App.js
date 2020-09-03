import React from "react";
import "./App.css";
import Create from "./customer/create";
import Edit from "./customer/edit";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container } from "semantic-ui-react";
import CreateInteraction from "./interactions/createInteraction";
import CustomerList from "./customer/customerList";
import InteractionList from "./interactions/interactionsList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Clock from "./components/Clock";

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
          <Route exact path="/showInteractions" component={InteractionList} />
          <Route exact path="/addInteraction" component={CreateInteraction} />
          <Route exact path="/" component={HomePage} />
        </Switch>
        <Clock />
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
