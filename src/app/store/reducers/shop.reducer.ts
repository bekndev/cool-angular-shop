import { Action } from "@ngrx/store";
import { Product } from "../models/product.model";
import { ProductActions, ProductActionTypes } from "../actions/shop.actions";
import { Category } from "../models/category.model";
import { CartProduct } from "../models/cart-product.model";

export interface ShopState {
    products: Array<Product>,
    allProducts: Array<Product>,
    categories: Array<Category>,
    currentCategory: string,
    cartItems: Array<CartProduct>,
    cartTotalCount: number,
    cartTotalSum: number,
}

const initialState: ShopState = {
    products: [],
    allProducts: [],
    categories: [],
    currentCategory: 'all',
    cartItems: [],
    cartTotalCount: 0,
    cartTotalSum: 0,
}

export function shopReducer(state:ShopState = initialState, action: ProductActions) {
    switch(action.type) {
        case ProductActionTypes.GET_PRODUCTS:
            const products = action.payload;
            return {...state, products: products, allProducts: products};
        case ProductActionTypes.GET_CATEGORIES:
            const categories = action.payload;
            return {...state, categories};
        case ProductActionTypes.GET_FILTERED_PRODUCTS:
            const category = action.payload;
            return {...state, products: category == 'all' ? state.allProducts : state.allProducts.filter(product => product.category === category)};
        case ProductActionTypes.SET_CURRENT_CATEGORY:
            const currentCategory = action.payload;
            return {...state, currentCategory};
        case ProductActionTypes.ADD_TO_CART:
            const product = action.payload;
            return {...state, cartItems: [...state.cartItems, product]};
        case ProductActionTypes.UPDATE_CART_ITEM:
            const [id, count] = action.payload;
            return {...state, cartItems: state.cartItems.map(item => {
                if(item.id === id) {
                    return {...item, count};
                }
                return item;
            })};
        case ProductActionTypes.REMOVE_CART_ITEM:
            const removed_product = action.payload;
            return {...state, cartItems: state.cartItems.filter(item => item.id !== removed_product.id)};
        case ProductActionTypes.CART_TOTAL_COUNT:
            return {...state, cartTotalCount: state.cartItems.reduce((acc, cur) => acc+cur.count, 0)};
        case ProductActionTypes.CART_TOTAL_SUM:
            return {...state, cartTotalSum: Math.ceil((state.cartItems.reduce((acc, cur) => acc+cur.count*cur.price, 0))*100)/100};
        case ProductActionTypes.CART_CHECKOUT:
            return {...state, cartItems: []};
        default:
            return state;
    }
}