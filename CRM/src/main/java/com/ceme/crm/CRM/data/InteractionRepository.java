package com.ceme.crm.CRM.data;

import java.util.List;

import com.ceme.crm.CRM.entities.Interaction;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@RepositoryRestResource(collectionResourceRel = "interactions", path = "interactions")
public interface InteractionRepository extends MongoRepository<Interaction, String> {

    List<Interaction> findByCustomerId(@Param("id") String id);

    List<Interaction> findByEmployeeId(@Param("id") String id);
}