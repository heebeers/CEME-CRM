import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { addINTERACTION, store, ADD_INTERACTION_BEGIN } from "../actions/actions";
import { Button, Input, Grid, Container } from "semantic-ui-react";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";

import { useSelector, useDispatch } from "react-redux";

function CreateInteraction(props) {
  const interactionState = useSelector((state) => state);
  const { interaction, loading, error } = interactionState;
  const dispatch = useDispatch();

  const queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);
  let id = urlParams.get("id");

  const [customerId, setCustomerId] = useState("");
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
          <h3>Add New Interaction</h3>

          <form onSubmit={submitHandler} autoComplete="off">
            <div className="form-row">
              <div className="form-group col-md-5">
                <Input
                  label="Interaction Type"
                  id="interactionType"
                  type="text"
                  className="form-control"
                  onChange={(e) => setInteractionType(e.target.value)}
                />
              </div>           
              <div className="form-group col-md-5">
                <SemanticDatepicker
                  label="Interaction Date"
                  onChange={(e) => (event, data) => setInteractionDate(data.value)}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-5">
                <Input
                  label="Interaction Follow-up Type"
                  id="interactionFollowUpType"
                  type="text"
                  className="form-control"
                  onChange={(e) => setInteractionFollowUpType(e.target.value)}
                />
              </div>           
              <div className="form-group col-md-5">
                <SemanticDatepicker
                  label="Interaction Follow Up Date"
                  onChange={(e) => (event, data) => setInteractionFollowUpDate(data.value)}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-5">
                <Input
                  label="Employee Name"
                  id="employeeId"
                  type="text"
                  className="form-control"
                  onChange={(e) => setEmployeeId(e.target.value)}
                />
              </div>
              <div className="form-group col-md-5">
                <Input
                  label="Priority Level"
                  id="priorityLevel"
                  type="text"
                  className="form-control"
                  onChange={(e) => setPriorityLevel(e.target.value)}
                />
              </div>              
            </div>
            <div className="form-row">
              <div className="form-group col-md-5">
                <Input
                  label="Notes"
                  id="interactionNotes"
                  type="text"
                  className="form-control"
                  onChange={(e) => setInteractionNotes(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <Button
                variant="contained"
                color="primary"
                type="submit"
                value="Create Interaction"
              >
                Primary
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default CreateInteraction;
