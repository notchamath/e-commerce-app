import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';

// user sign-up
export const registerUser = createAsyncThunk('auth/register', async (user, thunkAPI) => {
    try{
        return await authService.register(user);
    }catch(error){
        return thunkAPI.rejectWithValue(authService.handleError(error));
    }
});

// user sign-in
export const loginUser = createAsyncThunk('auth/login', async (user, thunkAPI) => {
    try{
        return await authService.login(user);
    }catch(error){
        return thunkAPI.rejectWithValue(authService.handleError(error));
    }
});

// user logout
export const logoutUser = createAsyncThunk('auth/logout', async () => {
    authService.logout();
});


// get stored user if any
const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// create slice
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        resetUserState(state, action){
            state.isError = false;
            state.isSuccess = false;
            state.isLoading = false;
            state.message = '';
        }
    },
    extraReducers: (builder) => {
        builder
            // register new user
            .addCase(registerUser.pending, state => {
                state.isLoading = true;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.user = null;
            })

            // login user
            .addCase(loginUser.pending, state => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.user = null;
            })

            // logout user
            .addCase(logoutUser.fulfilled, state => {
                state.user = null;
            });
    }
});

export const { resetUserState } = authSlice.actions;
export const authReducer = authSlice.reducer;