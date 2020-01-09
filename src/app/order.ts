import { Product } from './product';
export class Order {
    id: number;
    customerid: number;
    quantity: number;

  products: Product[];
}