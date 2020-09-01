import React, { useEffect } from "react";
import "./App.css";
import TableData from "./TableData";
import Create from "./customer/create";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { fetchCUSTOMERs } from "./actions/actions";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Container from "@material-ui/core/Container";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

// needed for functional components
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    maxWidth: "80%",
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function App(props) {
  const customerList = useSelector((state) => state);

  const { customers, loading, error } = customerList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCUSTOMERs());
    return () => {
      //
    };
  }, []);

  const classes = useStyles();

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <Router>
          {/* <Drawer /> */}
          <Header />
          {/* <Drawer /> */}
          <Container className="container">
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
            <Switch>
              <Route exact path="/create" component={Create} />
              <Route path="/index" component={App} />
            </Switch>
          </Container>
          <Container className="App">
            <h1>Customers</h1>
            <TableContainer>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>First Name</StyledTableCell>
                    <StyledTableCell>Last Name</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {customers.map((customer, i) => (
                    <TableData key={i} obj={customer} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Container>
        </Router>
      )}
      ;
    </>
  );
}

export default App;
