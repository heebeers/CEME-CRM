// Table.js
import React from "react";
import { Link } from "react-router-dom";
import { Table, Icon, Popup } from "semantic-ui-react";

const CustomerTable = ({ customers }) => {
  return (
    <>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Address</Table.HeaderCell>
            <Table.HeaderCell>Phone</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Products</Table.HeaderCell>
            <Table.HeaderCell>Customer Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {customers.map((customer) => (
            <Table.Row>
              <Table.Cell>
                <Link
                  to={"/edit?id=" + customer._links.self.href.substring(32)}
                  className="nav-link"
                >
                  {customer.firstName} {customer.lastName}
                </Link>
              </Table.Cell>
              <Table.Cell>
                {customer.currentAddressLine1} {customer.currentAddressLine2}{" "}
                {customer.currentAddressCity} {customer.currentAddressState}{" "}
                {customer.currentAddresszip}
              </Table.Cell>
              <Table.Cell>{customer.customerPhone}</Table.Cell>
              <Table.Cell>{customer.email}</Table.Cell>
              <Table.Cell>{customer.products}</Table.Cell>
              <Table.Cell>
                <Link
                  to={"/edit?id=" + customer._links.self.href.substring(32)}
                  className="nav-link"
                >
                  <Popup
                    trigger={<Icon name="edit" />}
                    content={`Edit ${customer.firstName} ${customer.lastName}`}
                    size="mini"
                  />
                </Link>
                <Link
                  to={"/delete?id=" + customer._links.self.href.substring(32)}
                  className="nav-link"
                >
                  <Popup
                    trigger={<Icon name="trash alternative" />}
                    content={`Delete ${customer.firstName} ${customer.lastName}`}
                    size="mini"
                  />
                </Link>
                <Link
                  to={
                    "/showInteractions?id=" +
                    customer._links.self.href.substring(32)
                  }
                  className="nav-link"
                >
                  <Popup
                    trigger={<Icon name="conversation" />}
                    content={`Interactions with ${customer.firstName} ${customer.lastName}`}
                    size="mini"
                  />
                </Link>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Link to={"/create"} className="nav-link">
        Add Customer
      </Link>
    </>
  );
};

export default CustomerTable;
