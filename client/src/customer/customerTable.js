// Table.js
import React from "react";
import { Link } from "react-router-dom";
import { Header, Table, Rating } from "semantic-ui-react";

const CustomerTable = ({ customers }) => {
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Address</Table.HeaderCell>
          <Table.HeaderCell>Phone</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
          <Table.HeaderCell>Products</Table.HeaderCell>
          <Table.HeaderCell>Customer Action</Table.HeaderCell>
          <Table.HeaderCell>Interactions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {customers.map((customer) => (
          <Table.Row>
            <Table.Cell>
              {customer.firstName} {customer.lastName}
            </Table.Cell>
            <Table.Cell>
              {customer.currentAddressLine1} {customer.currentAddressLine2}{" "}
              {customer.currentAddressCity} {customer.currentAddressState}{" "}
              {customer.currentAddresszip}
            </Table.Cell>
            <Table.Cell>{customer.currentPhone}</Table.Cell>
            <Table.Cell>{customer.email}</Table.Cell>
            <Table.Cell>{customer.products}</Table.Cell>
            <Table.Cell>
              <Link
                to={"/edit?id=" + customer._links.self.href.substring(32)}
                className="nav-link"
              >
                Edit Customer
              </Link>
            </Table.Cell>
            <Table.Cell>
              <Link
                to={
                  "/showInteractions?id=" +
                  customer._links.self.href.substring(32)
                }
                className="nav-link"
              >
                Show Interactions
              </Link>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
     
    </Table>
  );
};

export default CustomerTable;
