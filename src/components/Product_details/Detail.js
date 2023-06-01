import React from "react"
import { Button, IconButton, InputAdornment, TextField ,Typography ,Grid } from '@mui/material';
import { Height, MarginOutlined } from "@mui/icons-material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import Left_part from "./left_details"
import Right_Part from "./right";
import Reviews from "./review/review";
function Details(){
    const props={
        url:"https://rukminim1.flixcart.com/image/200/200/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70",
        MRP:10000,
        disc_prize:7999,
        reviews:[1,5,8,9,4],
        numrate:4.3,
        Title:"Canon 33mm Lense AI assisted Camera "
    }

    return (
        <div style={{background:"#f2f2f2" ,display:"flex"}}>
        <Grid container style={{background:"#ffffff"}}>
            <Grid item  md={0} lg={4.8} sm={8} xs={12} >
                <Left_part url={props.url} />
            </Grid>
            <Grid item md={3} lg={7} sm={12} xs={12} style={{marginTop:"50px"}}>
                <Right_Part props={props} />
                <Reviews />
            </Grid>
        </Grid>
        </div>
        
    )
}
export default Details;
