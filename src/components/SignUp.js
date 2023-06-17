import { Button, Grid, IconButton, TextField } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import { AuthContext } from "../Context/AuthContext";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Logo from "./Flip-Logo.jpg"
import axios from "axios"
import { useNavigate } from 'react-router-dom';
export default function SignUp() {

  const Context=React.useContext(AuthContext)
  const {LoginOpen,setLoginOpen,SignOpen,setSignOpen}=Context
  let [showPass, setShowPass] = useState(true);
  const [PhoneEmail,setPhoneEmail]=useState("")
  const [Password,setPassword]=useState("")
  const [PhoneEmailHelperText,setPhoneEmailHelperText]=useState("")
  const [PasswordHelperText,setPasswordHelperText]=useState("")
  const [Error,setError]=useState("")
  const navigate=useNavigate()

  const HandleDialogChange=()=>{
    setSignOpen(false)
    setLoginOpen(true)
  }

  const HandleSign=async ()=>{
    if (PhoneEmail==""){
      setPhoneEmailHelperText("Field cannot be empty")
      return
  }
  if (Password==""){
      setPasswordHelperText("Field cannot be empty")
      setPhoneEmailHelperText("")
      return
  }
  setPasswordHelperText("")
  setPhoneEmailHelperText("")
    const Payload={
      Phone:PhoneEmail,Password
    }
    let result=await axios.post("http://localhost:3001/register",Payload)
      if(result.status===200){
          navigate("/account")
      }
      else if(result.status==302){
        setError("Phone/Email/Password is incorrect! Please try again")
      }
      else{
        setError("An unknown error occured on our side , please try again")
      }
  }
  return (
    <Grid container style={{display:"flex",height:"100%"}}>
      <Grid item xs={12} md={4}>
    <span style={{height:"100%",background:"#047BD5",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"}} >
      <div style={{padding:"25px"}}>
      <h1 style={{color:"white"}}>Looks like you're new here!</h1>
      <p style={{color:"white"}}>Sign up with your mobile number to get started</p>
      </div>
      <img src={Logo} style={{width:"85%"}} alt=""></img>
    </span>
    </Grid>
    <Grid item xs={12} md={8} style={{display:"flex",flexDirection:"column",alignItems:"center",height:"100%"}}>
      <div className='Login-FieldContainer'>
      <TextField 
      autoFocus
      variant='filled'
      style={{width:"80%"}}
      label="Phone Number"
      onChange={(e)=>setPhoneEmail(e.target.value)}
      helperText={PhoneEmailHelperText}
      />
      <TextField 
      variant='filled'
      label="Enter Password"
      helperText={PasswordHelperText}
      onChange={(e)=>setPassword(e.target.value)}
      style={{width:"80%"}}
      type={showPass ? "password" : "text"}
      InputProps={{
      endAdornment:
          <IconButton onClick={()=>{setShowPass(!showPass)}} >
              {showPass ? <VisibilityIcon/> : <VisibilityOffIcon/>}
          </IconButton>

      }}
            />
            </div>
      <Button style={{background:"rgb(247 114 0)",color:"white",width:"80%"}} onClick={HandleSign} variant="filled">SignUp</Button>

      <p style={{color:"#047BD5",cursor:"pointer"}} onClick={HandleDialogChange}><b>Already an customer ? Login</b></p>
    </Grid></Grid>
  );
}