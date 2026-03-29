import './App.css'

import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Checkout from './pages/Checkout.jsx';
import Auth from './pages/Auth.jsx';

import { Route, Routes } from 'react-router-dom';

function App() {
 
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/auth' element={<Auth />}/>
        <Route path='/checkout' element={<Checkout />}/>
      </Routes>
    </div>
  )
}

export default App;
