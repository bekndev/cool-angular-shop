import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/models/app-state.model';
import { AddToCart, CartTotalCount, CartTotalSum } from 'src/app/store/actions/shop.actions';
import { CartProduct } from 'src/app/store/models/cart-product.model';
import { Product } from 'src/app/store/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() product:any;

  alreadyAdded: boolean = false;
  cartItems: Array<CartProduct>;
  title: string;
  price: number;
  variations: {};
  currentVariation: {};

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(data => {
      this.cartItems = data.shopping['cartItems'];
    }).subscribe();
    this.cartItems.forEach(item => {
      if(item.id == this.product.id) {
        this.alreadyAdded = !this.alreadyAdded;
      }
    });
    this.title = this.product.title;
    this.price = this.product.price;
    if(this.product.variations) {
      if(this.product.variations.colors) {
        this.title = `${this.title} (color: ${this.product.variations.colors[0].color})`;
        this.price = this.product.variations.colors[0].price;
        this.currentVariation = this.product.variations.colors[0];
        this.variations = this.product.variations.colors;
      } else if(this.product.variations.sizes) {
        this.title = `${this.title} (size: ${this.product.variations.sizes[0].size})`;
        this.price = this.product.variations.sizes[0].price;
        this.currentVariation = this.product.variations.sizes[0];
        this.variations = this.product.variations.sizes;
      }
    }
  }

  changeVariation = (variation: {}) => {
    if(variation['color']) {
      this.title = `${this.product.title} (color: ${variation['color']})`;
    }
    else if(variation['size']) {
      this.title = `${this.product.title} (size: ${variation['size']})`;
    }
    this.price = variation['price'];
    this.currentVariation = variation;
  }

  addToCart = (product: Product): void => {
    this.alreadyAdded = !this.alreadyAdded;
    const addedProduct = {id: this.product.id, title: this.title, price: this.price, count: 1};
    this.store.dispatch(new AddToCart(addedProduct));
    this.store.dispatch(new CartTotalCount());
    this.store.dispatch(new CartTotalSum());
  }

}
