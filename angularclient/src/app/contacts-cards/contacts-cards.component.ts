import { Component, OnInit } from '@angular/core';
import {Contact} from "../contact";
import {ContactService} from "../contact.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contacts-cards',
  templateUrl: './contacts-cards.component.html',
  styleUrls: ['./contacts-cards.component.css']
})
export class ContactsCardsComponent implements OnInit {

  contacts: Contact[] | undefined;

  constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit(): void {
    this.getContacts();
  }
  private getContacts() {
    this.contactService.getContactsList().subscribe(data => {
      this.contacts = data;
    })
  }

  editContact(id: number | undefined) {
    this.router.navigate(["edit-contact", id]);
  }

  deleteContact(id: number | undefined) {
    this.contactService.deleteContact(id).subscribe(data => {
      console.log(data);
      this.getContacts();
    })
  }

  contactDetails(id: number | undefined){
    this.contactService.getContactById(id).subscribe(data=>{
      console.log(data);
      this.router.navigate(["contact-details", id]);
    })
  }
}
