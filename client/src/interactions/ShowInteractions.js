import React, { useState, useEffect } from "react";
import {fetchINTERACTION} from '../actions/actions';
import { useSelector, useDispatch } from "react-redux";


function ShowInteractions (props) {
  const interactionsState = useSelector((state) => state);
  const {interactions, loading, error} = interactionsState;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchINTERACTION("00000000c3f2e4605ac7635b"));
    return () => {
        //
      };
    }, []);

    return () => (
        <table border="1" width="80%">
        <thead>
          <tr>
            <th>Interaction Date</th>
            <th>Interaction Follow up Type</th>
            <th>Interaction Notes</th>
            <th>Interaction Type</th>
            <th>Interaction Follow up Date</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
        {
        interactions.map((interaction) => (
        <tr>
            <td>{interaction.interactionDate} </td>
            <td>{interaction.interactionFollowUpType}</td>
            <td>{interaction.interactionNotes}</td>
            <td>{interaction.interactionType}</td>
            <td>{interaction.interactionFollowUpDate}</td>
            <td>{interaction.priorityLevel}</td>
        </tr>
        ))
        }

          </tbody>
      </table>
   );
}
export default ShowInteractions;