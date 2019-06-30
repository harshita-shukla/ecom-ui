import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import {mockCustomers} from '../mock-customers';
import { Customers } from '../customers';
@Component({
  selector: 'app-form-editor',
  templateUrl: './form-editor.component.html',
  styleUrls: ['./form-editor.component.css']
})
export class FormEditorComponent implements OnInit {
  // create a form

  customerForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: [''],
    gender: [''],
    email: [''],
     address: [''],
      city: [''],
      state: [''],
      zip: ['']
    
  });
 /*  customerForm = new FormGroup({firstname: new FormControl(''),
  lastname: new FormControl(''),gender: new FormControl(''), email: new FormControl(''),
  address: new FormControl(''),  city: new FormControl(''), state: new FormControl(''),
  zip: new FormControl('')}); */
 // on Submitting the form
 onSubmit() {
    
    console.warn(this.customerForm.value);

  }
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

 
}
