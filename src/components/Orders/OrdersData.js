import { Button, Rating, Skeleton, Stack, styled } from "@mui/material"
import Data from "../../data_resourses/nav_data"
import { AuthContext } from "../../Context/AuthContext";
import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import axios from "axios"
import { Img } from "../UtlityComponents/StyledImage";
import EmptyCart from "./empty cart.png"
import { useNavigate } from "react-router-dom";
import BackendLink from "../../data_resourses/BackendLink";
const StyTypo = styled(Typography)(({ theme }) => ({
  fontSize: "1.2em",
  fontWeight: "bold",

  [theme.breakpoints.down('sm')]: {
    fontSize: ".9em",
  },
}));

const StyBody = styled(Typography)(({ theme }) => ({
  fontSize: "0.9em",


  [theme.breakpoints.down('sm')]: {
    fontSize: "0.75em",
  },
}));


function CatlogCard({ Order }) {

  const navigate = useNavigate()

  const HandleRateProduct = () => {

    navigate("/writereview/" + Order.Ordereditem)

  }


  return (
    <Paper
      elevation={3}


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
        <Grid md={10} item sm={9} xs={9} container>
          <Grid md={3} xs={3} item>
            <Img loading="lazy" src={Order.OrderedItemImage}></Img>
          </Grid>
          <Grid container item md={5} style={{ cursor: "pointer" }} onClick={() => navigate("/orderdetails/" + Order._id)} ml={2} xs={7} >
            <Grid md={12} xs={5} item>
              <StyTypo className="truncate" style={{ fontWeight: "bold" }} >
                {Order.OrderedItemName}
              </StyTypo>

            </Grid>
            <Grid>
              <StyBody style={{ fontWeight: "bold" }} >
                {Order.Name}
              </StyBody>
            </Grid>
            <Grid>
              <StyBody style={{ fontWeight: "bold" }} >
                {Order.OrderDestination}
              </StyBody>
            </Grid>
          </Grid>
          <Grid item md={2} sm={2} xs={1}>
            <StyTypo style={{ fontWeight: "bold" }} variant="h3.heading">
              &#8377;{Order.OrderValue.$numberDecimal}
            </StyTypo>
          </Grid>
        </Grid>
        <Grid md={2} sm={3} xs={3} item container >
          <Grid item>
            {new Date() - new Date(Order.createdAt) < 24 * 60 * 60 * 1000 && <StyTypo>Ordered</StyTypo>}
            {new Date() - new Date(Order.createdAt) < 48 * 60 * 60 * 1000 && new Date() - new Date(Order.createdAt) > 24 * 60 * 60 * 1000 && <StyTypo>"Shipped"</StyTypo>}
            {new Date() - new Date(Order.createdAt) < 72 * 60 * 60 * 1000 && new Date() - new Date(Order.createdAt) > 48 * 60 * 60 * 1000 && <StyTypo>On the Way"</StyTypo>}
            {new Date() - new Date(Order.createdAt) > 72 * 60 * 60 * 1000 && <StyTypo>Delivered</StyTypo>}
          </Grid>
          <Grid item >
            <div onClick={()=> navigate("/writereview/" + Order.Ordereditem)} style={{ textAlign: "right", boxSizing: "border-box" }}>
              <button type="submit" style={{ boxShadow: "0 1px 2px 0 rgba(0,0,0,.26)", border: "none", cursor: "pointer", color: "#212121", fontSize: "14px", padding: "16px 36px", margin: "18px 18px 0 0" }}><span >Rate Product</span></button>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
export default function OrdersRight(props) {
  const [Orders, setOrders] = useState(false)
  const { Valid } = React.useContext(AuthContext)
  const FilterParams = props.FilterParams
  const setFilterParams = props.setFilterParams
  if (FilterParams.get("query")) {
    const queryArr = FilterParams.get("query").split(",")
    const newQuery = queryArr.map((element) => {
      if (element === 'On the way') return 1;
      if (element === 'Cancelled') return 2;
      if (element === 'Delivered') return 3;
      if (element === 'Returned') return 4;

    });
  }
  // const data1=
  // console.log(newQuery)
  useEffect(() => {
    axios
      .get(BackendLink + "/orders/get/" + Valid)
      .then(res => {
        // const newdata=res.data.filter((element)=>{
        //   return newQuery.includes(element.OrderStatus)
        // })
        setOrders(res.data)
        // console.log(res.data)
      })
      .catch(err => console.error(err));
  }, [])

  return <div className="Orders-Right">
    <Typography gutterBottom style={{ fontWeight: "bold", textAlign: "center" }} variant="h1.heading" component="h1">
      My Orders
    </Typography>
    {!Orders && <Stack>
      <Skeleton height={180} />
      <Skeleton height={180} />
      <Skeleton height={180} />
    </Stack>
    }
    {Orders && Orders.map((order) =>
      <React.Fragment key={order._id}>
        <CatlogCard Order={order} />
      </React.Fragment>
    )}
    {Orders && Orders.length == 0 && <Img src={EmptyCart} />}


  </div>
}