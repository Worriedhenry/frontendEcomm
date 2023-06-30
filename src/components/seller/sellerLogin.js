import React, { useState } from 'react';
import { TextField, Button, Grid, Container, Typography, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form'; 
import * as yup from 'yup'
import {yupResolver} from "@hookform/resolvers/yup"
const SellerLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const isMediumOrLargeScreen = useMediaQuery('(min-width: 960px)');


  const schema=yup.object().shape({
    phoneNumber:yup.string().max(10).min(10).required(),
    Password :yup.string().required()
  })
  const {register ,handleSubmit ,formState:{errors}}=useForm({
    resolver:yupResolver(schema)
  })


  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (data) => {
    console.log(data)

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
              onChange={handlePhoneNumberChange}
              {... register("phoneNumber")}
              helperText={errors.phoneNumber && <Typography style={{fontSize:"1em" ,color:"red"}}>*Please enter valid 10 digit phone no. *</Typography>}
            />
          </Grid>
          <Grid item xs={12} style={{width:"100%"}}>
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              {...register("Password")}
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
                onClick={handleSubmit(handleLogin)}
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
