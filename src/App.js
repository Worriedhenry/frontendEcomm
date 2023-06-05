import './App.css';
import React from 'react'

import Home from "./components/Home/home"
import { Box} from "@mui/material";
import SellerLeft from './components/SellerDashboard.js/SellerLeft';
import SellerInfo from './components/SellerDashboard.js/SellerInfo';
import NavBar from './components/Header';
import Profile from './components/Profile/ProFile';
import Headers from './components/Header'
import Write_review from './components/Product_details/review/write_review/write_review';
import Footer from './components/Footer';
import Orders from './components/Orders/Orders';
import Cart from './components/Cart/Cart';
import Details from './components/Product_details/Detail';
import SellerCatlog from './components/SellerDashboard.js/SellerCatlog';
import SellerAddProduct from './components/SellerDashboard.js/SellerAddProduct';
import SearchProduct from './components/ProductSearch/SearchProduct';
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
function App() {
  return <BrowserRouter>
  <Routes>
  <Route path='/' element={<><NavBar /><Home /><Footer/></>} />
  <Route path='/account' element={<>< NavBar/><Profile page={0} /><Footer/></>} />
  <Route path='/account/orders' element={<>< NavBar/><Orders /><Footer/></>} />
  <Route path='/viewcart' element={<>< NavBar/><Cart /><Footer/></>} />
  <Route path='/viewproduct' element={<>< NavBar/><Details /><Footer/></>} />
  <Route path='/search' element={<>< NavBar/><SearchProduct/><Footer/></>} />
  <Route path='/writereview' element={<><NavBar/> <Write_review/> <Footer/></>} />
  <Route path='/admin/info/:SellerId' element={<>< NavBar/><div className='Profile-Container'><SellerLeft page={0} /><SellerInfo /></div><Footer/></>} />
  <Route path='/admin/catlog/:SellerId' element={<>< NavBar/><div className='Profile-Container'><SellerLeft page={1} /><SellerCatlog /></div><Footer/></>} />
  <Route path='/admin/addproduct/:SellerId' element={<>< NavBar/><div className='Profile-Container' ><SellerLeft page={2} /><SellerAddProduct /></div><Footer/></>} />
  <Route path='/admin/viewproduct/:productId' element={<>< NavBar/><div className='Profile-Container' ><SellerLeft page={-1} /><SellerAddProduct /></div><Footer/></>} />
  </Routes>
  </BrowserRouter>
}

export default App;
