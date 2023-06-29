import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { SnackbarContext } from '../../Context/SnackbarContext';

export default function FirstPageSeller() {
    const [isDisable,setdisable]=React.useState(false)
    const [Gst,setstate]=React.useState("Enter GSTIN")
    const [Msg,setmsg]=React.useState("GSTIN is required to sell products on Flipkart. You can also share it in the final step.")
    const {Phone,setPhone,EmailId,setEmailId,GSTIN,setGSTIN}=React.useContext(SnackbarContext)
    const [refNo,setrefNo]=React.useState("")


    //onclick on next handle krna h abhi 


  const [showPassword, setShowPassword] = React.useState(false);
    const handleSelect=()=>{
        setdisable(!isDisable)
        setstate(!isDisable ? "Enter PAN Number" : "Enter GSTIN")
        setmsg(isDisable ? "GSTIN is required to sell products on Flipkart. You can also share it in the final step." : "PAN is required to sell books on Flipkart. You can also share it in the final step.")
    }
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' ,paddingTop:"30px" }}>
      <div>
           
      <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Phone No.</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            label="Phone No."
            style={{borderRadius:"10px" ,height:"50px"}}
            onChange={(e)=>setPhone(e.target.value)}
            value={Phone}
            required
          />
        </FormControl>

  
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Email ID</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            label="Email ID"
            type="email"
            value={EmailId}
            style={{borderRadius:"10px" ,height:"50px"}}
            onChange={(e)=>setEmailId(e.target.value)}
            pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
            required
          />      
        </FormControl>    
        <div>
            <Typography style={{padding:"8px"}}>What are you looking to sell on Flipkart?</Typography>
            <Button  variant="contained" style={{width:"18vh" ,height:"7vh" ,margin:"10px", background:isDisable && "#878787",textTransform:"none"}} >All Categories</Button>
        </div>

        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount" style={{fontSize:"0.9rem"}}>{Gst}</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            label="isGSTLong "
            value={GSTIN}
            style={{borderRadius:"10px" ,height:"50px"}}
            onChange={(e)=>setGSTIN(e.target.value)}

          />
        </FormControl>  
        <Link to="/seller/login" activeClassName="active" ></Link>  
        <Typography style={{padding:"7px"}}>{Msg}</Typography>
      </div>

    </Box>
  );
}