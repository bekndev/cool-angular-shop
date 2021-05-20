import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartTotalCount, CartTotalSum, RemoveCartItem, UpdateCartItem } from 'src/app/store/actions/shop.actions';
import { AppState } from 'src/app/store/models/app-state.model';
import { CartProduct } from 'src/app/store/models/cart-product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() item:CartProduct;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  decrement() {
    let count = this.item.count;
    count--;
    count = count ? count : 1;
    this.store.dispatch(new UpdateCartItem([this.item.id, count]));
    this.store.dispatch(new CartTotalCount());
    this.store.dispatch(new CartTotalSum());
  }
  increment() {
    let count = this.item.count;
    count++;
    this.store.dispatch(new UpdateCartItem([this.item.id, count]));
    this.store.dispatch(new CartTotalCount());
    this.store.dispatch(new CartTotalSum());
  }
  removeItem() {
    this.store.dispatch(new RemoveCartItem(this.item));
    this.store.dispatch(new CartTotalCount());
    this.store.dispatch(new CartTotalSum());
  }

}
