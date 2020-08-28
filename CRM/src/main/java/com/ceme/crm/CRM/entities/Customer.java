package com.ceme.crm.CRM.entities;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

import java.util.Date;

public class Customer {
    @Id
    private ObjectId id;

    private String firstName;
    private String middleName;
    private String lastName;
    private String currentAddress;
    private Date currentAddressAddedDate;
    private String previousAddress;
    private Date previousAddressAddedDate;
    private Date serviceStartDate;
    private Date dateOfBirth;
    private String email;
    private String customerPhone;
    private String preferredContact;
    private String secondaryCustomerContact;
    private String products;
    private boolean activeCustomer;

    public String getId() {
        return id.toString();
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getCurrentAddress() {
        return currentAddress;
    }

    public void setCurrentAddress(String currentAddres) {
        this.currentAddress = currentAddres;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCustomerPhone() {
        return customerPhone;
    }

    public void setCustomerPhone(String customerPhone) {
        this.customerPhone = customerPhone;
    }

    public String getPreferredContact() {
        return preferredContact;
    }

    public void setPreferredContact(String preferredContact) {
        this.preferredContact = preferredContact;
    }

    public String getProducts() {
        return products;
    }

    public void setProducts(String products) {
        this.products = products;
    }

    public Date getCurrentAddressAddedDate() {
        return currentAddressAddedDate;
    }

    public void setCurrentAddressAddedDate(Date currentAddressAddedDate) {
        this.currentAddressAddedDate = currentAddressAddedDate;
    }

    public String getPreviousAddress() {
        return previousAddress;
    }

    public void setPreviousAddress(String previousAddress) {
        this.previousAddress = previousAddress;
    }

    public Date getPreviousAddressAddedDate() {
        return previousAddressAddedDate;
    }

    public void setPreviousAddressAddedDate(Date previousAddressAddedDate) {
        this.previousAddressAddedDate = previousAddressAddedDate;
    }

    public Date getServiceStartDate() {
        return serviceStartDate;
    }

    public void setServiceStartDate(Date serviceStartDate) {
        this.serviceStartDate = serviceStartDate;
    }

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getSecondaryCustomerContact() {
        return secondaryCustomerContact;
    }

    public void setSecondaryCustomerContact(String secondaryCustomerContact) {
        this.secondaryCustomerContact = secondaryCustomerContact;
    }

    public boolean isActiveCustomer() {
        return activeCustomer;
    }

    public void setActiveCustomer(boolean activeCustomer) {
        this.activeCustomer = activeCustomer;
    }

}