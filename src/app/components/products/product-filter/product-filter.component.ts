import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/models/app-state.model';
import { FilterProducts, SetCurrentCategory } from '../../../store/actions/shop.actions';
import { ProductService } from 'src/app/services/shop.service';
import { Category } from 'src/app/store/models/category.model';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  categories: Array<Category> = [];
  currentCategory: string;

  constructor(private productsService: ProductService, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(data => {
      this.categories = data.shopping['categories'];
      this.currentCategory = data.shopping['currentCategory'];
    }).subscribe();
  }

  selectCategory(category: string): void {
    this.currentCategory = category;
    this.store.dispatch(new FilterProducts(category));
    this.store.dispatch(new SetCurrentCategory(category));
  }

}
