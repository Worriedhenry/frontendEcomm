import  React from 'react';
import HorizontalNonLinearStepper from './progress_stepper';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Logo from "../Flip-Logo.jpg";

import Container from '@mui/material/Container';
function OrderCheckout(){
    return (
        <div>
          <div>
            <div style={{backgroundColor:"#047BD5" }}><img src={Logo} style={{height: "9vh"}}></img></div>
            <div style={{backgroundColor:'#f0f0f0' }} >
              
                <CssBaseline />
                <Container maxWidth="md"style={{backgroundColor:"white" }} >
                  <Box sx={{ bgcolor: '', height: '100vh' ,paddingTop:"10vh" ,width:"100%"}} >
                      <HorizontalNonLinearStepper/>
                  </Box>
                </Container>
            </div>
          </div>
        </div>
    )
}
export default OrderCheckout;