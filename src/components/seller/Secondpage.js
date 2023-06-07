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

export default function SecondPageSeller() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' ,paddingTop:"30px" }}>
      <div>
           
      <FormControl sx={{ m: 1, width: '29.2ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">First Name</InputLabel>
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end"></InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            label="First Name"
            style={{borderRadius:"10px" ,height:"50px"}}

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
            style={{borderRadius:"10px" ,height:"50px"}}


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
          />
        </FormControl>

        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Store Name</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            label="Store Name"
            style={{borderRadius:"10px" ,height:"50px"}}

          />
        </FormControl>

  
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Store Location</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            label="Store Location"
            style={{borderRadius:"10px" ,height:"50px"}}

          />
        </FormControl>    
      </div>

    </Box>
  );
}