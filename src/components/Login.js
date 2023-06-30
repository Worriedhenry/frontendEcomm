import { Button, IconButton, TextField, Grid, Typography } from '@mui/material';
import React from 'react'
import { AuthContext } from "../Context/AuthContext";
import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useForm } from 'react-hook-form'; 
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Logo from "./Flip-Logo.jpg"
import axios from 'axios';
import * as yup from 'yup'
import {yupResolver} from "@hookform/resolvers/yup"

function Login() {
  let [showPass, setShowPass] = useState(true);
  const Context = React.useContext(AuthContext)
  const { setLoginOpen, setSignOpen } = Context
  const [PhoneEmail, setPhoneEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [PhoneEmailHelperText, setPhoneEmailHelperText] = useState("")
  const [PasswordHelperText, setPasswordHelperText] = useState("")
  
  const schema=yup.object().shape({
    EmailPhone:yup.string().max(10).min(10).required(),
    password :yup.string().required()
  })
  const {register ,handleSubmit ,formState:{errors}}=useForm({
    resolver:yupResolver(schema)
  })

  const HandleDialogChange = () => {
    setLoginOpen(false)
    setSignOpen(true)
  }

  const handleLogin = async () => {
    console.log(Context)
    const PayLoad = {
      Phone: PhoneEmail, Password
    }

    let result = await axios.post("http://localhost:3001/login", PayLoad)
    if (result?.status === 200) {
      localStorage.setItem("token", result.data.token)
      console.log(result.data)
      Context.setValid(result.data.id)
      setLoginOpen(false)
    }
    else if (result?.status == 302) {
      setError("Phone/Email/Password is incorrect! Please try again")
    }
    else {
      setError("An unknown error occured on our side , please try again")
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
            label="Enter Email/Phone Number"
            onChange={(e) => setPhoneEmail(e.target.value)}
            helperText={errors.EmailPhone &&  <Typography style={{color:"red" ,fontSize:"1em"}}> *Please Enter a valid Email*</Typography>}
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
        <Button style={{ background: "rgb(247 114 0)", color: "white", width: "80%" }} onClick={handleSubmit(handleLogin)} variant="filled">Login</Button>

        <p style={{ color: "#047BD5", cursor: "pointer" }} onClick={HandleDialogChange} ><b>New to Flipkart ? Create an Account</b></p>
      </Grid></Grid>
  );
}
export default Login