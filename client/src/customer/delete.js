import React, { useEffect } from "react";
import { deleteCUSTOMER } from "../actions/actions";
import { Container } from "semantic-ui-react";

// needed for functional components
import { useSelector, useDispatch } from "react-redux";

function CustomerDelete(props) {
  const customerList = useSelector((state) => state);

  const { customers, loading, error } = customerList;

  const dispatch = useDispatch();
  const queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);
  let id = urlParams.get("id");

  useEffect(() => {
    dispatch(deleteCUSTOMER(id));
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
          <h1>Customer Deleted Successfully</h1>
        </Container>
      )}
    </>
  );
}

export default CustomerDelete;
