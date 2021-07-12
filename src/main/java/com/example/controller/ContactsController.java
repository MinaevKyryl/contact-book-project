package com.example.controller;

import com.example.model.entity.Contact;
import com.example.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import javax.validation.Valid;

@Controller
public class ContactsController {
    @Autowired
    ContactService contactService;

    @GetMapping("/contacts")
    public String getContacts(Model model) {
        model.addAttribute("contacts", contactService.getAllContacts());
        return "/contacts";
    }
    @GetMapping("/create_contact")
    public String createContactForm(Model model) {
        model.addAttribute("contactForm", new Contact());
        return "/create_contact";
    }

    @PostMapping("/create_contact")
    public String createContact(@ModelAttribute("contactForm") @Valid Contact contact, BindingResult bindingResult){
        if(bindingResult.hasErrors())
            return "/create_contact";
        contactService.addContact(contact);
        return "redirect:/contacts";
    }

    @GetMapping("/edit_contact/{id}")
    public String showEditForm(@PathVariable("id") Long id, Model model) {
        Contact contact = contactService.findById(id);
        model.addAttribute("contact", contact);
        return "edit_contact";
    }
    @PostMapping("/edit_contact/{id}")
    public String editContact(@PathVariable("id") long id, @Valid Contact contact, BindingResult bindingResult, Model model) {
        if (bindingResult.hasErrors()) {
            contact.setId(id);
            return "edit_contact";
        }
        contact.setId(id);
        contactService.updateContact(contact);
        return "redirect:/contacts";
    }
    @GetMapping("/delete_contact/{id}")
    public String deleteContact(@PathVariable("id") long id) {
        Contact contact = null;
        try {
            contact = contactService.findById(id);
        } catch (Exception e) {
            e.printStackTrace();
        }
        contactService.deleteContact(contact);
        return "redirect:/contacts";
    }
}
