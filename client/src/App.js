import { Route, Routes } from 'react-router-dom';

import Admin from './routes/Admin/Admin';
import Home from './routes/Home/Home';
import Navigation from './routes/Navigation/Navigation';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>

        <Route index element={<Home/>} />
        <Route path='admin' element={<Admin/>} />

      </Route>
    </Routes>
  );
}

export default App;
