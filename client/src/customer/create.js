import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { addCUSTOMER, store, ADD_CUSTOMER_BEGIN } from "./../actions/actions";
import {
  Button,
  Input,
  Grid,
  Container,
  Form,
  Divider,
  GridColumn,
} from "semantic-ui-react";
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
          <h4>Add New Customer</h4>
          <Form onSubmit={submitHandler} autoComplete="off">
            <Form>
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  label="First Name"
                  id="firstName"
                  type="text"
                  className="form-control"
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <Form.Input
                  fluid
                  label="Middle Name"
                  id="middleName"
                  type="text"
                  className="form-control"
                  onChange={(e) => setMiddleName(e.target.value)}
                />
                <Form.Input
                  fluid
                  label="Last Name"
                  id="lastName"
                  type="text"
                  className="form-control"
                  onChange={(e) => setLastName(e.target.value)}
                />
                <SemanticDatepicker
                  label="Date of Birth"
                  onChange={(e) => (event, data) => setDateOfBirth(data.value)}
                />
              </Form.Group>
              <Divider />
              <h4>Current Address</h4>
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  label="Address Line 1"
                  id="currentAddressLine1"
                  type="text"
                  className="form-control"
                  onChange={(e) => setCurrentAddressLine1(e.target.value)}
                />
                <Form.Input
                  fluid
                  label="Address Line 2"
                  id="currentAddressLine1"
                  type="text"
                  className="form-control"
                  onChange={(e) => setCurrentAddressLine2(e.target.value)}
                />
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  label="City"
                  id="currentAddressCity"
                  type="text"
                  className="form-control"
                  onChange={(e) => setCurrentAddressCity(e.target.value)}
                />
                <Form.Input
                  fluid
                  label="State"
                  id="currentAddressState"
                  type="text"
                  className="form-control"
                  onChange={(e) => setCurrentAddressState(e.target.value)}
                />
                <Form.Input
                  fluid
                  label="Zip"
                  id="currentAddressZip"
                  type="text"
                  className="form-control"
                  onChange={(e) => setCurrentAddressZip(e.target.value)}
                />
                <SemanticDatepicker
                  id="currentAddressAddedDate"
                  label="Added Date"
                  onChange={(e) => (event, data) =>
                    setCurrentAddressAddedDate(data.value)}
                />
              </Form.Group>
              <Divider />
              <h4>Previous Address</h4>
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  label="Address Line 1"
                  id="previousAddressLine1"
                  type="text"
                  className="form-control"
                  onChange={(e) => setPreviousAddressLine1(e.target.value)}
                />
                <Form.Input
                  fluid
                  label="Address Line 2"
                  id="previousAddressLine2"
                  type="text"
                  className="form-control"
                  onChange={(e) => setPreviousAddressLine2(e.target.value)}
                />
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  label="City"
                  id="previousAddressCity"
                  type="text"
                  className="form-control"
                  onChange={(e) => setPreviousAddressCity(e.target.value)}
                />
                <Form.Input
                  fluid
                  label="State"
                  id="previousAddressState"
                  type="text"
                  className="form-control"
                  onChange={(e) => setPreviousAddressState(e.target.value)}
                />
                <Form.Input
                  fluid
                  label="Zip"
                  id="previousAddressZip"
                  type="text"
                  className="form-control"
                  onChange={(e) => setPreviousAddresszip(e.target.value)}
                />
                <SemanticDatepicker
                  id="previousAddressAddedDate"
                  label="Added Date"
                  onChange={(e) => (event, data) =>
                    setPreviousAddressAddedDate(data.value)}
                />
              </Form.Group>
              <Divider fitted />
              <h4>Contact Info</h4>
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  label="Email"
                  id="email"
                  type="email"
                  className="form-control"
                  onChange={(e) => setEMail(e.target.value)}
                />
                <Form.Input
                  fluid
                  label="Phone"
                  id="customerPhone"
                  type="text"
                  className="form-control"
                  onChange={(e) => setCustomerPhone(e.target.value)}
                />
                <Form.Input
                  fluid
                  label="Preferred Contact"
                  id="preferredContact"
                  type="text"
                  className="form-control"
                  onChange={(e) => setPreferredContact(e.target.value)}
                />
                <Form.Input
                  fluid
                  label="Secondary Contact"
                  id="secondaryCustomerContact"
                  type="text"
                  className="form-control"
                  onChange={(e) => setSecondaryCustomerContact(e.target.value)}
                />
              </Form.Group>
              <Form.Group widths="equal">
                <SemanticDatepicker
                  id="serviceStartDate"
                  label="Service Start Date"
                  onChange={(e) => (event, data) =>
                    setServiceStartDate(data.value)}
                />
                <Form.Input
                  fluid
                  label="Products"
                  id="products"
                  type="text"
                  className="form-control"
                  onChange={(e) => setProducts(e.target.value)}
                />
                <Form.Input
                  label="Active Customer"
                  id="activeCustomer"
                  type="text"
                  className="form-control"
                  onChange={(e) => setActiveCustomer(e.target.value)}
                />
              </Form.Group>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                value="Create Customer"
              >
                Primary
              </Button>
            </Form>
          </Form>
        </div>
      </Container>
    </div>
  );
}

export default Create;
