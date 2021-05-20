import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { CartProduct } from "../models/cart-product.model";
import { Category } from "../models/category.model";
import { Product } from "../models/product.model";

export enum ProductActionTypes {
    GET_PRODUCTS = '[Product] Load products',
    GET_FILTERED_PRODUCTS = '[Product] Filter',
    GET_CATEGORIES = '[Product] Load categories',
    SET_CURRENT_CATEGORY= '[Category] set current category',
    ADD_TO_CART = '[Product] Add to cart',
    UPDATE_CART_ITEM = '[Product] Update cart item',
    REMOVE_CART_ITEM = '[Product] remove cart item',
    CART_TOTAL_COUNT = '[Cart] Total count',
    CART_TOTAL_SUM = '[Cart] Total sum',
    CART_CHECKOUT = '[Cart] Checkout',
}

export class LoadProducts implements Action {
    readonly type = ProductActionTypes.GET_PRODUCTS;
    
    constructor(public payload: Product[]) {}
}

export class LoadCategories implements Action {
    readonly type = ProductActionTypes.GET_CATEGORIES;

    constructor(public payload: Category[]) {}
}

export class FilterProducts implements Action {
    readonly type = ProductActionTypes.GET_FILTERED_PRODUCTS;

    constructor(public payload: string) {}
}

export class SetCurrentCategory implements Action {
    readonly type = ProductActionTypes.SET_CURRENT_CATEGORY;

    constructor(public payload: string) {}
}

export class AddToCart implements Action {
    readonly type = ProductActionTypes.ADD_TO_CART;
    
    constructor(public payload: CartProduct) {}
}

export class UpdateCartItem implements Action {
    readonly type = ProductActionTypes.UPDATE_CART_ITEM;
    
    constructor(public payload: [id: number, count: number]) {}
}

export class RemoveCartItem implements Action {
    readonly type = ProductActionTypes.REMOVE_CART_ITEM;
    
    constructor(public payload: CartProduct) {}
}

export class CartTotalCount implements Action {
    readonly type = ProductActionTypes.CART_TOTAL_COUNT;
}

export class CartTotalSum implements Action {
    readonly type = ProductActionTypes.CART_TOTAL_SUM;
}

export class CartCheckout implements Action {
    readonly type = ProductActionTypes.CART_CHECKOUT;
}

export type ProductActions = LoadProducts | LoadCategories | FilterProducts | SetCurrentCategory | AddToCart | UpdateCartItem | RemoveCartItem | CartTotalCount | CartTotalSum | CartCheckout;