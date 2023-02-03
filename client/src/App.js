import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Admin from './routes/admin/Admin';
import Home from './routes/home/Home';
import Navigation from './routes/navigation/Navigation';
import Auth from './routes/auth/Auth';

function App() {

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
