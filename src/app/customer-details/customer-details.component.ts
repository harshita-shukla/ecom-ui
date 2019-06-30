import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import {Customers} from '../customers';

import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer.service';


@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit, OnChanges {
 

 constructor(  private route: ActivatedRoute,
               private customerService: CustomerService) {
                 console.log("inside detail const");
   }
  customer: Customers;
  showOrder = false;
 
  ngOnInit() {
    console.log("inside detail ngOnInit");
    this.getCustomer();
  }

  ngOnChanges(){
    console.log("inside ngon change");
  }
  getCustomer(): void {
    console.log("in details");
    const cid = +this.route.snapshot.paramMap.get('id');
    
    console.log("const id", cid);

    this.customerService.getCustomer(cid).subscribe(customer => 
      {
        this.customer = customer; console.log(this.customer.id +"customer in subscribe")
      });

  //getCustomerOrder():void{
    //this.customerService.getCustomerdetail().subscribe(order => {this.customers = order});
  }
}
