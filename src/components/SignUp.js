import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Logo from "./Flip-Logo.jpg"
function SignUp({OpenLogin}) {
  let [showPass, setShowPass] = useState(true);
  const [PhoneEmail,setPhoneEmail]=useState("")
  const [Password,setPassword]=useState("")
  
  return (
    <div style={{display:"flex",height:"100%"}}>
    <span style={{width:"40%",height:"100%",background:"#047BD5",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"}} >
      <div style={{padding:"25px"}}>
      <h1 style={{color:"white"}}>Looks like you're new here!</h1>
      <p style={{color:"white"}}>Sign up with your mobile number to get started</p>
      </div>
      <img src={Logo} style={{width:"85%"}} alt=""></img>
    </span>
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",width:"60%",height:"100%"}}>
      <div className='Login-FieldContainer'>
      <TextField 
      autoFocus
      variant='filled'
      style={{width:"80%"}}
      label="Phone Number"
      />
      <TextField 
      variant='filled'
      label="Enter Password"
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
      <Button style={{background:"rgb(247 114 0)",color:"white",width:"80%"}} variant="filled">SignUp</Button>

      <p style={{color:"#047BD5"}} onClick={OpenLogin}><b>Already an customer ? Login</b></p>
    </div></div>
  );
}
export default SignUp;