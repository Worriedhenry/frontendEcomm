import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/header"
import Home from "./components/Home/home"
import { Box,Button ,styled,Typography } from "@mui/material";


function App() {
  return (
    <div >
      <Header />
      <Box style={{marginTop:"52px"}}>
          <Home />
      </Box>
    </div>
  );
}

export default App;
