import { OrderHasProductId } from "./orderhasproductid";
import { Orders } from "./orders";
import { Product } from "./product";

export class OrderHasProduct {
    id:OrderHasProductId;
    product:Product;
    orders:Orders;
    amount:number;

    constructor(id: OrderHasProductId, amount:number){
        this.id = id;
        this.amount = amount;
    }
}
