import { Button, IconButton, TextField, Grid, Typography } from '@mui/material';
import React from 'react'
import { AuthContext } from "../Context/AuthContext";
import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useForm } from 'react-hook-form';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Logo from "./FastKart.png"
import axios from 'axios';
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import BackendLink from '../data_resourses/BackendLink';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";



function Login() {
  let [showPass, setShowPass] = useState(true);
  const Context = React.useContext(AuthContext)
  const { setLoginOpen, setSignOpen } = Context
  const [PhoneEmail, setPhoneEmail] = useState("kaushikankitsharma05@gmail.com")
  const [Password, setPassword] = useState("")
  const [PhoneEmailHelperText, setPhoneEmailHelperText] = useState("")
  const [PasswordHelperText, setPasswordHelperText] = useState("")
  const [Error, setError] = useState("")
  const schema = yup.object().shape({
    EmailPhone: yup.number().test(val => val.toString().length === 10),
    password: yup.string().required()
  })
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const HandleDialogChange = () => {
    setLoginOpen(false)
    setSignOpen(true)
  }

  const handleLogin = async (loginType,decodeData) => {
    var PayLoad
    if (loginType){
      PayLoad = {
        Phone: PhoneEmail,name:decodeData.name , loginType
      }
    }
    else{
      PayLoad = {
        Phone: PhoneEmail,Password , loginType
      }
    }
    console.log(PayLoad);

    setError("Please Wait....")
    let result = await axios.post(BackendLink + "/login", PayLoad)
    if (result?.status === 200) {
      localStorage.setItem("token", result.data.token)
      setError("")
      Context.setValid(result.data.id)
      setLoginOpen(false)
    }
    else {
      setError("Invalid Credentials")
      setTimeout(() => {
        setError("")
      }, 3000);
    }

  }

  return (
    <Grid container style={{ display: "flex", height: "100%" }}>
      <Grid item xs={12} md={4}>
        <span style={{ width: "100%", height: "100%", background: "#047BD5", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between" }} >
          <div style={{ padding: "25px" }}>
            <h1 style={{ color: "white" }}>Login</h1>
            <p style={{ color: "white" }}>Get access to your Orders, Wishlist and Recommendations</p>
          </div>
          <img src={Logo} style={{ width: "85%" }} alt=""></img>
        </span>
      </Grid>
      <Grid item md={8} xs={12} style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100%" }}>
        <div className='Login-FieldContainer'>
          <TextField
            autoFocus
            variant='filled'
            fullWidth
            {...register("EmailPhone")}
            style={{ width: "80%" }}
            label="Phone Number"
            onChange={(e) => setPhoneEmail(e.target.value)}
            helperText={errors.EmailPhone && <Typography style={{ color: "red", fontSize: "1em" }}> *Please Enter a valid Phone*</Typography>}
          />
          <TextField
            variant='filled'
            label="Enter Password"
            style={{ width: "80%" }}
            type={showPass ? "password" : "text"}
            onChange={(e) => setPassword(e.target.value)}
            {...register("password")}
            InputProps={{
              endAdornment:
                <IconButton onClick={() => { setShowPass(!showPass) }} >
                  {showPass ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>

            }}
          />
        </div>
        <Button style={{ background: "rgb(247 114 0)", color: "white", width: "80%" }} onClick={(e)=>handleLogin(0,null)} variant="filled">Login</Button>
        <Typography color="error">{Error}</Typography>
        <GoogleLogin
          onSuccess={credentialResponse => {
            const token = credentialResponse.credential;
            const decodedData = jwtDecode(token);
            console.log(decodedData.name)
            if (decodedData.email_verified === true) {
              setPhoneEmail(decodedData.email)
              
              handleLogin(1,decodedData);
            }
          }}
          onError={() => {
            console.log('Login Failed');
            setError('Google Login Failed')
          }}
        />
        <p style={{ color: "#047BD5", cursor: "pointer" }} onClick={HandleDialogChange} ><b>New to Flipkart ? Create an Account</b></p>
      </Grid></Grid>
  );
}
export default Login  