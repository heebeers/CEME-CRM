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

function App(props) {
  return (
    <Router>
      <Header />
      <Container className="container" style={{ marginTop: "7em" }}>
        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={"/listCustomers"} className="navbar-brand">
            List Customers
          </Link>
          <br />
          <Link to={"/listInteractions"} className="navbar-brand">
            List Interactions
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/create"} className="nav-link">
                  Create Customer
                </Link>
              </li>
            </ul>
          </div>
        </nav>{" "}
        <br /> */}

        <Switch>
          <Route path="/listCustomers" component={CustomerList} />
          <Route path="/listInteractions" component={InteractionList} />
          <Route path="/create" component={Create} />
          <Route exact path="/edit" component={Edit} />
          <Route exact path="/showInteractions" component={InteractionList} />
          <Route exact path="/addInteraction" component={CreateInteraction} />
          <Route exact path="/index" component={App} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
