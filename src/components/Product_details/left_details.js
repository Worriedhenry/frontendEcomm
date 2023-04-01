import React from "react"
import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
function Left_part(){
    return(
        <div style={{minWidth:"40%",padding:"40px 20px 0px 80px"}}>
            <div style={{border:" 1px solid #f0f0f0" ,padding:"15px 20px" ,width:"90%"}} >
                <img src="https://rukminim1.flixcart.com/image/200/200/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70" style={{padding:"10px",width:"95%"}} />
            </div>
            <Button style={{backgroundColor:"rgb(255, 173, 51)" ,width:"49%" ,height:"51px"  ,borderRadius:"2px"}} startIcon={<ShoppingCartIcon />} variant="filled" >Add to cart</Button>
            <Button style={{backgroundColor:"#F0721A",width:"49%" ,height:"51px" ,marginLeft:"2%" ,borderRadius:"2px"}} startIcon={<FlashOnIcon/>} variant="filled">Buy now</Button>            
        </div>
    )
}
export default Left_part;