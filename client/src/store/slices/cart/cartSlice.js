import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
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
        RemoveCartItem(state, action){
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
        ClearCartItem(state, action){
            state.cartItems = state.cartItems.filter(cartItem => {
                return cartItem._id !== action.payload._id;
            });
        }
    }
});

export const {addItemToCart, RemoveCartItem, ClearCartItem} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;