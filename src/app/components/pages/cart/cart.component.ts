import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/models/app-state.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartTotalCount: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(data => {
      this.cartTotalCount = data.shopping['cartTotalCount'];
    }).subscribe();
  }

}
