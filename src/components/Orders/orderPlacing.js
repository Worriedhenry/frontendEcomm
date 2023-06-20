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
import { useNavigate } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { Button } from '@mui/material';
import styled from '@emotion/styled';
import { OrderContext } from '../../Context/OrderContext';

export default function PlaceOrder() {

    const {Name,setName,Phone,setPhone,Pincode,setPincode,Locality,setLocality,Address,setAddress,City,setCity,State,setState,Landmark,setLandmark,Alternate,setAlternate,AddressType,setAddressType}=React.useContext(OrderContext)

    const navigate=useNavigate()
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    


    return (
        <div>
            < div style={{ height:"75vh",width:"50vw" ,backgroundColor:"white" ,margin:"auto",marginTop:"2vh"}}>
            <CssBaseline />
            <Container maxWidth="sm">
            <header>
                <div style={{backgroundColor:"#047BD5" , height:"8vh" ,width:"85%" ,display:"flex" }}>
                    <h3 style={{color:"white" ,textAlign:"justify" ,marginLeft:"2vw"}}>Delivery Address</h3>
                </div>
            </header>
            <Box sx={{  height: '100vh' }} >


            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <div>
                    <div style={{display:"flex" ,justifyContent:"space-between"}} >
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-amount">Name</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            onChange={(e)=>setName(e.target.value)}
                            label="Name"
                            
                        />
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-amount">10 digit phone number</InputLabel>

                        <OutlinedInput
                            id="outlined-adornment-weight"
                            onChange={(e)=>setPhone(e.target.value)}
                            label="10 digit mobile number"
                            type='number'
                        />
                        </FormControl>
                    </div>


                    <div style={{display:"flex"}} >
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-amount">Pincode</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            onChange={(e)=>setPincode(e.target.value)}
                            label="Pincode"
                            type='number'
                        />
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-amount">Locality</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            onChange={(e)=>setLocality(e.target.value)}
                            label="Locality"
                            
                        />
                        </FormControl>
                    </div>

                    <TextField
                        id="outlined-multiline-flexible"
                        label="Address"
                        multiline
                        maxRows={3}
                        minRows={3}
                        style={{width:"96.5%",marginLeft:"2%"}}
                        onChange={(e)=>setAddress(e.target.value)}
                    />


                    <div style={{display:"flex"}} >
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-amount">City/District/Town</InputLabel>
                        <OutlinedInput
                        id="outlined-adornment-weight"
                        onChange={(e)=>setCity(e.target.value)}
                        label="City/District/Town"
                            
                        />
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-amount">State</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            onChange={(e)=>setState(e.target.value)}
                            label="State"
                        />
                        </FormControl>
                    </div>
                    
                    <div style={{display:"flex"}} >
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-amount">Landmark (Optional)</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            label="Landmark (Optional)"
                            onChange={(e)=>setLandmark(e.target.value)}
                        />
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-amount">Alternate Phone (Optional)</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            label="Alternate Phone (Optional)"
                            onChange={(e)=>setAlternate(e.target.value)}
                            type='number'
                        />
                        </FormControl>


                    </div>
                    <div style={{margin:"4% 0 0 2%"}} >
                        <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">Address Type</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel value="Homme" style={{fontSize:"0.2rem"}} control={<Radio />} onClick={(e)=>setAddress("Home")} label="Home(all day delivery )" />
                                    <FormControlLabel value="Work" control={<Radio />} label="Work( 10AM - 5PM )" onClick={(e)=>setAddress("Office")} />
                                </RadioGroup>
                        </FormControl>     
                    </div>      
 
                </div>
                <div>

                </div>

            

            </Box>


            </Box>
            </Container>
            </div>
        </div>
        
    );
    }