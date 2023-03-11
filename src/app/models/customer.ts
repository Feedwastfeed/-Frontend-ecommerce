import { Address } from "./address";
import { Orders } from "./orders";
import { User } from "./user";

export class Customer extends User {
    
    isMale: boolean;
    dob: Date;
    walletLimit: number;
    addresses: Address[];
    orderses: Orders[];
   
}
