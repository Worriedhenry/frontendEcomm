import  React from 'react';
import HorizontalNonLinearStepper from './progress_steeper';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Logo from "../FastKart.png";
import WhySell from "../WhySell.png"
import Container from '@mui/material/Container';
import { Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
function SellerRegister(){
  const navigate=useNavigate();
    return (<>
    <head>
      <title>Register-Seller | Fastkart</title>
    </head>
        <div>
          <div>
            <div className='sellerRegisterHeader' style={{backgroundColor:"#047BD5" }}><img src={Logo}  onClick={()=>navigate("/")} ></img></div>
            <div style={{backgroundColor:'#f0f0f0' }} >
              
                <CssBaseline />
                <Container maxWidth="sm"style={{backgroundColor:"white" }} >
                  <Box sx={{ bgcolor: '', height: '90vh' ,paddingTop:"10vh"}} >
                      <HorizontalNonLinearStepper/>
                  </Box>
                  <Link href='/seller/login'>Already a seller ? Login Instead</Link>
                </Container>
                <div style={{width:"100%" ,display:"flex" ,justifyContent:"center"}}>

                  <img src={WhySell} style={{objectFit:"contain" ,width:"100%"}} ></img>
                </div>
            </div>
          </div>
        </div>
    </>
    )
}
export default SellerRegister;