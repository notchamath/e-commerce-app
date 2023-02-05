import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productsService from "./productsService";

// get all products
export const getProducts = createAsyncThunk('products/getProducts', async (_, thunkAPI) => {
    try{
        return await productsService.getProducts();
    }catch(error){
        return thunkAPI.rejectWithValue(productsService.handleError(error));
    }
});

// create product (Admin Only)
export const createProduct = createAsyncThunk('products/createProduct', async (productData, thunkAPI) => {
    try{
        // get token from user
        const user = thunkAPI.getState().auth.user;
        let token = null;
        if(user) token = user.token;

        return await productsService.addProduct(token, productData);
    }catch(error){
        return thunkAPI.rejectWithValue(productsService.handleError(error));
    }
});


const initialState = {
    products: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// create slice
const productsSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        resetProductsState: state => initialState
    },
    extraReducers: builder => {
        builder
            // getProducts
            .addCase(getProducts.pending, state => {
                state.isLoading = true;
                state.isError = false;
                state.isSuccess = false;
                state.message = '';
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.products = action.payload;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })

            // createProduct
            .addCase(createProduct.pending, state => {
                state.isLoading = true;
                state.isError = false;
                state.isSuccess = false;
                state.message = '';
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.products.push(action.payload);
                state.message = 'New Product Added: ' + action.payload.name;
            })
            .addCase(createProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            });
    }
});

export const {resetProductsState} = productsSlice.actions;
export const productsReducer = productsSlice.reducer;