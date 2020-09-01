import React, {useEffect} from "react";
import "./App.css";
import CustomerTable from "./CustomerTable";
import Create from "./customer/create";
import Edit from "./customer/edit";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { fetchCUSTOMERs } from "./actions/actions";

// needed for functional components
import { useSelector, useDispatch } from "react-redux";
import ShowInteractions from "./interactions/ShowInteractions";

function App(props) {

  const customerList = useSelector((state) => state);
  
  const {customers, loading, error} = customerList;
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(fetchCUSTOMERs());
    return () => {
      //
    };
  }, []);
 
 

  return(
    <>
     {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={"/"} className="navbar-brand">
              List Customers
            </Link>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/create"} className="nav-link">
                    Create Customer
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link to={"/edit/id=00000000c3f2e4605ac7635b"} className="nav-link">
                    Edit Customer
                  </Link>
                </li> */}
              </ul>

            </div>
          </nav>{" "}
          <br />
          <h1>Customer Manager</h1> <br />
          <Switch>
            <Route path="/create" component={Create} /> 
            <Route path="/edit/id=00000000c3f2e4605ac7635b" component={Edit} /> 
            <Route path="/showInteractions/id=00000000c3f2e4605ac7635b" component={ShowInteractions} /> 
            <Route exact path="/index" component={App} />
          </Switch>
        </div>
        <div className="App">
          <h1>Here are my Customers!</h1>
          <CustomerTable customers={customers} />
        </div>
      </Router>
      )};
      </>
  );
  }


export default App;
