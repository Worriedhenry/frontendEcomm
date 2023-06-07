import  React from 'react';
import HorizontalNonLinearStepper from './progress_steeper';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
function SellerLogin(){
    return (
        <div>

      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '', height: '100vh' ,paddingTop:"10vh"}} >
            <HorizontalNonLinearStepper/>
        </Box>
      </Container>
        </div>
    )
}
export default SellerLogin;