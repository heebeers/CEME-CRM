package com.ceme.crm.CRM.entities;

import java.util.Date;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

public class Interaction {
    @Id
    private ObjectId id;

    private String customerId;
    private String interactionType;
    private String interactionNotes;
    private String interactionFollowUpType;
    private Date iteractionFollowUpDate;
    private Date interactionDate;
    private String employeeId;
    private int priorityLevel;

    public String getId() {
        return id.toString();
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public String getCustomerId() {
        return customerId;
    }

    public void setCustomerId(String customerId) {
        this.customerId = customerId;
    }

    public String getInteractionType() {
        return interactionType;
    }

    public void setInteractionType(String interactionType) {
        this.interactionType = interactionType;
    }

    public String getInteractionNotes() {
        return interactionNotes;
    }

    public void setInteractionNotes(String interactionNotes) {
        this.interactionNotes = interactionNotes;
    }

    public String getInteractionFollowUpType() {
        return interactionFollowUpType;
    }

    public void setInteractionFollowUpType(String interactionFollowUpType) {
        this.interactionFollowUpType = interactionFollowUpType;
    }

    public Date getIteractionFollowUpDate() {
        return iteractionFollowUpDate;
    }

    public void setIteractionFollowUpDate(Date iteractionFollowUpDate) {
        this.iteractionFollowUpDate = iteractionFollowUpDate;
    }

    public Date getInteractionDate() {
        return interactionDate;
    }

    public void setInteractionDate(Date interactionDate) {
        this.interactionDate = interactionDate;
    }

    public String getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(String employeeId) {
        this.employeeId = employeeId;
    }

    public int getPriorityLevel() {
        return priorityLevel;
    }

    public void setPriorityLevel(int priorityLevel) {
        this.priorityLevel = priorityLevel;
    }

}