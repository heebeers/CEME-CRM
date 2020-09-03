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
    private Date interactionFollowUpDate;
    private Date interactionDate;
    private String employeeId;
    private String priorityLevel;

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

    public Date getInteractionFollowUpDate() {
        return interactionFollowUpDate;
    }

    public void setInteractionFollowUpDate(Date interactionFollowUpDate) {
        this.interactionFollowUpDate = interactionFollowUpDate;
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

    public String getPriorityLevel() {
        return priorityLevel;
    }

    public void setPriorityLevel(String priorityLevel) {
        this.priorityLevel = priorityLevel;
    }

}