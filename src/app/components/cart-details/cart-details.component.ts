import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from 'src/app/models/address';
import { Customer } from 'src/app/models/customer';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { OrderService } from 'src/app/services/order/order.service';
import { ProductService } from 'src/app/services/product/product.service';

export interface Gender {
  id: number;
  value: string;
}


@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  submitForm: FormGroup;
  addressForm: FormGroup;
  paymentForm: FormGroup;
  newAddress: boolean = true;
  addressCustomer: Array<Address> = [];
  fieldsetdisabled = false;

  constructor(private formbuilder: FormBuilder,
    private orderService: OrderService,
    private productService: ProductService,
    public cartService: CartService,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {


    this.getAllAddress();

    this.submitForm = this.formbuilder.group({
      address: ['', [Validators.required]],
      payment: ['', [Validators.required]]
    });

    this.addressForm = this.formbuilder.group({
      floor: ['', [Validators.required, Validators.min(1)]],
      build: ['', [Validators.required, Validators.min(1)]],
      street: ['', [Validators.required]],
      area: ['', [Validators.required]]
    });
    this.paymentForm = this.formbuilder.group({
      cardName: ['', [Validators.required]],
      cardCVC: ['', [Validators.required]],
      cardExpiry: ['', [Validators.required]],
      cardNumber: ['', [Validators.required]]
    });
  }

  viewAddress(address: Address): String {
    return address.buildingNum + " " + address.street + " , " + address.area + " ,Floor :" + address.floorNum;
  }

  confirmOrder() {
    this.productService.checkStock(this.cartService.orders.orderHasProductsDTO).subscribe(
      response => {
        let checkStock = response.data;
        if (checkStock.length == 0) {
          if (this.submitForm.value.payment == '0') {
            this.updateStockAndOrder("Cash");
          } else if (this.submitForm.value.payment == '2') {
            if (this.authService.getCustomerData().walletLimit >= this.cartService.orders.totalPrice) {
              this.cartService.updateWallit().subscribe(response => {
                if (response.data > 0) {
                  this.updateStockAndOrder("Wallit");
                  this.authService.getCustomerData().walletLimit -= this.cartService.orders.totalPrice;
                } else {
                 this.authService.openDialog("You don't have enough money in your wallet!");
                }
              });
            } else {
              this.authService.openDialog("You don't have enough money in your wallet!");
            }
          } else {
            // check payment ball here come soon
          }


        } else {
          alert('The current stock of the ' + this.cartService.findNameProductById(checkStock[0]) + ' is insufficient \nTry a smaller amount')
        }
      });
  }

  updateStockAndOrder(paymentType: String) {
    this.productService.updateStock(this.cartService.orders.orderHasProductsDTO).subscribe(response => {
      this.updateOrderService(paymentType);
      this.orderService.updateOrder(this.cartService.orders).subscribe(response => {
        alert('Order Submit SuccessFully');
        this.router.navigate(['/home']);
      });
    });
  }

  updateOrderService(paymentType: String) {
    this.cartService.orders.isSubmitted = true;
    this.cartService.orders.submitDate = new Date();
    this.cartService.orders.addressDTO = this.submitForm.value.address;
    this.cartService.orders.paymentType = paymentType;
  }

  submitAddress() {
    let address = new Address();
    address.area = this.addressForm.value.area;
    address.buildingNum = +this.addressForm.value.build;
    address.floorNum = +this.addressForm.value.floor;
    address.street = this.addressForm.value.street;
    address.customer = this.authService.getCustomerData();
    this.orderService.addAddress(address).subscribe(
      Response => {
        this.getAllAddress()
      }
    );
  }

  getAllAddress() {
    this.orderService.getAddressForCustomer(this.authService.getCurrentUserId()).subscribe(
      response => {
        this.addressCustomer = response.data;
      });
  }

  chooceCard(): boolean {
    return this.submitForm.value.payment != '1';
  }

  setNewAddress() {
    this.newAddress = false;
  }
  chooseAddress(): boolean {
    return this.newAddress;
  }

  valid() {
    if (this.submitForm.value.payment == '1') {
      return this.submitForm.invalid || this.paymentForm.invalid;
    } else {
      return this.submitForm.invalid;
    }


  }
}
