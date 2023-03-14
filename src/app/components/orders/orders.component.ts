import { Component, OnInit } from '@angular/core';
import { Orders } from 'src/app/models/orders';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class OrdersComponent implements OnInit {
orders:Orders[]=[];
expanded: {[key: string]: boolean} = {};
constructor(private orderservice:OrderService){}
ngOnInit(): void {
    this.orderservice.getAllOrders().subscribe(
      response =>{
        this.orders=response.data;
      });
}
getAddress(index : number):String{
  let fullAddress :string=this.orders[index].addressDTO.buildingNum.toString()+" "+this.orders[index].addressDTO.street+" "+this.orders[index].addressDTO.area; 
  return fullAddress;
}
}
