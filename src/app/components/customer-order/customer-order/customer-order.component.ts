import { Component, OnInit } from '@angular/core';
import { Orders } from 'src/app/models/orders';
import { OrderService } from 'src/app/services/order/order.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-customer-order',
  templateUrl: './customer-order.component.html',
  styleUrls: ['./customer-order.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CustomerOrderComponent implements OnInit {
  orders:Orders[]=[];
  expanded: {[key: string]: boolean} = {};
  constructor(private orderService:OrderService,private authService:AuthService,private router:Router,private route: ActivatedRoute){
    route.paramMap.subscribe((params: ParamMap) => {
    if (params.get('customerid')) {
      this.orderService.getCustomerOrder(+params.get('customerid'))
        .subscribe(response => {
          this.orders = response.data;
        })
    }
    });
}
ngOnInit(): void {
  // get Currentcustomer id by token
  this.orderService.getCustomerOrder(this.authService.getCurrentUser().id).subscribe(
    response=>{
      this.orders=response.data;
      console.log(response);
    }
  );
}

getAddress(index : number):String{
  let fullAddress :string=this.orders[index].addressDTO.buildingNum.toString()+" "+this.orders[index].addressDTO.street+" "+this.orders[index].addressDTO.area; 
  return fullAddress;
  }
}

