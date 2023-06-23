import React, { useEffect,useState } from "react"
import { Grid } from "@mui/material";
import { Img } from "../UtlityComponents/StyledImage";
import OrderProgresSteeper from "./ProgressSteeper";
import axios from "axios"
import { useParams } from "react-router-dom";
export default function OrderDetails(){
    const [order,setOrders]=useState(false)
    const OrderId=useParams().OrderId
    useEffect(()=>{
      axios
        .get("http://localhost:3001/orders/getone/"+OrderId)
        .then(res =>{
            setOrders(res.data)
        } )
        .catch(err => console.error(err));
    },[])

    return (
        <Grid container justifyContent="center"  spacing={3}  style={{background:"#f3f0f0"}}>
            <Grid md={10} mt={6}  xs={10} container flexDirection="column" sm={10} mb={3} style={{background:"white"}} item>
            <h3 style={{fontSize:"1.4vw"}}>Delivery Address</h3>
            <h4 style={{fontSize:"1.2vw"}}>{order.Name}</h4>
            <p style={{fontSize:"1.2vw"}}>{order.OrderDestination}</p>
            <h4 style={{fontSize:"1.3vw"}}>Phone Number : {order.Phone} , {order.AlternatePhone}</h4>
            </Grid>
            <Grid mb={6} sm={10} xs={10} md={10}   style={{background:"white"}}  container item>
                    <Grid  alignItems="center"style={{background:"white",display:"flex"}} sm={2} mr={3}  md={2} xs={3.5} item> 
                        <Img src={order.OrderedItemImage}></Img>
                    </Grid>
                    <Grid md={2} xs={3.5} sm={6} item>
                        <h3 style={{fontSize:"1.4vw"}}>{order.OrderedItemName}</h3>
                        <h4 style={{fontSize:"1.2vw"}}>&#8377; {(order.OrderValue)?.$numberDecimal}</h4>
                    </Grid>
                    <Grid md={5} sm={4} xs={6} item>
                        <OrderProgresSteeper step={order.OrderStatus} />
                    </Grid>
            </Grid>
        </Grid>
    )
    
  };