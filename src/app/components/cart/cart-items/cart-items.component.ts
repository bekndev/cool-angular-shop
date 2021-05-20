import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/models/app-state.model';
import { CartTotalSum, CartCheckout, CartTotalCount } from 'src/app/store/actions/shop.actions';
import { CartProduct } from 'src/app/store/models/cart-product.model';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  cartItems: Array<CartProduct>;
  cartTotalSum: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(data => {
      this.cartItems = data.shopping['cartItems'];
      this.cartTotalSum = data.shopping['cartTotalSum'];
    }).subscribe();
  }

  checkout() {
    this.store.dispatch(new CartCheckout());
    this.store.dispatch(new CartTotalCount());
    this.store.dispatch(new CartTotalSum());
  }

}
