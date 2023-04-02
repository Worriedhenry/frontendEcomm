import React from "react"
import { Button, IconButton, InputAdornment, TextField ,Typography ,Grid } from '@mui/material';
import { Height, MarginOutlined } from "@mui/icons-material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import Left_part from "./left_details"
import Right_Part from "./right";
function Details(){


    return (
        <div style={{background:"#f2f2f2" ,display:"flex"}}>
        <Grid container style={{background:"#ffffff"}}>
            <Grid item  md={4} lg={4} sm={8} xs={12} >
                <Left_part />
            </Grid>
            <Grid item md={8} lg={8} sm={12} xs={12} style={{marginTop:"50px"}}>
                <Right_Part />
            </Grid>
        </Grid>
        </div>
        
    )
}
export default Details;
