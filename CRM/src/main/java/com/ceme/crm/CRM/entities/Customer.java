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
    private String currentStreetAddress;
    private String currentAddressLine1;
    private String currentAddressLine2;
    private String currentAddressCity;
    private String currentAddressState;
    private String currentAddresszip;
    private Date currentAddressAddedDate;
    private String previousStreetAddress;
    private String previousAddressLine1;
    private String previousAddressLine2;
    private String previousAddressCity;
    private String previousAddressState;
    private String previousAddresszip;
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

    public String getCurrentStreetAddress() {
        return currentStreetAddress;
    }

    public void setCurrentStreetAddress(String currentStreetAddress) {
        this.currentStreetAddress = currentStreetAddress;
    }

    public String getCurrentAddressLine1() {
        return currentAddressLine1;
    }

    public void setCurrentAddressLine1(String currentAddressLine1) {
        this.currentAddressLine1 = currentAddressLine1;
    }

    public String getCurrentAddressLine2() {
        return currentAddressLine2;
    }

    public void setCurrentAddressLine2(String currentAddressLine2) {
        this.currentAddressLine2 = currentAddressLine2;
    }

    public String getCurrentAddressCity() {
        return currentAddressCity;
    }

    public void setCurrentAddressCity(String currentAddressCity) {
        this.currentAddressCity = currentAddressCity;
    }

    public String getCurrentAddressState() {
        return currentAddressState;
    }

    public void setCurrentAddressState(String currentAddressState) {
        this.currentAddressState = currentAddressState;
    }

    public String getCurrentAddresszip() {
        return currentAddresszip;
    }

    public void setCurrentAddresszip(String currentAddresszip) {
        this.currentAddresszip = currentAddresszip;
    }

    public String getPreviousStreetAddress() {
        return previousStreetAddress;
    }

    public void setPreviousStreetAddress(String previousStreetAddress) {
        this.previousStreetAddress = previousStreetAddress;
    }

    public String getPreviousAddressLine1() {
        return previousAddressLine1;
    }

    public void setPreviousAddressLine1(String previousAddressLine1) {
        this.previousAddressLine1 = previousAddressLine1;
    }

    public String getPreviousAddressLine2() {
        return previousAddressLine2;
    }

    public void setPreviousAddressLine2(String previousAddressLine2) {
        this.previousAddressLine2 = previousAddressLine2;
    }

    public String getPreviousAddressCity() {
        return previousAddressCity;
    }

    public void setPreviousAddressCity(String previousAddressCity) {
        this.previousAddressCity = previousAddressCity;
    }

    public String getPreviousAddressState() {
        return previousAddressState;
    }

    public void setPreviousAddressState(String previousAddressState) {
        this.previousAddressState = previousAddressState;
    }

    public String getPreviousAddresszip() {
        return previousAddresszip;
    }

    public void setPreviousAddresszip(String previousAddresszip) {
        this.previousAddresszip = previousAddresszip;
    }

}