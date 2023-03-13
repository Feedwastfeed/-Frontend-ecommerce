import {Product} from "./product";

export class CartItem {
  id: number;
  total_products: number;
  products: Product[];
}