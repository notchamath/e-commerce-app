import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { getProducts, resetProductsState } from './store';
import 'react-toastify/dist/ReactToastify.css';

import Admin from './routes/admin/Admin';
import Home from './routes/home/Home';
import Navigation from './routes/navigation/Navigation';
import Auth from './routes/auth/Auth';

function App() {

  const dispatch = useDispatch();

  const {isError, message} = useSelector(state => state.products);

  useEffect(() => {
    // get products
    dispatch(getProducts());

    // on dismount, reset products state
    return () => dispatch(resetProductsState());
  }, [])

  useEffect(() => {
    // handle any erors
    if(isError) toast.error(message);

  }, [message])
  

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
