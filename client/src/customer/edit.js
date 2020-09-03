import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { connect } from 'react-redux';
import {updateCUSTOMER, getCUSTOMER, store, UPDATE_CUSTOMER_BEGIN} from '../actions/actions';
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Input,
  Grid,
  Container,
  Form,
  Divider,
  GridColumn,
} from "semantic-ui-react";

function Edit(props) {
  
  let history = useHistory();
  const customerState = useSelector((state) => state);
  const {customer, loading, error} = customerState;
 
  const dispatch = useDispatch();
  const queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);
  let id = urlParams.get("id");
 
  useEffect(() => {
    dispatch(getCUSTOMER(id));
    return () => {
      //
    };
  }, []);
    
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

  const submitHandler = async(e) => {
    e.preventDefault();
    // this is empty
    console.log(e.target);
    customer.firstName = e.target.firstName.value;
    customer.lastName = e.target.lastName.value;
    customer.middleName =  e.target.middleName.value;
    customer.currentAddressLine1 =  e.target.currentAddressLine1.value;
    customer.currentAddressLine2 =  e.target.currentAddressLine2.value;
    customer.currentAddressCity =  e.target.currentAddressCity.value;
    customer.currentAddressState =  e.target.currentAddressState.value;
    customer.currentAddresszip =  e.target.currentAddresszip.value;
    customer.currentAddressAddedDate =  e.target.currentAddressAddedDate.value;
    customer.previousAddressLine1 =  e.target.previousAddressLine1.value;
    customer.previousAddressLine2 =  e.target.previousAddressLine2.value;
    customer.previousAddressCity =  e.target.previousAddressCity.value;
    customer.previousAddressState =  e.target.previousAddressState.value;
    customer.previousAddresszip =  e.target.previousAddresszip.value;
    customer.previousAddressAddedDate =  e.target.previousAddressAddedDate.value;
    customer.serviceStartDate =  e.target.serviceStartDate.value;
    customer.dateOfBirth =  e.target.dateOfBirth.value;
    customer.email =  e.target.email.value;
    customer.customerPhone =  e.target.customerPhone.value;
    customer.preferredContact =  e.target.preferredContact.value;
    customer.secondaryCustomerContact =  e.target.secondaryCustomerContact.value;
    customer.products =  e.target.products.value;
    customer.activeCustomer =  e.target.activeCustomer.value;

    dispatch(updateCUSTOMER(customer));
    history.push("./listCustomers");

  };

  return (
    <>
      <div style={{ marginTop: 10 }}>
        <h4>Update Current Customer</h4>
        <Form onSubmit={submitHandler} autoComplete="off">
            <Form>
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  label="First Name"
                  id="firstName"
                  type="text"
                  className="form-control" defaultValue = {customer.firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <Form.Input
                  fluid
                  label="Middle Name"
                  id="middleName"
                  type="text"
                  className="form-control" defaultValue = {customer.middleName}
                  onChange={(e) => setMiddleName(e.target.value)}
                />
                <Form.Input
                  fluid
                  label="Last Name"
                  id="lastName"
                  type="text"
                  className="form-control" defaultValue = {customer.lastName}
                  onChange={(e) => setLastName(e.target.value)}
                /> 
                <Form.Input  label = "Date of Birth"
                  id="dateOfBirth"
                  type="date"
                  className="form-control" defaultValue = {customer.dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}                
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
                  className="form-control" defaultValue = {customer.currentAddressLine1}
                  onChange={(e) => setCurrentAddressLine1(e.target.value)}
                />
                <Form.Input
                  fluid
                  label="Address Line 2"
                  id="currentAddressLine2"
                  type="text"
                  className="form-control" defaultValue = {customer.currentAddressLine2}
                  onChange={(e) => setCurrentAddressLine2(e.target.value)}
                />
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  label="City"
                  id="currentAddressCity"
                  type="text"
                  className="form-control" defaultValue = {customer.currentAddressCity}
                  onChange={(e) => setCurrentAddressCity(e.target.value)}
                />
                <Form.Input
                  fluid
                  label="State"
                  id="currentAddressState"
                  type="text"
                  className="form-control" defaultValue = {customer.currentAddressState}
                  onChange={(e) => setCurrentAddressState(e.target.value)}
                />
                <Form.Input
                  fluid
                  label="Zip"
                  id="currentAddresszip"
                  type="text"
                  className="form-control" defaultValue = {customer.currentAddresszip}
                  onChange={(e) => setCurrentAddressZip(e.target.value)}
                />  
              <Form.Input label = "Addres Added Date"
                id="currentAddressAddedDate"
                type="date"
                className="form-control" defaultValue = {customer.currentAddressAddedDate}
                onChange={(e) => setCurrentAddressAddedDate(e.target.value)}                
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
                  className="form-control" defaultValue = {customer.previousAddressLine1}
                  onChange={(e) => setPreviousAddressLine1(e.target.value)}
                />
                <Form.Input
                  fluid
                  label="Address Line 2"
                  id="previousAddressLine2"
                  type="text"
                  className="form-control" defaultValue = {customer.previousAddressLine2}
                  onChange={(e) => setPreviousAddressLine2(e.target.value)}
                />
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  label="City"
                  id="previousAddressCity"
                  type="text"
                  className="form-control" defaultValue = {customer.previousAddressCity}
                  onChange={(e) => setPreviousAddressCity(e.target.value)}
                />
                <Form.Input
                  fluid
                  label="State"
                  id="previousAddressState"
                  type="text"
                  className="form-control" defaultValue = {customer.previousAddressState}
                  onChange={(e) => setPreviousAddressState(e.target.value)}
                />
                <Form.Input
                  fluid
                  label="Zip"
                  id="previousAddresszip"
                  type="text"
                  className="form-control" defaultValue = {customer.previousAddresszip}
                  onChange={(e) => setPreviousAddresszip(e.target.value)}
                />
                 <Form.Input
                id="previousAddressAddedDate" label = "Address Added Date"
                type="date"
                className="form-control" defaultValue = {customer.previousAddressAddedDate}
                onChange={(e) => setPreviousAddressAddedDate(e.target.value)}                
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
                  className="form-control" defaultValue = {customer.email}
                  onChange={(e) => setEMail(e.target.value)}
                />
                <Form.Input
                  fluid
                  label="Phone"
                  id="customerPhone"
                  type="text"
                  className="form-control" defaultValue = {customer.customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                />
                <Form.Input
                  fluid
                  label="Preferred Contact"
                  id="preferredContact"
                  type="text"
                  className="form-control" defaultValue = {customer.preferredContact}
                  onChange={(e) => setPreferredContact(e.target.value)}
                />
                <Form.Input
                  fluid
                  label="Secondary Contact"
                  id="secondaryCustomerContact"
                  type="text"
                  className="form-control" defaultValue = {customer.secondaryCustomerContact}
                  onChange={(e) => setSecondaryCustomerContact(e.target.value)}
                />
              </Form.Group>
              <Form.Group widths="equal">
                  <label for="serviceStartDate">Service Start Date: </label>
              <Form.Input label = "Service Start Date"
                id="serviceStartDate"
                type="date"
                className="form-control" defaultValue = {customer.serviceStartDate}   
                         onChange={(e) => setServiceStartDate(e.target.value)}                
              />
            
            <Form.Input
                  fluid
                  label="Products"
                  id="products"
                  type="text"
                  className="form-control" defaultValue = {customer.products}
                  onChange={(e) => setProducts(e.target.value)}
                />
                <Form.Input
                  label="Active Customer"
                  id="activeCustomer"
                  type="checkbox"
                  className="form-control" defaultValue = {customer.activeCustomer}
                  onChange={(e) => setActiveCustomer(e.target.value)}
                />
              </Form.Group>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                value="Update Customer"
              >
               Update Customer
              </Button>
            </Form>
          </Form>
      </div>
      </>
  );
}

export default Edit;