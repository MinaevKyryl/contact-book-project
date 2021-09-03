package com.example.repository;

import com.example.model.entity.Contact;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ContactRepository extends MongoRepository<Contact, String> {
    Contact findById(Long id);

    Page<Contact> findAll(Pageable pageable);
}
