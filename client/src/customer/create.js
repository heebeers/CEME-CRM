import React, { useState } from "react";
import axios from "axios";
import { connect } from 'react-redux';
import {addCUSTOMER, store, ADD_CUSTOMER_BEGIN} from './../actions/actions';

import { useSelector, useDispatch } from "react-redux";


function Create(props) {

  const customerState = useSelector((state) => state);
  const {customer, loading, error} = customerState;
  const dispatch = useDispatch();


  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEMail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  


  const submitHandler = async(e) => {
    e.preventDefault();
    // this is empty
    customer.firstName = firstName;
    customer.lastName = lastName;
    customer.email = email;
    customer.customerPhone = customerPhone;

    dispatch(addCUSTOMER(customer));
  };

  return (
    <>
      <div style={{ marginTop: 10 }}>
        <h3>Add New Customer</h3>

        <form onSubmit={submitHandler} autoComplete="off">
          <div className="form-row">
            <div className="form-group col-md-5">
              <label for="firstName">First Name: </label>
              <input
                id="firstName"
                type="text"
                className="form-control"
                onChange={(e) => setFirstName(e.target.value)}
                
              />
            </div>
            <div className="form-group col-md-5">
              <label for="lastName">Last Name: </label>
              <input
                id="lastName"
                type="text"
                className="form-control"
                onChange={(e) => setLastName(e.target.value)}
                
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-5">
              <label for="email">EMail: </label>
              <input
                id="email"
                type="text"
                className="form-control"
                onChange={(e) => setEMail(e.target.value)}
                
              />
            </div>
            <div className="form-group col-md-5">
              <label for="customerPhone">Customer Phone: </label>
              <input
                id="customerPhone"
                type="number"
                className="form-control"
                onChange={(e) => setCustomerPhone(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create Customer"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
      </>
  );
}

export default Create;