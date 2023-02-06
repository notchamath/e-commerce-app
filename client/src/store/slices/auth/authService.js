import axios from 'axios';
import { logoutUser } from '../../index';

const API_URL = '/api/user/';

// send POST req to user register API endpoint to sign-up user
const register = async (userData, dispatch) => {
    const response = await axios.post(API_URL, userData);

    if(response.data) storeUser(response.data, dispatch);

    return response.data;
}

// send POST req to user login API endpoint to sign-in user
const login = async (userData, dispatch) => {
    const response = await axios.post(API_URL + 'login/', userData);

    if(response.data) storeUser(response.data, dispatch);

    return response.data;
}

// logout user
const logout = () => {
   localStorage.removeItem('user');
}

// handle any errors
const handleError = error => {
    return (
        error.response &&
        error.response.data &&
        error.response.data.message
    ) || error.message || error.toString();
}

// store user token
const storeUser = (user, dispatch) => {
    localStorage.setItem('user', JSON.stringify(user));

    // logout user when token expires
    setTimeout(() => {
        dispatch(logoutUser());
    }, 900000)
}

const authService = { register, login, logout, handleError }
export default authService;