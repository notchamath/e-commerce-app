import axios from "axios";

const API_URL = '/api/products/';

//  send GET req to products API endpoint to get all products
const getProducts = async () => {
    const response = await axios.get(API_URL);
    return response.data;
}

//  send POST req to products API endpoint to add a product
const addProduct = async (token, productData) => {
    const config = {
        headers: {Authorization: token}
    };

    const response = await axios.post(API_URL, productData, config);
    
    return response.data;
}

//  send DELETE req to products API endpoint to remove a product
const removeProduct = async(token, productId) => {
    const config = {
        headers: {Authorization: token},
        data: {id: productId}
    };

    const response = await axios.delete(API_URL, config);

    return response.data;
}


// handle any errors
const handleError = error => {
    return (
        error.response &&
        error.response.data &&
        error.response.data.message
    ) || error.message || error.toString();
}

// get user token
const getUserToken = thunkAPI => {
    const user = thunkAPI.getState().auth.user;
    let token = null;
    if(user) token = user.token;

    return token;
}


const productsService = {
    getProducts,
    addProduct,
    removeProduct,
    handleError,
    getUserToken
}

export default productsService; 