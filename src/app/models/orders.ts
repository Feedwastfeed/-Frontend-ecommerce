import { Address } from "./address";
import { Customer } from "./customer";
import { OrderHasProduct } from "./orderhasproduct";

export class Orders {
    id: number;
    customerOrderDTO: Customer;
    addressDTO: Address;
    totalPrice: number;
    isSubmitted: boolean;
    paymentType: String;
    submitDate: Date;
    orderHasProductsDTO: OrderHasProduct[] = [];

    constructor();
    constructor(customer: Customer, totalPrice: number, isSubmitted: boolean, submitDate: Date);

    constructor(...args: any[]) {
        if (args.length) {
            this.customerOrderDTO = args[0];
            this.totalPrice = args[1];
            this.isSubmitted = args[2];
            this.submitDate = args[3];
        }
    }
}
