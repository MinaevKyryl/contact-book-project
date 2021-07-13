package com.example.repository;

import com.example.model.entity.Contact;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ContactRepository extends MongoRepository<Contact, String> {
    Contact findById(Long id);
    List<Contact> findByFullNameContainingIgnoreCase(String fullName);
}
