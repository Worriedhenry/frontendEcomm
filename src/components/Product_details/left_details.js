import React from "react"
import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
function Left_part({url}){
    const LittleImagesStyle={
        padding:"0px",width:"49px",border:" 1px solid #f0f0f0",
        marginBottom:"17px"
    }
    return(
        <div style={{minWidth:"40%",padding:"41px 23px 0px 10px"}}>
            <div 
            style={{
                display:"flex"
            }}
            >
            <div
            style={{
                display:"flex",
                flexDirection:"column"               
            }}
            >
            <img src={url} alt="" style={LittleImagesStyle} />
            <img src={url} alt="" style={LittleImagesStyle} />
            <img src={url} alt="" style={LittleImagesStyle} />
            <img src={url} alt="" style={LittleImagesStyle} />
            <img src={url} alt="" style={LittleImagesStyle} />
            </div>
            <div style={{border:" 1px solid #f0f0f0" ,width:"90%"}} >
                <img src={url} alt="" style={{padding:"10px",width:"416px"}} />
            </div>
            </div>
            <Button style={{backgroundColor:"rgb(255, 173, 51)" ,width:"49%" ,height:"51px"  ,borderRadius:"2px"}} startIcon={<ShoppingCartIcon />} variant="filled" >Add to cart</Button>
            <Button style={{backgroundColor:"#F0721A",width:"49%" ,height:"51px" ,marginLeft:"2%" ,borderRadius:"2px"}} startIcon={<FlashOnIcon/>} variant="filled">Buy now</Button>            
        </div>
    )
}
export default Left_part;