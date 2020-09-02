import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { addCUSTOMER, store, ADD_CUSTOMER_BEGIN } from "./../actions/actions";
import { Button, Input, Grid, Container } from "semantic-ui-react";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";

import { useSelector, useDispatch } from "react-redux";

function Create(props) {
  const customerState = useSelector((state) => state);
  const { customer, loading, error } = customerState;
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [currentAddressLine1, setCurrentAddressLine1] = useState("");
  const [currentAddressLine2, setCurrentAddressLine2] = useState("");
  const [currentAddressCity, setCurrentAddressCity] = useState("");
  const [currentAddressState, setCurrentAddressState] = useState("");
  const [currentAddresszip, setCurrentAddressZip] = useState("");
  const [currentAddressAddedDate, setCurrentAddressAddedDate] = useState("");
  const [previousAddressLine1, setPreviousAddressLine1] = useState("");
  const [previousAddressLine2, setPreviousAddressLine2] = useState("");
  const [previousAddressCity, setPreviousAddressCity] = useState("");
  const [previousAddressState, setPreviousAddressState] = useState("");
  const [previousAddresszip, setPreviousAddresszip] = useState("");
  const [previousAddressAddedDate, setPreviousAddressAddedDate] = useState("");
  const [serviceStartDate, setServiceStartDate] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEMail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [preferredContact, setPreferredContact] = useState("");
  const [secondaryCustomerContact, setSecondaryCustomerContact] = useState("");
  const [products, setProducts] = useState("");
  const [activeCustomer, setActiveCustomer] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    // this is empty
    customer.firstName = firstName;
    customer.lastName = lastName;
    customer.middleName = middleName;
    customer.currentAddressLine1 = currentAddressLine1;
    customer.currentAddressLine2 = currentAddressLine2;
    customer.currentAddressCity = currentAddressCity;
    customer.currentAddressState = currentAddressState;
    customer.currentAddresszip = currentAddresszip;
    customer.currentAddressAddedDate = currentAddressAddedDate;
    customer.previousAddressLine1 = previousAddressLine1;
    customer.previousAddressLine2 = previousAddressLine2;
    customer.previousAddressCity = previousAddressCity;
    customer.previousAddressState = previousAddressState;
    customer.previousAddresszip = previousAddresszip;
    customer.previousAddressAddedDate = previousAddressAddedDate;
    customer.serviceStartDate = serviceStartDate;
    customer.dateOfBirth = dateOfBirth;
    customer.email = email;
    customer.customerPhone = customerPhone;
    customer.preferredContact = preferredContact;
    customer.secondaryCustomerContact = secondaryCustomerContact;
    customer.products = products;
    customer.activeCustomer = activeCustomer;

    dispatch(addCUSTOMER(customer));
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
          <h3>Add New Customer</h3>

          <form onSubmit={submitHandler} autoComplete="off">
            <div className="form-row">
              <div className="form-group col-md-5">
                <Input
                  label="First Name"
                  id="firstName"
                  type="text"
                  className="form-control"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="form-group col-md-5">
                <Input
                  label="Middle Name"
                  id="middleName"
                  type="text"
                  className="form-control"
                  onChange={(e) => setMiddleName(e.target.value)}
                />
              </div>
              <div className="form-group col-md-5">
                <Input
                  label="Last Name"
                  id="lastName"
                  type="text"
                  className="form-control"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-5">
                <SemanticDatepicker
                  label="Date of Birth"
                  onChange={(e) => (event, data) => setDateOfBirth(data.value)}
                />
              </div>
            </div>
            <div className="form-row">
              Current Address
              <div className="form-group col-md-5">
                <Input
                  label="Address Line 1"
                  id="currentAddressLine1"
                  type="text"
                  className="form-control"
                  onChange={(e) => setCurrentAddressLine1(e.target.value)}
                />
              </div>
              <div className="form-group col-md-5">
                <Input
                  label="Address Line 2"
                  id="currentAddressLine1"
                  type="text"
                  className="form-control"
                  onChange={(e) => setCurrentAddressLine2(e.target.value)}
                />
              </div>
              <div className="form-group col-md-5">
                <Input
                  label="City"
                  id="currentAddressCity"
                  type="text"
                  className="form-control"
                  onChange={(e) => setCurrentAddressCity(e.target.value)}
                />
              </div>
              <div className="form-group col-md-5">
                <Input
                  label="State"
                  id="currentAddressState"
                  type="text"
                  className="form-control"
                  onChange={(e) => setCurrentAddressState(e.target.value)}
                />
              </div>
              <div className="form-group col-md-5">
                <Input
                  label="Zip"
                  id="currentAddressZip"
                  type="text"
                  className="form-control"
                  onChange={(e) => setCurrentAddressZip(e.target.value)}
                />
              </div>
              <div className="form-group col-md-5">
                <label for="currentAddressAddedDate">
                  Address Added Date:{" "}
                </label>
                <input
                  id="currentAddressAddedDate"
                  type="date"
                  className="form-control"
                  onChange={(e) => setCurrentAddressAddedDate(e.target.value)}
                />
              </div>
            </div>
            <div className="form-row">
              Previous Address
              <div className="form-group col-md-5">
                <Input
                  label="Address Line 1"
                  id="previousAddressLine1"
                  type="text"
                  className="form-control"
                  onChange={(e) => setPreviousAddressLine1(e.target.value)}
                />
              </div>
              <div className="form-group col-md-5">
                <Input
                  label="Address Line 2"
                  id="previousAddressLine2"
                  type="text"
                  className="form-control"
                  onChange={(e) => setPreviousAddressLine2(e.target.value)}
                />
              </div>
              <div className="form-group col-md-5">
                <Input
                  label="City"
                  id="previousAddressCity"
                  type="text"
                  className="form-control"
                  onChange={(e) => setPreviousAddressCity(e.target.value)}
                />
              </div>
              <div className="form-group col-md-5">
                <Input
                  label="State"
                  id="previousAddressState"
                  type="text"
                  className="form-control"
                  onChange={(e) => setPreviousAddressState(e.target.value)}
                />
              </div>
              <div className="form-group col-md-5">
                <Input
                  label="Zip"
                  id="previousAddressZip"
                  type="text"
                  className="form-control"
                  onChange={(e) => setPreviousAddresszip(e.target.value)}
                />
              </div>
              <div className="form-group col-md-5">
                <Input
                  label="Date"
                  id="previousAddressAddedDate"
                  type="date"
                  className="form-control"
                  onChange={(e) => setPreviousAddressAddedDate(e.target.value)}
                />
              </div>
            </div>
            <div className="form-row">
              Contact Info
              <div className="form-group col-md-5">
                <Input
                  label="Email"
                  id="email"
                  type="email"
                  className="form-control"
                  onChange={(e) => setEMail(e.target.value)}
                />
              </div>
              <div className="form-group col-md-5">
                <Input
                  label="Phone"
                  id="customerPhone"
                  type="text"
                  className="form-control"
                  onChange={(e) => setCustomerPhone(e.target.value)}
                />
              </div>
              <div className="form-group col-md-5">
                <Input
                  label="Preferred Contact"
                  id="preferredContact"
                  type="text"
                  className="form-control"
                  onChange={(e) => setPreferredContact(e.target.value)}
                />
              </div>
              <div className="form-group col-md-5">
                <Input
                  label="Secondary Contact"
                  id="secondaryCustomerContact"
                  type="text"
                  className="form-control"
                  onChange={(e) => setSecondaryCustomerContact(e.target.value)}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-5">
                <Input
                  label="Service Start Date"
                  id="serviceStartDate"
                  type="date"
                  className="form-control"
                  onChange={(e) => setServiceStartDate(e.target.value)}
                />
              </div>
              <div className="form-group col-md-5">
                <Input
                  label="Products"
                  id="products"
                  type="text"
                  className="form-control"
                  onChange={(e) => setProducts(e.target.value)}
                />
              </div>
              <div className="form-group col-md-5">
                <Input
                  label="Active Customer"
                  id="activeCustomer"
                  type="text"
                  className="form-control"
                  onChange={(e) => setActiveCustomer(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <Button
                variant="contained"
                color="primary"
                type="submit"
                value="Create Customer"
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

export default Create;
