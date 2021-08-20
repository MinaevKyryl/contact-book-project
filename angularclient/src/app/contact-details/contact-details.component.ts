import { Component, OnInit } from '@angular/core';
import {Contact} from "../contact";
import {ActivatedRoute} from "@angular/router";
import {ContactService} from "../contact.service";

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  id: number | undefined
  // @ts-ignore
  contact: Contact
  constructor(private route:ActivatedRoute, private contactService:ContactService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.contact = new Contact();
    this.contactService.getContactById(this.id).subscribe(data=>{
      this.contact = data;
      console.log(this.contact)
    })
  }

}
