import React, { useEffect, useState } from "react"
import { Grid } from '@mui/material';
import { AuthContext } from "../../Context/AuthContext";
import {useParams} from "react-router-dom"
import Left_part from "./LeftDetails"
import Right_Part from "./right"
import axios from "axios";
import BackendLink from "../../data_resourses/BackendLink";
function Details(){
    const Context=React.useContext(AuthContext)
    const {Valid,LoginOpen,setLoginOpen,SignOpen,setSignOpen,Next,setNext}=Context
    const ProductId=useParams().productId
    const [Product,setProduct]=useState(false)
    const [InCart,setInCart]=useState(false)
    const [Seller,setSeller]=useState("Untitled")

    useEffect(()=>{
        console.log(process.env,"hi")
        axios
          .get(BackendLink+"/getproduct/"+ProductId+"/"+Valid)
          .then(res =>{
            console.log(res.data)
            setProduct(res.data?.data)
            setInCart(res.data?.InCart)
            setSeller(res.data?.Seller)
          } )
          .catch(err => console.error(err));
    },[ProductId])

    return (
        <div style={{background:"#f2f2f2" ,display:"flex"}}>
            <Grid container style={{background:"#ffffff"}}>
            <Grid item  md={0} lg={4.8} sm={8} xs={12} >
                <Left_part product={Product} InCart={InCart} setInCart={setInCart} />
            </Grid>
            <Grid item md={3} lg={7} sm={12} xs={12} style={{marginTop:"15px"}}>
                <Right_Part product={Product} Seller={Seller} />
            </Grid>
        </Grid>
        </div>
        
    )
}
export default Details;