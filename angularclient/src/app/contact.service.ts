import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contact} from "./contact";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUrl = "http://localhost:8090/";
  constructor(private httpClient: HttpClient) { }

  getContactsList(): Observable<Contact[]>{
    return this.httpClient.get<Contact[]>(`${this.baseUrl}/contacts`);
  }
  createContact(contact: Contact):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}/create_contact`, contact)
  }

  getContactById(id: number | undefined): Observable<Contact>{
    return this.httpClient.get<Contact>(`${this.baseUrl}/contact/${id}`)
  }
  editContact(id:number|undefined, contact:Contact):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}edit_contact/${id}`, contact)
  }
  deleteContact(id:number|undefined):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}delete_contact/${id}`)
  }
}
