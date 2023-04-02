import './App.css';
import Home from "./components/Home/home"
import Details from "./components/Product_details/Detail"
import { Box} from "@mui/material";
<<<<<<< HEAD
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
=======
import Header from './components/Header';


function App() {
  return (<>
    <div >
        <Header />
        <Box>
          <Home />

        </Box>
    </div>
    </>
  );
>>>>>>> ecf59da200d50c513dcc6f2ba5508ab1068c0c02
}

export default App;
