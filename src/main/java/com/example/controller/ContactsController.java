package com.example.controller;

import com.example.model.entity.Contact;
import com.example.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;

@Controller
public class ContactsController {
    private static final int CONTACTS_ON_PAGE = 1;
    @Autowired
    ContactService contactService;

/*    @GetMapping("/contacts")
    public String getContacts(Model model) {
        model.addAttribute("contacts", contactService.getAllContacts());
        return "/contacts";
    }*/
    @GetMapping("/contacts-page")
    public String getContactsPage(Model model, @RequestParam(value = "page") Optional<Integer> page) {
        Page<Contact> contactPage = contactService.getAllContactsPage(PageRequest.of(page.orElse(0), CONTACTS_ON_PAGE));
        int pageNumbers = contactPage.getTotalPages();
        if(pageNumbers > 0){
            model.addAttribute("contacts", contactService.getAllContactsPage(PageRequest.of(page.orElse(0),CONTACTS_ON_PAGE)));
            model.addAttribute("pageNumbers", pageNumbers);
        }
        else
            model.addAttribute("contacts", contactService.getAllContacts());
        return "/contacts-page";
    }
    @PostMapping("/contacts")
    public String findContactsAllFieldsx(Model model, @RequestParam(value = "search") String query) {
        if(query.isEmpty())
            model.addAttribute("contacts", contactService.getAllContacts());
        else model.addAttribute("contacts", contactService.findInAllFields(query));
        return "/contacts";
    }
    @GetMapping("/create_contact")
    public String createContactForm(Model model) {
        model.addAttribute("contactForm", new Contact());
        return "/create_contact";
    }

/*    @PostMapping("/create_contact")
    public String createContact(@ModelAttribute("contactForm") @Valid Contact contact, BindingResult bindingResult){
        if(bindingResult.hasErrors())
            return "/create_contact";
        contactService.addContact(contact);
        return "redirect:/contacts";
    }*/

    @GetMapping("/edit_contact/{id}")
    public String showEditForm(@PathVariable("id") Long id, Model model) {
        Contact contact = contactService.findById(id);
        model.addAttribute("contact", contact);
        return "edit_contact";
    }
/*    @PostMapping("/edit_contact/{id}")
    public String editContact(@PathVariable("id") long id, @Valid Contact contact, BindingResult bindingResult, Model model) {
        if (bindingResult.hasErrors()) {
            contact.setId(id);
            return "edit_contact";
        }
        contact.setId(id);
        contactService.updateContact(contact);
        return "redirect:/contacts";
    }*/
/*    @GetMapping("/delete_contact/{id}")
    public String deleteContact(@PathVariable("id") long id) {
        Contact contact = null;
        try {
            contact = contactService.findById(id);
        } catch (Exception e) {
            e.printStackTrace();
        }
        contactService.deleteContact(contact);
        return "redirect:/contacts";
    }*/
}
