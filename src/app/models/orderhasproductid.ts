export class OrderHasProductId{
    orderId:number;
    productId:number;

    constructor(orderId: number, productId:number){
        this.orderId = orderId;
        this.productId = productId;
    }
}