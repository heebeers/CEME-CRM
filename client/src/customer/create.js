import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { addCUSTOMER, store, ADD_CUSTOMER_BEGIN } from "./../actions/actions";
import Button from "@material-ui/core/Button";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

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
  const [email, setEmail] = useState("");
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

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  return (
    <div className="container">
      <div style={{ marginTop: 10 }}>
        <Formik
          initialValues={{
            firstName: "",
            middleName: "",
            lastName: "",
            dateOfBirth: new Date(),
            email: "",
            currentAddressLine1: "",
            currentAddressLine2: "",
            setCurrentAddressCity: "",
            currentAddressState: "",
            currentAddresszip: "",
            currentAddressAddedDate: "",
            previousAddressLine1: "",
            previousAddressLine2: "",
            previousAddressCity: "",
            previousAddressState: "",
            previousAddresszip: "",
            previousAddressAddedDate: "",
            serviceStartDate: "",
            dateOfBirth: "",
            email: "",
            customerPhone: "",
            preferredContact: "",
            secondaryCustomerContact: "",
            products: "",
            activeCustomer: "",
          }}
          validate={(values) => {
            const errors: Partial<Values> = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);
              alert(JSON.stringify(values, null, 2));
            }, 500);
          }}
        >
          {({ submitForm, isSubmitting }) => (
            <Form onSubmit={submitHandler} autoComplete="off">
              <div className="form-row">
                <div className="form-group">
                  <Field
                    component={TextField}
                    id="firstName"
                    name="First Name"
                    label="First Name"
                    className="form-control"
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <Field
                    component={TextField}
                    id="middleName"
                    name="Middle Name"
                    label="Middle Name"
                    className="form-control"
                    onChange={(e) => setMiddleName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <Field
                    component={TextField}
                    id="lastName"
                    name="Last Name"
                    label="Last Name"
                    className="form-control"
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    margin="normal"
                    id="dateOfBirth"
                    label="Date of Birth"
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </MuiPickersUtilsProvider>
              </div>
              <div className="form-group">
                <Field
                  component={TextField}
                  id="currentAddressLine1"
                  name="Current Address Line 1"
                  label="Current Address Line 1"
                  className="form-control"
                  onChange={(e) => setCurrentAddressLine1(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <Field
                  component={TextField}
                  id="currentAddressLine 2"
                  name="Current Address Line 2"
                  label="Current Address Line 2"
                  className="form-control"
                  onChange={(e) => setCurrentAddressLine2(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <Field
                  component={TextField}
                  id="currentAddressCity"
                  name="Current Address City"
                  label="Current Address City"
                  className="form-control"
                  onChange={(e) => setCurrentAddressCity(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <Field
                  component={TextField}
                  id="currentAddressState"
                  name="Current Address State"
                  label="Current Address State"
                  className="form-control"
                  onChange={(e) => setCurrentAddressState(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <Field
                  component={TextField}
                  id="currentAddressZip"
                  name="Current Address Zip"
                  label="Current Address Zip"
                  className="form-control"
                  onChange={(e) => setCurrentAddressZip(e.target.value)}
                  required
                />
              </div>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  margin="normal"
                  id="currentAddressAddedDate"
                  label="Current Address Added Date"
                  format="MM/dd/yyyy"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </MuiPickersUtilsProvider>
              <div className="form-row">
                Previous Address
                <div className="form-group">
                  <label for="previousAddressLine1">Address Line1: </label>
                  <input
                    id="previousAddressLine1"
                    type="text"
                    className="form-control"
                    onChange={(e) => setPreviousAddressLine1(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label for="previousAddressLine2">Address Line2: </label>
                  <input
                    id="previousAddressLine2"
                    type="text"
                    className="form-control"
                    onChange={(e) => setPreviousAddressLine2(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label for="previousAddressCity">City: </label>
                  <input
                    id="previousAddressCity"
                    type="text"
                    className="form-control"
                    onChange={(e) => setPreviousAddressCity(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label for="previousAddressState">State: </label>
                  <input
                    id="previousAddressState"
                    type="text"
                    className="form-control"
                    onChange={(e) => setPreviousAddressState(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label for="previousAddressZip">Zip: </label>
                  <input
                    id="previousAddressZip"
                    type="text"
                    className="form-control"
                    onChange={(e) => setPreviousAddresszip(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      margin="normal"
                      id="previousAddressAddedDate"
                      label="Previous Address Added Date"
                      format="MM/dd/yyyy"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </div>
              </div>
              <div className="form-row">
                Contact Info
                <div className="form-group">
                  <Field
                    component={TextField}
                    name="email"
                    type="email"
                    label="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <Field
                    component={TextField}
                    id="customerPhone"
                    name="Phone"
                    label="Phone"
                    className="form-control"
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="preferredContact">Preferred Contact: </label>
                  <input
                    id="preferredContact"
                    type="text"
                    className="form-control"
                    onChange={(e) => setPreferredContact(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label for="secondaryCustomerContact">
                    Secondary Customer Contact:{" "}
                  </label>
                  <input
                    id="secondaryCustomerContact"
                    type="text"
                    className="form-control"
                    onChange={(e) =>
                      setSecondaryCustomerContact(e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      margin="normal"
                      id="serviceStartDate"
                      label="Service Start Date"
                      format="MM/dd/yyyy"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </div>
                <div className="form-group">
                  <label for="products">Products: </label>
                  <input
                    id="products"
                    type="text"
                    className="form-control"
                    onChange={(e) => setProducts(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label for="activeCustomer">Active Customer: </label>
                  <input
                    id="activeCustomer"
                    type="text"
                    className="form-control"
                    onChange={(e) => setActiveCustomer(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <Button
                  type="submit"
                  fullWidth
                  variant="raised"
                  color="primary"
                  value="Create Customer"
                >
                  Submit
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Create;
