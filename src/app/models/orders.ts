import { Address } from "./address";
import { Customer } from "./customer";
import { OrderHasProduct } from "./orderhasproduct";

export class Orders {
    id:number;
    customerOrderDTO:Customer;
    addressDTO:Address;
    totalPrice:number;
    isSubmitted:boolean;
    paymentType:String;
    submitDate:Date;
    orderHasProductsDTO:OrderHasProduct[];
}
