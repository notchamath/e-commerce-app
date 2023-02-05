import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { getProducts, resetProductsState, logoutUser } from './store';
import 'react-toastify/dist/ReactToastify.css';

import Admin from './routes/admin/Admin';
import Home from './routes/home/Home';
import Navigation from './routes/navigation/Navigation';
import Auth from './routes/auth/Auth';

function App() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {isError, isSuccess, message} = useSelector(state => state.products);
  const {isErrorAuth, isSuccessAuth, messageAuth} = useSelector(state => state.auth);

  useEffect(() => {
    // get products
    dispatch(getProducts());

    // on dismount, reset products state
    return () => dispatch(resetProductsState());
  }, [])

  useEffect(() => {
    // eror and success messages for products
    if(isError) toast.error(message);
    if(isSuccess) toast.success(message);

    if(message && message === 'Request failed with status code 401'){
      dispatch(logoutUser());
      navigate('/auth');
    }

  }, [message])

  useEffect(() => {
    // eror and success messages for auth
    if(isErrorAuth) toast.error(messageAuth);
    if(isSuccessAuth) toast.success(messageAuth);
  }, [messageAuth])
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Navigation/>}>

          <Route index element={<Home/>} />
          <Route path='admin' element={<Admin/>} />
          <Route path='auth' element={<Auth/>} />

        </Route>
      </Routes>
      <ToastContainer/>
    </>
  );
}

export default App;
