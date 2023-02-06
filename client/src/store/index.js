import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/auth/authSlice';
import { productsReducer } from './slices/products/productsSlice';
import { cartReducer } from './slices/cart/cartSlice';

export const store = configureStore({
    
    reducer: {
        auth: authReducer,
        products: productsReducer,
        cart: cartReducer
    }
});

export {
    registerUser,
    loginUser,
    logoutUser,
    resetUserState
} from './slices/auth/authSlice';

export {
    getProducts,
    createProduct,
    removeProduct,
    updateProduct,
    resetProductsState
} from './slices/products/productsSlice';

export {
    addItemToCart,
    removeCartItem,
    clearCartItem
} from './slices/cart/cartSlice';