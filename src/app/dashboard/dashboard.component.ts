import { Component, OnInit } from '@angular/core';

import { Customers } from '../customers';
import {CustomerService} from '../customer.service';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  customers: Customers[];
  getCustomerdetail(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log("id", id);
    this.customerService.getAllCustomerdetail().subscribe(customer => {this.customers = customer; console.log("inside dashboard"+customer[0].firstname);})
    console.log('get details in dashboard');  }
// tslint:disable-next-line: variable-name
  constructor(private customerService: CustomerService, private route: ActivatedRoute) { }
  ngOnInit() {
    this.getCustomerdetail();
  }

}
