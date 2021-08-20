import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {ContactsListComponent} from "./contacts-list/contacts-list.component";
import {CreateContactComponent} from "./create-contact/create-contact.component";
import {EditContactComponent} from "./edit-contact/edit-contact.component";
import {ContactDetailsComponent} from "./contact-details/contact-details.component";

const routes: Routes = [
  {path:"contacts", component: ContactsListComponent},
  {path:"create-contact", component: CreateContactComponent},
  {path:"edit-contact/:id", component: EditContactComponent},
  {path:"contact-details/:id", component: ContactDetailsComponent},
  {path:"", redirectTo: "contacts", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
