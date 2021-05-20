import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/models/app-state.model';
import { ProductService } from 'src/app/services/shop.service';
import { Product } from 'src/app/store/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Array<Product> = [];

  constructor(private productsService: ProductService, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(data => {
      this.products = data.shopping['products'];
    }).subscribe();
  }

}
