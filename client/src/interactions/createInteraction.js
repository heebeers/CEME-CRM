import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";
import { connect } from "react-redux";
import { addINTERACTION, store, ADD_INTERACTION_BEGIN } from "../actions/actions";
import { Button, Input, Grid, Container, Form, Divider, TextArea } from "semantic-ui-react";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";

import { useSelector, useDispatch } from "react-redux";

function CreateInteraction(props) {
  const interactionState = useSelector((state) => state);
  const { interaction, loading, error } = interactionState;
  const dispatch = useDispatch();
  let history = useHistory();

  const queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);
  let id = urlParams.get("id");

  const [employeeId, setEmployeeId] = useState("");
  const [interactionDate, setInteractionDate] = useState("");
  const [interactionFollowUpType, setInteractionFollowUpType] = useState("");
  const [interactionNotes, setInteractionNotes] = useState("");
  const [interactionType, setInteractionType] = useState("");
  const [interactionFollowUpDate, setInteractionFollowUpDate] = useState("");
  const [priorityLevel, setPriorityLevel] = useState("");
  
  const submitHandler = async (e) => {
    e.preventDefault();
    // this is empty
    interaction.customerId = id;
    interaction.employeeId = employeeId;
    interaction.interactionDate = interactionDate;
    interaction.interactionFollowUpType = interactionFollowUpType;
    interaction.interactionNotes = interactionNotes;
    interaction.interactionType = interactionType;
    interaction.interactionFollowUpDate = interactionFollowUpDate;
    interaction.priorityLevel = priorityLevel;    

    dispatch(addINTERACTION(interaction));
    history.push("./showInteractions?id=" + interaction.customerId);
  };

  const AppWithBasic = () => {
    const [currentDate, setNewDate] = useState(null);
    const onChange = (event, data) => setNewDate(data.value);

    return <SemanticDatepicker onChange={onChange} />;
  };

  return (
    <div className="container">
      <Container>
        <div style={{ marginTop: 10 }}>
          <h4>Add New Interaction</h4>
          <Form onSubmit={submitHandler} autoComplete="off">
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  label="Interaction Type"
                  id="interactionType"
                  type="text"
                  className="form-control"
                  onChange={(e) => setInteractionType(e.target.value)}
                />                
                <Form.Input label = "Interaction Date"
                  id="interactionDate"
                  type="date"
                  className="form-control" 
                  onChange={(e) => setInteractionDate(e.target.value)}                
                />
              </Form.Group>     
              <Divider/>
              <Form.Group widths="equal">
              <Form.Input
                  fluid
                  label="Interaction Follow-up Type"
                  id="interactionFollowUpType"
                  type="text"
                  className="form-control"
                  onChange={(e) => setInteractionFollowUpType(e.target.value)}
                /> 
                <Form.Input label = "Interaction Follow-up Date"
                  id="interactionFollowUpDate"
                  type="date"
                  className="form-control" 
                  onChange={(e) => setInteractionFollowUpDate(e.target.value)}                
                />
              </Form.Group>     
              <Divider/>
              <Form.Group widths="equal">
              <Form.Input
                  fluid
                  label="Employee Name"
                  id="employeeId"
                  type="text"
                  className="form-control"
                  onChange={(e) => setEmployeeId(e.target.value)}
                />              
                <Form.Input
                  fluid
                  label="Priority Level"
                  id="priorityLevel"
                  type="text"
                  className="form-control"
                  onChange={(e) => setPriorityLevel(e.target.value)}
                />
              </Form.Group>              
              <Divider/>
              <Form.Group widths="equal">
                <Form.TextArea
                 fluid placeholder='Tell us more' style={{ minHeight: 100 }}
                  label="Notes"
                  id="interactionNotes"
                  type="text"
                  className="form-control"
                  onChange={(e) => setInteractionNotes(e.target.value)}
                />
              </Form.Group>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                value="Create Interaction"
              >
                Create Interaction
              </Button>
              </Form>
        </div>
      </Container>
    </div>
  );
}

export default CreateInteraction;
