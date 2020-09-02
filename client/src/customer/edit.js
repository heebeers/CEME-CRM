import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from 'react-redux';
import {updateCUSTOMER, getCUSTOMER, store, UPDATE_CUSTOMER_BEGIN} from '../actions/actions';
import { useSelector, useDispatch } from "react-redux";


function Edit(props) {
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

    dispatch(updateCUSTOMER(customer));
  };

  return (
    <>
      <div style={{ marginTop: 10 }}>
        <h3>Update Current Customer</h3>

        <form onSubmit={submitHandler}>
          <div className="form-row">
            <div className="form-group col-md-5">
              <label for="firstName">First Name: </label>
              <input
                id="firstName"
                type="text"
                className="form-control" defaultValue = {customer.firstName}
                onChange={(e) => setFirstName(e.target.value)}                
              />
            </div>
            <div className="form-group col-md-5">
              <label for="middleName">Middle Name: </label>
              <input
                id="middleName"
                type="text"
                className="form-control" defaultValue = {customer.middleName}
                onChange={(e) => setMiddleName(e.target.value)}                
              />
            </div>
            <div className="form-group col-md-5">
              <label for="lastName">Last Name: </label>
              <input
                id="lastName"
                type="text"
                className="form-control" defaultValue = {customer.lastName}
                onChange={(e) => setLastName(e.target.value)}                
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-5">
              <label for="dateOfBirth">Date Of Birth</label>
              <input
                id="dateOfBirth"
                type="date"
                className="form-control" defaultValue = {customer.dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}                
              />
            </div>
          </div>
          <div className="form-row">Current Address
            <div className="form-group col-md-5">
              <label for="currentAddressLine1">Address Line1: </label>
              <input
                id="currentAddressLine1"
                type="text"
                className="form-control" defaultValue = {customer.currentAddressLine1}
                onChange={(e) => setCurrentAddressLine1(e.target.value)}                
              />
            </div>
            <div className="form-group col-md-5">
              <label for="currentAddressLine2">Address Line2: </label>
              <input
                id="currentAddressLine1"
                type="text"
                className="form-control" defaultValue = {customer.currentAddressLine2}
                onChange={(e) => setCurrentAddressLine2(e.target.value)}                
              />
            </div>
            <div className="form-group col-md-5">
              <label for="currentAddressCity">City: </label>
              <input
                id="currentAddressCity"
                type="text"
                className="form-control" defaultValue = {customer.currentAddressCity}
                onChange={(e) => setCurrentAddressCity(e.target.value)}                
              />
            </div>
            <div className="form-group col-md-5">
              <label for="currentAddressState">State: </label>
              <input
                id="currentAddressState"
                type="text"
                className="form-control" defaultValue = {customer.currentAddressState}
                onChange={(e) => setCurrentAddressState(e.target.value)}                
              />
            </div>
            <div className="form-group col-md-5">
              <label for="currentAddressZip">Zip: </label>
              <input
                id="currentAddressZip"
                type="text"
                className="form-control" defaultValue = {customer.currentAddressCity}
                onChange={(e) => setCurrentAddressZip(e.target.value)}                
              />
            </div>
            <div className="form-group col-md-5">
              <label for="currentAddressAddedDate">Address Added Date: </label>
              <input
                id="currentAddressAddedDate"
                type="date"
                className="form-control" defaultValue = {customer.currentAddressAddedDate}
                onChange={(e) => setCurrentAddressAddedDate(e.target.value)}                
              />
            </div>
          </div>
          <div className="form-row">Previous Address
            <div className="form-group col-md-5">
              <label for="previousAddressLine1">Address Line1: </label>
              <input
                id="previousAddressLine1"
                type="text"
                className="form-control" defaultValue = {customer.previousAddressLine1}
                onChange={(e) => setPreviousAddressLine1(e.target.value)}                
              />
            </div>
            <div className="form-group col-md-5">
              <label for="previousAddressLine2">Address Line2: </label>
              <input
                id="previousAddressLine2"
                type="text"
                className="form-control" defaultValue = {customer.previousAddressLine2}
                onChange={(e) => setPreviousAddressLine2(e.target.value)}                
              />
            </div>
            <div className="form-group col-md-5">
              <label for="previousAddressCity">City: </label>
              <input
                id="previousAddressCity"
                type="text"
                className="form-control" defaultValue = {customer.previousAddressCity}
                onChange={(e) => setPreviousAddressCity(e.target.value)}                
              />
            </div>
            <div className="form-group col-md-5">
              <label for="previousAddressState">State: </label>
              <input
                id="previousAddressState"
                type="text"
                className="form-control" defaultValue = {customer.previousAddressState}
                onChange={(e) => setPreviousAddressState(e.target.value)}                
              />
            </div>
            <div className="form-group col-md-5">
              <label for="previousAddressZip">Zip: </label>
              <input
                id="previousAddressZip"
                type="text"
                className="form-control" defaultValue = {customer.previousAddresszip}
                onChange={(e) => setPreviousAddresszip(e.target.value)}                
              />
            </div>
            <div className="form-group col-md-5">
              <label for="previousAddressAddedDate">Address Added Date: </label>
              <input
                id="previousAddressAddedDate"
                type="date"
                className="form-control" defaultValue = {customer.previousAddressAddedDate}
                onChange={(e) => setPreviousAddressAddedDate(e.target.value)}                
              />
            </div>
          </div>
          <div className="form-row">Contact Info
            <div className="form-group col-md-5">
              <label for="email">EMail: </label>
              <input
                id="email"
                type="email"
                className="form-control" defaultValue = {customer.email}
                onChange={(e) => setEMail(e.target.value)}                
              />
            </div>
            <div className="form-group col-md-5">
              <label for="customerPhone">Phone: </label>
              <input
                id="customerPhone"
                type="text"
                className="form-control" defaultValue = {customer.customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
              />
            </div>
            <div className="form-group col-md-5">
              <label for="preferredContact">Preferred Contact: </label>
              <input
                id="preferredContact"
                type="text"
                className="form-control" defaultValue = {customer.preferredContact}
                onChange={(e) => setPreferredContact(e.target.value)}
              />
            </div>
            <div className="form-group col-md-5">
              <label for="secondaryCustomerContact">Secondary Customer Contact: </label>
              <input
                id="secondaryCustomerContact"
                type="text"
                className="form-control" defaultValue = {customer.secondaryCustomerContact}
                onChange={(e) => setSecondaryCustomerContact(e.target.value)}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-5">
              <label for="serviceStartDate">Service Start Date: </label>
              <input
                id="serviceStartDate"
                type="date"
                className="form-control" defaultValue = {customer.serviceStartDate}   
                         onChange={(e) => setServiceStartDate(e.target.value)}                
              />
            </div>
            <div className="form-group col-md-5">
              <label for="products">Products: </label>
              <input
                id="products"
                type="text"
                className="form-control" defaultValue = {customer.products}
                onChange={(e) => setProducts(e.target.value)}                
              />
            </div>
            <div className="form-group col-md-5">
              <label for="activeCustomer">Active Customer: </label>
              <input
                id="activeCustomer"
                type="text"
                className="form-control" defaultValue = {customer.activeCustomer}
                onChange={(e) => setActiveCustomer(e.target.value)}                
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Update Customer"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
      </>
  );
}

export default Edit;