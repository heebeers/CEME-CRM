import React, { useEffect } from "react";
import "./../App.css";
import { getallINTERACTIONs, fetchINTERACTION } from "./../actions/actions";
import { Container } from "semantic-ui-react";
import { Table, Icon, Popup } from "semantic-ui-react";
import { Link } from "react-router-dom";
// needed for functional components
import { useSelector, useDispatch } from "react-redux";

function InteractionList(props) {
  const interactionsList = useSelector((state) => state);

  const { interactions, loading, error } = interactionsList;

  const dispatch = useDispatch();

  const queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);
  let id = urlParams.get("id");

  useEffect(() => {
    dispatch(fetchINTERACTION(id));
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
          <h1>Customer Interactions</h1>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Interaction Date</Table.HeaderCell>
                <Table.HeaderCell>Interaction Type</Table.HeaderCell>
                <Table.HeaderCell>Interaction Notes</Table.HeaderCell>
                <Table.HeaderCell>Interaction Follow up Type</Table.HeaderCell>
                <Table.HeaderCell>Interaction Follow up Date</Table.HeaderCell>
                <Table.HeaderCell>Priority</Table.HeaderCell>
                <Table.HeaderCell>Actions</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {interactions.map((interaction) => (
                <Table.Row>
                  <Table.Cell>{interaction.interactionDate}</Table.Cell>
                  <Table.Cell>{interaction.interactionType}</Table.Cell>
                  <Table.Cell>{interaction.interactionNotes}</Table.Cell>
                  <Table.Cell>{interaction.interactionFollowUpType}</Table.Cell>
                  <Table.Cell>{interaction.interactionFollowUpDate}</Table.Cell>
                  <Table.Cell>{interaction.priorityLevel}</Table.Cell>
                  <Table.Cell>
                  <Link
                  to={"/editInteraction?id=" + interaction._links.self.href.substring(35)}
                  className="nav-link"
                >
                  <Popup
                    trigger={<Icon name="edit" />}
                    content={`Edit Interactions`}
                    size="mini"
                  />
                </Link>
                <Link
                  to={"/deleteInteraction?id=" + interaction._links.self.href.substring(35)}
                  className="nav-link"
                >
                  <Popup
                    trigger={<Icon name="trash alternative" />}
                    content={`Delete Interactions`}
                    size="mini"
                  />
                </Link>
                </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
          <Link to={"/addInteraction?id=" + id} className="nav-link">
            Add Interaction
          </Link>
        </Container>
      )}
    </>
  );
}

export default InteractionList;
