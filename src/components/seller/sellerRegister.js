import  React from 'react';
import HorizontalNonLinearStepper from './progress_steeper';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
function SellerRegister(){
    return (
        <div>

          <div style={{backgroundColor:'#f0f0f0'}} >
              <CssBaseline />
              <Container maxWidth="sm"style={{backgroundColor:"white" }} >
                <Box sx={{ bgcolor: '', height: '100vh' ,paddingTop:"10vh"}} >
                    <HorizontalNonLinearStepper/>
                </Box>
              </Container>
          </div>
        </div>
    )
}
export default SellerRegister;