import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';
import { ProductFilterComponent } from './components/products/product-filter/product-filter.component';
import { ProductVariationsComponent } from './components/products/product-variations/product-variations.component';
import { ProductVariationComponent } from './components/products/product-variation/product-variation.component';
import { CartItemsComponent } from './components/cart/cart-items/cart-items.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { shopReducer } from "./store/reducers/shop.reducer";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CartComponent,
    HeaderComponent,
    FooterComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductFilterComponent,
    ProductVariationsComponent,
    ProductVariationComponent,
    CartItemsComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      shopping: shopReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
