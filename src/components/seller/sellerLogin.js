import React, { useState } from 'react';
import { TextField, Button, Grid, Container, Typography, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
const SellerLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const isMediumOrLargeScreen = useMediaQuery('(min-width: 960px)');
  const navigate=useNavigate()
  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/seller/login", { PhoneNumber:phoneNumber, Password:password })
      .then(res => {
        if (res.status === 200) {
          localStorage.setItem("SellerToken",res.data.token)
          navigate("/admin/info/"+res.data.sellerId)
        }
      })
      .catch(err => console.error(err));
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
          <Grid item xs={12} style={{ width: "100%" }}>
            <TextField
              label="Phone Number"
              variant="outlined"
              fullWidth
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          </Grid>
          <Grid item xs={12} style={{ width: "100%" }}>
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
                <Link to="/seller/register" style={{ textDecoration: "none", color: "#047BD5", fontWeight: "600" }}>Register for new account</Link>
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
