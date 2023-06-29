import React, { useState } from 'react';
import { TextField, Button, Grid, Container, Typography, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';

const SellerLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const isMediumOrLargeScreen = useMediaQuery('(min-width: 960px)');

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Phone Number:', phoneNumber);
    console.log('Password:', password);
  };

  return (
    <Container maxWidth="sm" style={{ paddingTop: '16px', paddingBottom: '16px' }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h5">Login</Typography>
          </Grid>
          <Grid item xs={12} style={{width:"100%"}}>
            <TextField
              label="Phone Number"
              variant="outlined"
              fullWidth
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          </Grid>
          <Grid item xs={12} style={{width:"100%"}}>
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={handlePasswordChange}
            />
          </Grid>
          <Grid item xs={12} container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant="body2">
              <Link to="/seller/register" style={{textDecoration:"none" ,color:"#047BD5" ,fontWeight:"600"}}>Register for new account</Link>
              </Typography>
            </Grid>
            <Grid item>
              <Button
                type="submit"
                variant="contained"
                color="primary"
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default SellerLogin;
