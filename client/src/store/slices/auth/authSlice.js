import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';

// user sign-up
export const registerUser = createAsyncThunk('auth/register', async (user, thunkAPI) => {
    try{
        return await authService.register(user, thunkAPI.dispatch);
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
    isErrorAuth: false,
    isSuccessAuth: false,
    isLoadingAuth: false,
    messageAuth: ''
}

// create slice
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        resetUserState(state, action){
            state.isErrorAuth = false;
            state.isSuccessAuth = false;
            state.isLoadingAuth = false;
            state.messageAuth = '';
        }
    },
    extraReducers: (builder) => {
        builder
            // register new user
            .addCase(registerUser.pending, state => {
                state.isLoadingAuth = true;
                state.isErrorAuth = false;
                state.isSuccessAuth = false;
                state.messageAuth = '';
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoadingAuth = false;
                state.isSuccessAuth = true;
                state.user = action.payload;
                state.messageAuth = 'Welcome, ' + action.payload.name;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoadingAuth = false;
                state.isErrorAuth = true;
                state.messageAuth = action.payload;
                state.user = null;
            })

            // login user
            .addCase(loginUser.pending, state => {
                state.isLoadingAuth = true;
                state.isErrorAuth = false;
                state.isSuccessAuth = false;
                state.messageAuth = '';
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoadingAuth = false;
                state.isSuccessAuth = true;
                state.user = action.payload;
                state.messageAuth = 'Welcome back, ' + action.payload.name;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoadingAuth = false;
                state.isErrorAuth = true;
                state.messageAuth = action.payload;
                state.user = null;
            })

            // logout user
            .addCase(logoutUser.fulfilled, state => {
                state.user = null;
                state.isSuccessAuth = true;
                state.messageAuth = 'User Signed-Out';
            });
    }
});

export const { resetUserState } = authSlice.actions;
export const authReducer = authSlice.reducer;