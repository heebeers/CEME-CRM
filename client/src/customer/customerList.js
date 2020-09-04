import React, { useEffect } from "react";
import "./../App.css";
import CustomerTable from "./customerTable";
import { fetchCUSTOMERs } from "./../actions/actions";
import { Container } from "semantic-ui-react";

// needed for functional components
import { useSelector, useDispatch } from "react-redux";

function CustomerList(props) {
  const customerList = useSelector((state) => state);

  const { customers, loading, error } = customerList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCUSTOMERs());
    return () => {
      //
    };
  }, []);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <Container className="App">
          <h1>Customers:</h1>
          <CustomerTable customers={customers} />
        </Container>
      )}
    </>
  );
}

export default CustomerList;
