import React, { useEffect, useState } from "react"
import { Button, IconButton, InputAdornment, TextField ,Typography ,Grid } from '@mui/material';
import {useParams} from "react-router-dom"
import Left_part from "./left_details"
import Right_Part from "./right";
import axios from "axios";
function Details(){
    const ProductId=useParams().productId
    const [Product,setProduct]=useState(false)
    const props={
        url:"https://rukminim1.flixcart.com/image/200/200/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70",
        MRP:10000,
        disc_prize:7999,
        reviews:[1,5,8,9,4],
        numrate:4.3,
        Title:"Canon 33mm Lense AI assisted Camera "
    }
    useEffect(()=>{
        axios
          .get("http://localhost:3001/getproduct/"+ProductId)
          .then(res =>{
            setProduct(res.data)
          } )
          .catch(err => console.error(err));
    },[ProductId])

    return (
        <div style={{background:"#f2f2f2" ,display:"flex"}}>
        {Product &&<Grid container style={{background:"#ffffff"}}>
            <Grid item  md={0} lg={4.8} sm={8} xs={12} >
                <Left_part product={Product} />
            </Grid>
            <Grid item md={3} lg={7} sm={12} xs={12} style={{marginTop:"50px"}}>
                <Right_Part product={Product} />
            </Grid>
        </Grid>}
        </div>
        
    )
}
export default Details;
