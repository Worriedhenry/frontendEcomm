import './App.css';
import Home from "./components/Home/home"
import { Box} from "@mui/material";
import NavBar from './components/Header';
import Profile from './components/Profile/ProFile';
import Headers from './components/Header';
import Footer from './components/Footer';
import Orders from './components/Orders/Orders';
import Cart from './components/Cart/Cart';
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
function App() {
  return <BrowserRouter>
  <Routes>
  <Route path='/' element={<><NavBar /><Home /><Footer/></>} />
  <Route path='/account' element={<>< NavBar/><Profile /><Footer/></>} />
  <Route path='/account/orders' element={<>< NavBar/><Orders /><Footer/></>} />
  <Route path='viewcart' element={<>< NavBar/><Cart /><Footer/></>} />
  </Routes>
  </BrowserRouter>
}

export default App;
