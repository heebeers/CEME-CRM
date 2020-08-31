// TableRow.js
import React, { Component } from "react";

class TableRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.obj.firstName}</td>
        <td>{this.props.obj.lastName}</td>
      </tr>
    );
  }
}

export default TableRow;
