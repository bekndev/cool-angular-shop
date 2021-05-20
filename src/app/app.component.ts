import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/models/app-state.model';
import { ProductService } from './services/shop.service';
import { LoadProducts, LoadCategories } from 'src/app/store/actions/shop.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cool-angular-shop';

  constructor(private productsService: ProductService, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(products => {
      this.store.dispatch(new LoadProducts(products));
    });
    this.productsService.getCategories().subscribe(categories => {
      this.store.dispatch(new LoadCategories(categories));
    });
  }
}
