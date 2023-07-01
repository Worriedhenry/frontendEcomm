import  React from 'react';
import HorizontalNonLinearStepper from './progress_steeper';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Logo from "../Flip-Logo.jpg";
import WhySell from "../WhySell.png"
import Container from '@mui/material/Container';
import { Link } from '@mui/material';
function SellerRegister(){
    return (
        <div>
          <div>
            <div style={{backgroundColor:"#047BD5" }}><img src={Logo} style={{height: "9vh"}}></img></div>
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
    )
}
export default SellerRegister;