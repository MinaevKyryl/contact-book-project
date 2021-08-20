import {Component, OnInit} from '@angular/core';
import {Contact} from "../contact";
import {ContactService} from "../contact.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  id: number | undefined;
  contact: Contact = new Contact();

  constructor(private contactService: ContactService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.contactService.getContactById(this.id).subscribe(data => {
        this.contact = data;
      },
      error => console.log(error));
  }

  onSubmit() {
    this.contactService.editContact(this.id, this.contact).subscribe(data => {
      this.goToContactList();
    }, error => {
      console.log(error)
    })
  }

  goToContactList() {
    this.router.navigate(["/contacts"]);
  }

}
