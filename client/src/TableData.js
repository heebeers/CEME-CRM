// TableRow.js
import React, { Component } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { withStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    maxWidth: 750,
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

class TableData extends Component {
  render() {
    const { firstName, lastName } = this.props.obj;
    return (
      <StyledTableRow key={firstName}>
        <StyledTableCell component="th" scope="row">
          {firstName}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          {lastName}
        </StyledTableCell>
      </StyledTableRow>
    );
  }
}

export default TableData;
