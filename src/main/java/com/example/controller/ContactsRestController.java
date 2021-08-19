package com.example.controller;

import com.example.model.entity.Contact;
import com.example.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ContactsRestController {
    private static final int CONTACTS_ON_PAGE = 1;
    @Autowired
    ContactService contactService;

    @GetMapping("/contacts")
    public List<Contact> getContacts() {
        return contactService.getAllContacts();
    }
    @GetMapping("/contact/{id}")
    public Contact getContact(@PathVariable Long id) {
        return contactService.findById(id);
    }
    @PostMapping("/create_contact")
    public Contact createContact(@RequestBody Contact contact){
        contactService.addContact(contact);
        return contact;
    }
    @PutMapping("/edit_contact/{id}")
    public Contact editContact(@PathVariable Long id, @RequestBody Contact contact){
        contact.setId(id);
        contactService.updateContact(contact);
        return contact;
    }
    @DeleteMapping("/delete_contact/{id}")
    public void deleteContact(@PathVariable Long id){
        contactService.deleteContact(contactService.findById(id));
    }
}
