import './App.css';
import React from 'react'
import { AuthState } from './Context/AuthContext';
import Home from "./components/Home/home"
import NavBar from './components/Header';
import Profile from './components/Profile/ProFile';
import Orders from './components/Orders/Orders';
import SellerProfile from './components/SellerDashboard.js/Seller';
import Write_review from './components/Product_details/review/write_review/write_review';
import Footer from './components/Footer';
import OrdersPlace from './components/Orders/Orders';
import Cart from './components/Cart/Cart';
import Details from './components/Product_details/Detail';
import SearchProduct from './components/ProductSearch/SearchProduct';
import SellerRegister from './components/seller/sellerRegister';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Payment from './components/Orders/Payment';
import OrderSuccessPage from './components/Orders/OrderSuccessPlace';
import SellerLogin from './components/seller/sellerLogin';
import HorizontalNonLinearStepper from './components/Orders/progress_stepper';
import OrderDetails from './components/Orders/OrderDetails';
import { OrderState } from './Context/OrderContext';
import { CartState } from './Context/CartContext';
import { SnackbarState } from './Context/SnackbarContext';
import ProtectedRoutes from './components/UtitlityFuctions/ProtectedRoutes';
import SellerProtectedRoutes from './components/UtitlityFuctions/SellerProtectedRoutes';
import SellerEditProduct from './components/SellerDashboard.js/ProductModification';
function App() {
  return (
    <BrowserRouter>
      <AuthState>
        <OrderState>
          <CartState>
            <SnackbarState>
                <Routes>
                  <Route path='/ordersuccess' element={<><NavBar/><OrderSuccessPage /><Footer/></>} />
                  <Route path='/' element={<><NavBar/><Home /> <Footer/></>} />
                  <Route path='/account/:UserId' element={<ProtectedRoutes Component={<Profile page={0} />} />} />
                  <Route path='/account/orders/:UserId' element={<ProtectedRoutes Component={<Orders />} />} />
                  <Route path='/viewcart/:UserId' element={<ProtectedRoutes Component={<Cart />} />} />
                  <Route path='/viewproduct/:productId' element={<ProtectedRoutes Component={<Details />} />} />
                  <Route path='/search' element={<ProtectedRoutes Component={<SearchProduct />} />} />
                  <Route path='/writereview/:ProductId' element={<ProtectedRoutes Component={<Write_review />} />} />
                  <Route path="/seller/register" element={<SellerRegister />} />
                  <Route path='/payment' element={<ProtectedRoutes Component={<Payment />} />} />
                  <Route path='/ordersuccess' element={<OrderSuccessPage />} />
                  <Route path='/buyproduct' element={<ProtectedRoutes Component={<HorizontalNonLinearStepper />} />} />
                  <Route path='/orderdetails/:OrderId' element={<ProtectedRoutes Component={<OrderDetails />} />} />
                  <Route path='/seller/login' element={<><NavBar/><SellerLogin /><Footer/></>} />
                  <Route path='/admin/info/:SellerId' element={<SellerProtectedRoutes Component={<SellerProfile />} />} />
                  <Route path='/admin/catlog/:SellerId' element={<SellerProtectedRoutes Component={<SellerProfile />} />} />
                  <Route path='/admin/addproduct/:SellerId' element={<SellerProtectedRoutes Component={<SellerProfile />} />} />
                  <Route path='/admin/viewproduct/:productId' element={<SellerProtectedRoutes Component={<SellerProfile />} />} />
                  <Route path='/placeorder' element={<ProtectedRoutes Component={<OrdersPlace />} />} />
                  <Route path='/admin/edit/:ProductId' element={<SellerProtectedRoutes Component={<SellerEditProduct/>} />} />
                </Routes>
            </SnackbarState>
          </CartState>
        </OrderState>
      </AuthState>
    </BrowserRouter>)
}

export default App;
