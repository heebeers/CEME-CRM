// Table.js
import React from "react";
import { Link } from "react-router-dom";

const CustomerTable = ({customers}) => {
    return (
        <table border="1" width="80%">
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Products</th>
                <th>Customer Action</th>
                <th>Interactions</th>
              </tr>
            </thead>
            <tbody>
            {
            customers.map((customer) => (
            <tr>
                <td>{customer.firstName} {customer.lastName}</td>
                <td>{customer.currentAddressLine1} {customer.currentAddressLine2} {customer.currentAddressCity} {customer.currentAddressState} {customer.currentAddresszip}</td>
                <td>{customer.currentPhone}</td>
                <td>{customer.email}</td>
                <td>{customer.products}</td>
                <td><Link to={"/edit/id=" + customer._links.self.href.substring(32)} className="nav-link">Edit Customer</Link></td>
                <td><Link to={"/showInteractions/id=" + customer._links.self.href.substring(32)} className="nav-link">Show Interactions</Link></td>
              </tr>
            ))
            }

              </tbody>
          </table>
    );
  }

export default CustomerTable;