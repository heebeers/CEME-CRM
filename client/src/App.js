import React, {useEffect} from "react";
import "./App.css";
import TableRow from "./TableRow";
import Create from "./customer/create";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { fetchCUSTOMERs } from "./actions/actions";

// needed for functional components
import { useSelector, useDispatch } from "react-redux";

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
              </ul>
            </div>
          </nav>{" "}
          <br />
          <h1>Customer Manager</h1> <br />
          <Switch>
            <Route exact path="/create" component={Create} /> 
            <Route path="/index" component={App} />
          </Switch>
        </div>
        <div className="App">
          <h1>Here are my Customers!</h1>
          <table border="1" width="80%">
            <thead>
              <tr>
                <th>FirstName</th>
                <th>LastName</th>
              </tr>
            </thead>
            <tbody>
            {
            customers.map((customer) => (
              <TableRow obj={customer} />
            ))
            }
              </tbody>
          </table>
        </div>
      </Router>
      )};
      </>
  );
  }


export default App;
