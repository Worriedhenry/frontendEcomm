import {Button, Rating,Skeleton, Stack} from "@mui/material"
import Data from "../../data_resourses/nav_data"
import { AuthContext } from "../../Context/AuthContext";
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import axios from "axios"
import { Img } from "../UtlityComponents/StyledImage";
import EmptyCart from "./empty cart.png"

import { useNavigate } from "react-router-dom";

const Arr=Array(2).fill(2)

function CatlogCard({Order}) {
  console.log(Order.createdAt,new Date()-new Date(Order.createdAt)+24*60*60*1000)
  const navigate=useNavigate()
    return (
      <Paper
        elevation={3}
        style={{cursor:"pointer"}}
        onClick={()=>navigate("/orderdetails/"+Order._id)}
        sx={{
          p: 2,
          margin: 1,
          maxWidth: 1100,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        
        }}
      >
        <Grid container mt={1}>
            <Grid  md={10}  container>
              <Grid md={3} item>
                <Img loading="lazy" src={Order.OrderedItemImage}></Img>
              </Grid>
              <Grid md={5} ml={2} item>
              <Typography gutterBottom style={{ fontWeight: "bold" }} variant="h1.heading" component="div">
                {Order.OrderedItemName}
              </Typography>
              </Grid>
              <Grid item md={2}>
              <Typography style={{ fontWeight: "bold" }} variant="h3.heading">
                &#8377;{Order.OrderValue.$numberDecimal}
              </Typography>
              </Grid>
            </Grid>
            <Grid md={2} item container>
              {new Date()-new Date(Order.createdAt)<24*60*60*1000 && "Ordered"}
              {new Date()-new Date(Order.createdAt)<48*60*60*1000  && new Date()-new Date(Order.createdAt)>24*60*60*1000  && "Shipped"}
              {new Date()-new Date(Order.createdAt)<72*60*60*1000  && new Date()-new Date(Order.createdAt)>48*60*60*1000 && "On the Way"}
              {new Date()-new Date(Order.createdAt)>72*60*60*1000 && "Ordered"}
            </Grid>
        </Grid>
      </Paper>
    );
  }
export default function OrdersRight(props){
    const [Orders,setOrders]=useState(false)
    const {Valid}=React.useContext(AuthContext)
    const FilterParams=props.FilterParams
    const setFilterParams=props.setFilterParams
    if(FilterParams.get("query")){
    const queryArr=FilterParams.get("query").split(",")
    const newQuery = queryArr.map((element) => {
      if (element === 'On the way') return 1;
      if (element === 'Cancelled') return 2;
      if (element === 'Delivered') return 3;
      if (element === 'Returned') return 4;

    });
  }
    // const data1=
    // console.log(newQuery)
    useEffect(()=>{
      axios
        .get("http://localhost:3001/orders/get/"+Valid)
        .then(res =>{
          // const newdata=res.data.filter((element)=>{
          //   return newQuery.includes(element.OrderStatus)
          // })
            setOrders(res.data)
            // console.log(res.data)
        } )
        .catch(err => console.error(err));
    },[])

    return <div className="Orders-Right">
       <Typography gutterBottom style={{ fontWeight: "bold",textAlign:"center" }} variant="h1.heading" component="h1">
          My Orders
        </Typography>
        {!Orders && <Stack>
          <Skeleton height={180} />
          <Skeleton height={180} />
          <Skeleton height={180} />
        </Stack>
        }
        { Orders &&  Orders.map((order)=>
        <React.Fragment key={order._id}>
        <CatlogCard Order={order} />
      </React.Fragment>
        )}


    </div>
}