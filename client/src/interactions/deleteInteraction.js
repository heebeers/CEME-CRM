import React, { useEffect } from "react";
import { deleteINTERACTION } from "../actions/actions";
import { Container } from "semantic-ui-react";

// needed for functional components
import { useSelector, useDispatch } from "react-redux";

function InteractionDelete(props) {
  const interactionList = useSelector((state) => state);

  const { interactions, loading, error } = interactionList;

  const dispatch = useDispatch();
  const queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);
  let id = urlParams.get("id");

  useEffect(() => {
    dispatch(deleteINTERACTION(id));
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
          <h1>Interaction Deleted Successfully</h1>
        </Container>
      )}
    </>
  );
}

export default InteractionDelete;
