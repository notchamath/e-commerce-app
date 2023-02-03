import axios from 'axios';

const API_URL = '/api/user/';

// send post req to user register API endpoint to sign-up user
const register = async (userData) => {
    const response = await axios.post(API_URL, userData);

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
}

// send post req to user login API endpoint to sign-in user
const login = async (userData) => {
    const response = await axios.post(API_URL + 'login/', userData);

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
}

// logout user
const logout = () => {
   localStorage.removeItem('user');
}

const handleError = error => {
    return (
        error.response &&
        error.response.data &&
        error.response.data.message
    ) || error.message || error.toString();
}

const authService = { register, login, logout, handleError }
export default authService;