import { Customer } from "./customer";
import { Orders } from "./orders";

export class Address {
    id:number;
    customer:Customer;
    area:String;
    buildingNum:number;
    floorNum:number;
    street:String;
    orderses:Orders[];
}
