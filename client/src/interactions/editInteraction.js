import React, { useState, useEffect } from "react";
import {
  updateINTERACTION,
  getINTERACTION,
  getCUSTOMER,
} from "../actions/actions";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Input,
  Grid,
  Container,
  Form,
  GridColumn,
  TextArea,
  Divider,
} from "semantic-ui-react";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";
import { useHistory } from "react-router-dom";

function EditInteraction(props) {
  let history = useHistory();
  const interactionState = useSelector((state) => state);
  const { interaction, customer, loading, error } = interactionState;

  const dispatch = useDispatch();
  const queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);
  let id = urlParams.get("id");

  useEffect(() => {
    dispatch(getINTERACTION(id));
    dispatch(getCUSTOMER(interaction.customerId));
    return () => {
      //
    };
  }, []);

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
    console.log(e.target);
    interaction.employeeId = e.target.employeeId.value;
    interaction.interactionDate = e.target.interactionDate.value;
    interaction.interactionFollowUpType =
      e.target.interactionFollowUpType.value;
    interaction.interactionNotes = e.target.interactionNotes.value;
    interaction.interactionType = e.target.interactionType.value;
    interaction.interactionFollowUpDate =
      e.target.interactionFollowUpDate.value;
    interaction.priorityLevel = e.target.priorityLevel.value;

    dispatch(updateINTERACTION(interaction));
    history.push("./showInteractions?id=" + interaction.customerId);
  };

  return (
    <>
      <div style={{ marginTop: 10 }}>
        <h4>
          Update {customer.firstName} {customer.lastName}'s Interaction
        </h4>
        <Form onSubmit={submitHandler} autoComplete="off">
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Interaction Type"
              id="interactionType"
              type="text"
              className="form-control"
              defaultValue={interaction.interactionType}
              onChange={(e) => setInteractionType(e.target.value)}
            />
            <Form.Input
              label="Interaction Date"
              id="interactionDate"
              type="date"
              className="form-control"
              defaultValue={interaction.interactionDate}
              onChange={(e) => setInteractionDate(e.target.value)}
            />
          </Form.Group>
          <Divider />
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Interaction Follow-up Type"
              id="interactionFollowUpType"
              type="text"
              className="form-control"
              defaultValue={interaction.interactionFollowUpType}
              onChange={(e) => setInteractionFollowUpType(e.target.value)}
            />
            <Form.Input
              label="Interaction Follow-up Date"
              id="interactionFollowUpDate"
              type="date"
              className="form-control"
              defaultValue={interaction.interactionFollowUpDate}
              onChange={(e) => setInteractionFollowUpDate(e.target.value)}
            />
          </Form.Group>
          <Divider />
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Employee Name"
              id="employeeId"
              type="text"
              className="form-control"
              defaultValue={interaction.employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
            />
            <Form.Input
              fluid
              label="Priority Level"
              id="priorityLevel"
              type="text"
              className="form-control"
              defaultValue={interaction.priorityLevel}
              onChange={(e) => setPriorityLevel(e.target.value)}
            />
          </Form.Group>
          <Divider />
          <Form.Group widths="equal">
            <Form.TextArea
              fluid
              placeholder="Tell us more"
              style={{ minHeight: 100 }}
              label="Notes"
              id="interactionNotes"
              type="text"
              className="form-control"
              defaultValue={interaction.interactionNotes}
              onChange={(e) => setInteractionNotes(e.target.value)}
            />
          </Form.Group>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            value="Update Interaction"
          >
            Update Interaction
          </Button>
        </Form>
      </div>
    </>
  );
}

export default EditInteraction;
