import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { getProducts, resetProductsState, logoutUser } from './store';
import 'react-toastify/dist/ReactToastify.css';

import Admin from './routes/admin/Admin';
import Home from './routes/home/Home';
import Navigation from './routes/navigation/Navigation';
import Auth from './routes/auth/Auth';
import RequireAuth from './components/require-auth/RequireAuth';
import ProductPage from './routes/product-page/ProductPage';
import Checkout from './routes/checkout/Checkout';
import CategoryPage from './routes/category-page/CategoryPage';
import PageNotFound from './routes/not-found/PageNotFound';
import ScrollToTop from './components/scroll-top/ScrollToTop';

function App() {

  const dispatch = useDispatch();

  const {isError, isSuccess, message} = useSelector(state => state.products);
  const {user, isErrorAuth, isSuccessAuth, messageAuth} = useSelector(state => state.auth);

  useEffect(() => {
    // get products
    dispatch(getProducts());

    // on dismount, reset products state
    return () => dispatch(resetProductsState());
  }, [])

  useEffect(() => {
    // eror and success messages for products
    if(isError) toast.error(message, {className: 'toast-message'});
    if(isSuccess) toast.success(message, {className: 'toast-message'});
  }, [message])

  useEffect(() => {
    // eror and success messages for auth
    if(isErrorAuth) toast.error(messageAuth, {className: 'toast-message'});
    if(isSuccessAuth) toast.success(messageAuth, {className: 'toast-message'});
  }, [messageAuth])
  
  
  useEffect(() => {
    // logout user when token expires
    const logoutTimer = setTimeout(() => {
      if(user) dispatch(logoutUser());
    }, 900000)

    return () => clearTimeout(logoutTimer)
  }, [user])
  

  return (
    <>
      <ScrollToTop/>
      <Routes>

        <Route path='/' element={<Navigation/>}>

          <Route index element={<Home/>} />
          <Route path='auth' element={<Auth/>} />

          {/* admin only route */}
          <Route element={<RequireAuth allowedRoles={['admin']}/>} >
            <Route path='admin' element={<Admin/>} />
          </Route>

          {/* signed-in users checkout */}
          <Route element={<RequireAuth allowedRoles={['admin', 'guest']}/>} >
            <Route path='checkout' element={<Checkout/>} />
          </Route>

          {/* category page route */}
          <Route path='categories/:category' element={<CategoryPage/>} />
          {/* product page route */}
          <Route path='products/:id' element={<ProductPage/>} />

          {/* catch all 404 */}
          <Route path='*' element={<PageNotFound/>} />

        </Route>
      </Routes>
      <ToastContainer/>
    </>
  );
}

export default App;
