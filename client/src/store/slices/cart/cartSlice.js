import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        isCartOpen: false
    },
    reducers: {
        addItemToCart(state, action){
            const existingCartItem = state.cartItems.findIndex(cartItem => {
                return cartItem._id === action.payload._id;
            });

            if(existingCartItem !== -1) {
                state.cartItems[existingCartItem].quantity++;
            } else {
                state.cartItems.push({...action.payload, quantity: 1});
            }
        },
        removeCartItem(state, action){
            const existingCartItem = state.cartItems.findIndex(cartItem => {
                return cartItem._id === action.payload._id;
            });

            if(existingCartItem !== -1) {

                if(state.cartItems[existingCartItem].quantity === 1){

                    state.cartItems = state.cartItems.filter(cartItem => {
                        return cartItem._id !== action.payload._id;
                    });

                } else {
                    state.cartItems[existingCartItem].quantity--;
                }
            }
        },
        clearCartItem(state, action){
            state.cartItems = state.cartItems.filter(cartItem => {
                return cartItem._id !== action.payload._id;
            });
        },
        toggleCart(state, action){
            state.isCartOpen = action.payload;
        }
    }
});

export const {addItemToCart, removeCartItem, clearCartItem, toggleCart} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;