import {Component, NgModule, OnInit} from '@angular/core';
import {Contact} from "../contact";
import {ContactService} from "../contact.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {

  contactForm = new FormGroup({
    fullName: new FormControl('', Validators.compose([Validators.required, Validators.max(31), Validators.pattern('^\\D*$')])),
    firstName: new FormControl('', Validators.compose([Validators.max(15), Validators.pattern('^\\D*$')])),
    lastName: new FormControl('', Validators.compose([Validators.max(15), Validators.pattern('^\\D*$')])),
    phoneNumber: new FormControl('', Validators.pattern('^\\d*$')),
    cellPhoneNumber: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^\\d*$')])),
    address: new FormControl('', Validators.required)
  })


  get fullName(){return this.contactForm.get('fullName')}
  get firstName(){return this.contactForm.get('firstName')}
  get lastName(){return this.contactForm.get('lastName')}
  get phoneNumber(){return this.contactForm.get('phoneNumber')}
  get cellPhoneNumber(){return this.contactForm.get('cellPhoneNumber')}
  get address(){return this.contactForm.get('address')}

  contact: Contact = new Contact();
  constructor(private contactService:ContactService,
              private router:Router) { }

  ngOnInit(): void {
  }

  saveContact(){
    this.contactService.createContact(this.contact).subscribe(data => {
      console.log(data);
      this.goToContactList();
    },
      error => console.log(error));
  }

  goToContactList(){
    this.router.navigate(["/contacts"]);
  }
  onSubmit(){
    if(this.contactForm.valid) {
      this.saveContact();
    }
  }

}
