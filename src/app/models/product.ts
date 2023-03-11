import { Category } from "./category";
import { OrderHasProduct } from "./orderhasproduct";

export class Product {
    id:number;
    name:String;
    description:String;
    price:number;
    stock:number;
    imagePath:String;
    rate:number;
    categories:Category[];
    orderHasProducts:OrderHasProduct[];
}
