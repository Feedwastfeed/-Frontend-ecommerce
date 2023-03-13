import { OrderHasProductId } from "./orderhasproductid";
import { Orders } from "./orders";
import { Product } from "./product";

export class OrderHasProduct {
    id: OrderHasProductId;
    product: Product;
    orders: Orders;
    amount: number;


    constructor();
    constructor(id: OrderHasProductId, amount: number);
    constructor(...args: any) {
        if (args.length > 0) {
            this.id = args[0];
            this.amount = args[1];
        }
    }
}
