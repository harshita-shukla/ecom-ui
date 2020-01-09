import { Order } from './order';
export class Customers {
    id: number;
    firstname: string;
    lastname: string;
    gender: string;
    email: string;
     address: string;
      city: string;
      state: string;
      zip: string;
      dateOfBirth: string;
 
      orders: Order[];
}