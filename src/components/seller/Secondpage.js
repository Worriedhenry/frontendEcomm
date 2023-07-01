import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { AuthContext } from '../../Context/AuthContext';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { SnackbarContext } from '../../Context/SnackbarContext';
import { StyledButton, StyledTypography } from '../UtlityComponents/HeaderStyledElement';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { Typography } from '@mui/material';
export default function SecondPageSeller() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [Password, setPassword] = React.useState("")
  const [Fname, setFname] = React.useState("")
  const [Lname, setLname] = React.useState("")
  const [StoreName, setStoreName] = React.useState("")
  const [Location, setLocation] = React.useState("")
  const {Phone,GSTIN,EmailId}=React.useContext(SnackbarContext)
  const [Error,setError]=React.useState("")
  const {setSellerValid}=React.useContext(AuthContext)
  const navigate=useNavigate()
  const RegisterSeller=async ()=>{
    console.log(Phone)
    const payload={
      Password,PhoneNumber:Phone,FirstName:Fname,LastName:Lname,Email:EmailId,StoreName,GSTIN,StoreLocation:Location
    }
    let response=await axios.post("http://localhost:3001/seller/new",payload)
    console.log(response)
    if(response.status===200){
      localStorage.setItem("SellerToken",response.data.token)
      setSellerValid(response.data.id)
      navigate("/admin/info/"+response.data.id)
    }
    else{
      setError(response.data)
    }

  }



  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', paddingTop: "30px" }}>
      <div>

        <FormControl sx={{ m: 1, width: '29.2ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">First Name</InputLabel>
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end"></InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            label="First Name"
            style={{ borderRadius: "10px", height: "50px" }}
            onChange={(e) => setFname(e.target.value)}


            required

          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '29.2ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Last Name</InputLabel>
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end"></InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            label="Last Name"
            style={{ borderRadius: "10px", height: "50px" }}
            onChange={(e) => setLname(e.target.value)}
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            onChange={(e) => setPassword(e.target.value)}

          />
        </FormControl>

        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Store Name</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            label="Store Name"
            style={{ borderRadius: "10px", height: "50px" }}
            onChange={(e) => setStoreName(e.target.value)}
          />
        </FormControl>


        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Store Location</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            label="Store Location"
            style={{ borderRadius: "10px", height: "50px" }}
            onChange={(e) => setLocation(e.target.value)}
          />
        </FormControl>
        <StyledButton variant='contained' onClick={RegisterSeller} sx={{ mr: 1 }}>
          <StyledTypography>
            Start Selling
          </StyledTypography>
        </StyledButton>
      </div>
          <Typography color="error">{Error}</Typography>
    </Box>
  );
}