import { OrderHasProductId } from "./orderhasproductid";
import { Orders } from "./orders";
import { Product } from "./product";

export class OrderHasProduct {
    id:OrderHasProductId;
    product:Product;
    orders:Orders;
    amount:number;
}
