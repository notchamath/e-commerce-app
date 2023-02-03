import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/auth/authSlice';

export const store = configureStore({
    
    reducer: {
        auth: authReducer
    }
});

export {
    registerUser,
    loginUser,
    logoutUser,
    resetUserState
} from './slices/auth/authSlice';