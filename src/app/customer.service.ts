import { Injectable } from '@angular/core';
import {Customers} from './customers';
import {mockCustomers} from './mock-customers';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getAllCustomerdetail(): Observable<Customers[]> {
    return this.http.get<Customers[]>("http://localhost:8080/api/customers");
  }
  
  getCustomer(id: number): Observable<Customers>{
  return this.http.get<Customers>("http://localhost:8080/api/customers/"+id);
  }

  getEditCustomer(){}
}
