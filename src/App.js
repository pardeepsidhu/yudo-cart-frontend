
import './App.css';
import Profile from './components/Profile';
import About from './components/About';
import Register from './components/Register';
import Error from './components/Error';
import Login from './components/Login';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Edit from './components/Edit';
import AddProduct from './adminComponents/AddProduct';
import Phone from './components/Phone'
import Orders from './components/Orders'
import ProductList from './adminComponents/ProductList';
import AdminNavbar from './adminComponents/AdminNavbar'
import HomeContiner from './redux/containers/HomeContiner';
import NavConainer from './redux/containers/NavConainer';
import Cart from './components/Cart'
import Purchase from './components/Purchase'

function App() {


  return (
    <div className="">

<div className='emptyBox' id='emptyBox'>
  <div className='emptyIn'></div>
  <div className="emptyIn"></div>
</div>
<AdminNavbar />

    <Router>
    <NavConainer  />
      <Routes>
        <Route index element={<HomeContiner />} />
        <Route index path={"purchase/:id"} element={ <Purchase />} />
        <Route path="/product/:id" element={<Phone/>} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path="*" element={<Error />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/signup" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/edit" element={<Edit/>}/>
        <Route path="/orders" element={<Orders/>} />
        <Route path='addproduct' element={<AddProduct />} />
        <Route path='productlist' element={<ProductList />} />
      </Routes>
    </Router>

    </div>
  );
}

export default App;
