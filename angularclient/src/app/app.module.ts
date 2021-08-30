import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import { CreateContactComponent } from './create-contact/create-contact.component';
import { FormsModule} from "@angular/forms";
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import {ContactsCardsComponent} from "./contacts-cards/contacts-cards.component";

@NgModule({
  declarations: [
    AppComponent,
    ContactsListComponent,
    CreateContactComponent,
    EditContactComponent,
    ContactDetailsComponent,
    ContactsCardsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
