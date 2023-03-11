import { Address } from "./address";
import { Customer } from "./customer";
import { OrderHasProduct } from "./orderhasproduct";

export class Orders {
    id:number;
    customer:Customer;
    address:Address;
    totalPrice:number;
    isSubmitted:boolean;
    paymentType:String;
    submitDate:Date;
    orderHasProducts:OrderHasProduct[];
}
