import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import { AuthContext } from "../Context/AuthContext";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Logo from "./Flip-Logo.jpg"
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'; 
import * as yup from 'yup'
import {yupResolver} from "@hookform/resolvers/yup"
import BackendLink from '../data_resourses/BackendLink';


export default function SignUp() {

  const Context=React.useContext(AuthContext)
  const {LoginOpen,setLoginOpen,SignOpen,setSignOpen,Valid ,setValid}=Context
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

  const schema=yup.object().shape({
    PhoneEmail:yup.string().min(10).max(10).required(),
    Password :yup.string().min(3).required()
  })
  const {register ,handleSubmit ,formState:{errors}}=useForm({
    resolver:yupResolver(schema)
  })

  const HandleSign=async ()=>{
    const Payload={
      Phone:PhoneEmail,Password
    }
    setError("Please Wait")
    let result=await axios.post(BackendLink+"/register",Payload)
      if(result.status===200){
          localStorage.setItem("token",result.data.token)
          setValid(result.data.id)
          setSignOpen(false)
          navigate("/account/"+result.data.id)
      }
      else if(result.status==302){
        setError("Phone/Email/Password is incorrect! Please try again")
      }
      else if(result.status===202){
        setError("User is Already registered")
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
      {...register("PhoneEmail")}

      onChange={(e)=>setPhoneEmail(e.target.value)}
      helperText={errors.PhoneEmail && <Typography style={{color:"red" ,fontSize:"1em"}}>Please enter a valid 10 digit Phone no.</Typography>}
      />
      <TextField 
      variant='filled'
      label="Enter Password"
      helperText={errors.Password && <Typography style={{color:"red" ,fontSize:"1em"}}> Password must be of more than 3 length</Typography> }
      onChange={(e)=>setPassword(e.target.value)}
      style={{width:"80%"}}
      type={showPass ? "password" : "text"}

      {...register("Password")}

      InputProps={{
      endAdornment:
          <IconButton onClick={()=>{setShowPass(!showPass)}} >
              {showPass ? <VisibilityIcon/> : <VisibilityOffIcon/>}
          </IconButton>

      }}
            />
            </div>
      <Button style={{background:"rgb(247 114 0)",color:"white",width:"80%"}} onClick={handleSubmit(HandleSign)} variant="filled">SignUp</Button>
      <Typography color="error">{Error}</Typography>
      <p style={{color:"#047BD5",cursor:"pointer"}} onClick={HandleDialogChange}><b>Already an customer ? Login</b></p>
    </Grid></Grid>
  );
}