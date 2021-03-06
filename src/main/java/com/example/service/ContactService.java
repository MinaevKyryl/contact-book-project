package com.example.service;

import com.example.model.entity.Contact;
import com.example.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactService {
    @Autowired
    ContactRepository contactRepository;
    @Autowired
    SequenceGeneratorService sequenceGeneratorService;

    public List<Contact> getAllContacts() {
        return contactRepository.findAll();
    }

    public void addContact(Contact contact) {
        contact.setId(sequenceGeneratorService.getNextSequence(Contact.SEQUENCE_NAME));
        contactRepository.save(contact);
    }

    public Contact findById(Long id) {
        return contactRepository.findById(id);
    }

    public void updateContact(Contact contact) {
        contactRepository.save(contact);
    }

    public void deleteContact(Contact contact) {
        contactRepository.delete(contact);
    }
}
