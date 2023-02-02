import { Route, Routes } from 'react-router-dom';

import Admin from './routes/admin/Admin';
import Home from './routes/home/Home';
import Navigation from './routes/navigation/Navigation';
import Auth from './routes/auth/Auth';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>

        <Route index element={<Home/>} />
        <Route path='admin' element={<Admin/>} />
        <Route path='auth' element={<Auth/>} />

      </Route>
    </Routes>
  );
}

export default App;
