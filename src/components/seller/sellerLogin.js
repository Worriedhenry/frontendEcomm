import React, { useState } from 'react';
import { TextField, Button, Grid, Container, Typography, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
const SellerLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const isMediumOrLargeScreen = useMediaQuery('(min-width: 960px)');
  const navigate=useNavigate()


  const schema=yup.object().shape({
    phoneNumber:yup.number().test(val => val.toString().length === 10),
    Password :yup.string().required()
  })

  const handleLogin = (event) => {
    axios
      .post("http://localhost:3001/seller/login", { PhoneNumber: event.phoneNumber, Password: password })
      .then(res => {
        if (res.status === 200) {
          localStorage.setItem("SellerToken", res.data.token)
          navigate("/admin/info/" + res.data.sellerId)
        }
      })
      .catch(err => console.error(err));
  };
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })


  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Container maxWidth="sm" style={{ paddingTop: '16px', paddingBottom: '16px' }}>
      <form onSubmit={handleLogin}>
        <Grid container spacing={2} direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h5">Login</Typography>
          </Grid>
          <Grid item xs={12} style={{ width: "100%" }}>
            <TextField
              label="Phone Number"
              variant="outlined"
              fullWidth
              onChange={handlePhoneNumberChange}
              {...register("phoneNumber")}
              helperText={errors.phoneNumber && <Typography style={{ fontSize: "1em", color: "red" }}>*Please enter valid 10 digit phone no. *</Typography>}
            />
          </Grid>
          <Grid item xs={12} style={{ width: "100%" }}>
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
                <Link to="/seller/register" style={{ textDecoration: "none", color: "#047BD5", fontWeight: "600" }}>Register for new account</Link>
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
