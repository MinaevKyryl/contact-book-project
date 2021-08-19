import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contact} from "./contact";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUrl = "http://localhost:8090/contacts";
  constructor(private httpClient: HttpClient) { }

  getContactsList(): Observable<Contact[]>{
    return this.httpClient.get<Contact[]>(`${this.baseUrl}`);
  }
}
