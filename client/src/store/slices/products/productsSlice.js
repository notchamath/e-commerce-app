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
        const token = productsService.getUserToken(thunkAPI);

        return await productsService.addProduct(token, productData);
    }catch(error){
        return thunkAPI.rejectWithValue(productsService.handleError(error));
    }
});

// delete product (Admin Only)
export const removeProduct = createAsyncThunk('products/removeProduct', async (productId, thunkAPI) => {
    try{
        // get token from user
        const token = productsService.getUserToken(thunkAPI);

        return await productsService.removeProduct(token, productId);
    }catch(error){
        return thunkAPI.rejectWithValue(productsService.handleError(error));
    }
});

// update product (Admin Only)
export const updateProduct = createAsyncThunk('products/updateProduct', async (productData, thunkAPI) => {
    try{
        // get token from user
        const token = productsService.getUserToken(thunkAPI);

        return await productsService.updateProduct(token, productData);
    }catch(error){
        return thunkAPI.rejectWithValue(productsService.handleError(error));
    }
});


const initialState = {
    products: [],
    categories: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// get list of categories from products array, use Set to remove duplicates
const getCategories = (products) => {
    if (products.length < 1) return [];

    let categories = ['all'];

    products.forEach(item => item.category.forEach(category => categories.push(category)));

    return [...new Set(categories)];
};

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
                state.categories = getCategories(action.payload);
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
            })

            // removeProduct
            .addCase(removeProduct.pending, state => {
                state.isLoading = true;
                state.isError = false;
                state.isSuccess = false;
                state.message = '';
            })
            .addCase(removeProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.products = state.products.filter(product => {
                    return product._id !== action.payload._id;
                });
                state.message = 'Product Removed: ' + action.payload.name;
            })
            .addCase(removeProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })

            // updateProduct
            .addCase(updateProduct.pending, state => {
                state.isLoading = true;
                state.isError = false;
                state.isSuccess = false;
                state.message = '';
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                
                const index = state.products.findIndex(product => {
                    return product._id === action.payload._id;
                });

                state.products[index] = action.payload;
                state.message = 'Product Updated: ' + action.payload.name;
            })
            .addCase(updateProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            });
    }
});

export const {resetProductsState} = productsSlice.actions;
export const productsReducer = productsSlice.reducer;