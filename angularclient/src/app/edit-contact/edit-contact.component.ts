import {Component, OnInit} from '@angular/core';
import {Contact} from "../contact";
import {ContactService} from "../contact.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
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
    if(this.contactForm.valid) {
      this.contactService.editContact(this.id, this.contact).subscribe(data => {
        if (this.contactForm.valid)
          this.goToContactList();
      }, error => {
        console.log(error)
      })
    }
  }

  goToContactList() {
    this.router.navigate(["/contacts"]);
  }

}
