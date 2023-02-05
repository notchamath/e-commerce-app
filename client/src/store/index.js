import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/auth/authSlice';
import { productsReducer } from './slices/products/productsSlice';

export const store = configureStore({
    
    reducer: {
        auth: authReducer,
        products: productsReducer
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