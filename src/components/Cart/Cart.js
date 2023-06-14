import { Divider, Button, Rating, Stack, Skeleton } from "@mui/material"
import Bread from "./BreadCrimb"
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import {useParams} from "react-router-dom"
import axios from "axios";
const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

function CatlogCard({ product, setCart, AllProductMRP, setAllProductMRP, AllSellingPrice, setAllProductSellingPrice }){
  const {UserId}=useParams()
  const RemoveProductFromCart = async () => {
    let res = await axios.put("http://localhost:3001/RemoveProductFromCart/"+ UserId+"/"+ product._id, { user: localStorage.getItem("user") })
    setAllProductSellingPrice(AllSellingPrice - product.ProductSellingPrice)
    setAllProductMRP(AllProductMRP - product.ProductMRP)
    setCart(res.data)

  }
  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        margin: 1,
        maxWidth: 900,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src={product.ProductImages[0]} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item >
              <Typography gutterBottom style={{ fontWeight: "bold" }} variant="h3.heading" component="div">
                {product.ProductTitle}
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                <div style={{ marginTop: "-1px", display: "flex", fontSize: "13px" }}><span style={{ color: "#838484" }}><Rating readOnly size="small" defaultValue={4} precision={0.5} name="size-small" />
                  <span>&nbsp; {product?.rating} Rating&nbsp; & {product?.reviews} Reviews &nbsp;</span></span></div>
              </Typography>
              <div>
                <span style={{ fontSize: "20px" }}>&#8377; {product.ProductSellingPrice}</span><span style={{ marginLeft: "10px", color: "#838383" }}><strike>&#8377;{product.ProductMRP}</strike></span><span style={{ marginLeft: "10px", color: "#30B131" }}>{((product.ProductMRP * 100 - product.ProductSellingPrice * 100) / product.ProductMRP).toFixed(2)} % off</span>
              </div>
            </Grid>
            <Grid item spacing={2}>
              <Button variant='contained' size='small'>Save For Later</Button>
              {/* <Button variant='contained' size='small' color="error">Remove</Button> */}
              <Button style={{ margin: "5px" }} onClick={RemoveProductFromCart} size="small" variant='contained' color="error">  Remove</Button>
            </Grid>
          </Grid>
          <Grid item>
            <p style={{ background: "green", borderRadius: "5px", color: "white", padding: "5px 7.5px", margin: "5px 1px" }}>{product.quantity > 0 ? "In Stock" : "Out Of Stock"}</p>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
export default function Cart() {
  const [Cart, setCart] = useState(false)
  const [AllProductMRP, setAllProductMRP] = useState(0)
  const [AllSellingPrice, setAllProductSellingPrice] = useState(0)
  const params=useParams()
  useEffect(() => {
    var CountSellingPrice = 0
    var CountMRPPrice = 0
    axios
      .get("http://localhost:3001/getcart/"+params.UserId)
      .then(res => {
        setCart(res.data)

        res.data.map((product) => {
          CountSellingPrice += product.ProductSellingPrice,
            CountMRPPrice += product.ProductMRP
        }
        )
        setAllProductMRP(CountMRPPrice)
        setAllProductSellingPrice(CountSellingPrice)
      })
      .catch(err => console.error(err));
  }, [])

  return <>
    <head>
      <title>Shopping Cart | Flipkart</title>
    </head>
    <Bread />
    <div className="Cart">
      <Paper className="Cart-left">
        <h2
          style={{
            maxWidth: "100%",
            height: '47px',
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "white",
            margin: "0px"
          }}
        >
          <ShoppingBagIcon color="primary"/> Cart
        </h2>
        {!Cart && <Stack spacing={1}>
          <Skeleton variant="rounded" height={140} />
          <Skeleton variant="rounded" height={140} />
          <Skeleton variant="rounded" height={140} />
        </Stack>}
        <div className="CartItemContainer">
          {Cart && Cart.map((product) =>
            <>
              <CatlogCard product={product} setCart={setCart} setAllProductSellingPrice={setAllProductSellingPrice} setAllProductMRP={setAllProductMRP} AllProductMRP={AllProductMRP} AllSellingPrice={AllSellingPrice} />

            </>
          )}
        </div>
        <div
          style={{
            width: "100%",
            background: "white",
            border: "1px solid grey",
            textAlign: "right",
            position: "sticky",
            height: "50px",
            bottom: "0px",
            display: "flex",
            justifyContent: "flex-end"
          }}
        ><Button size="small" variant="contained">Place Orders</Button></div>
      </Paper>

      <div className="Cart-Right">
        <h4 style={{ margin: "0px" }} >Price Details</h4>
        <Divider />
        {!Cart && AllProductMRP === 0 && <Stack spacing={3} mt={5}>
          <Skeleton height={20} />
          <Skeleton height={20} />
          <Skeleton height={20} />
          <Divider />
          <Skeleton height={30} />
          <Skeleton height={20} />
        </Stack>}
        {AllProductMRP !== 0 && <>
          <div className="Cart-RightDetails" ><h5 style={{ margin: "0px" }}>Prices({Cart.length})</h5><span>&#8377;{AllProductMRP}</span></div>
          <div className="Cart-RightDetails" ><h5 style={{ margin: "0px" }}>Discount</h5><span>&#8377;{AllProductMRP - AllSellingPrice}</span></div>
          <div className="Cart-RightDetails" ><h5 style={{ margin: "0px" }}>Delivery Charges</h5><span>Free</span></div>
          <Divider />
          <div className="Cart-RightDetails" ><h3 style={{ margin: "0px" }}>Prices({Cart.length})</h3><h3 style={{ margin: "0px" }}>&#8377;{AllSellingPrice}</h3></div>
          <Divider />
          <h4>Yoy will save &#8377;{AllProductMRP - AllSellingPrice} in this order</h4>
        </>}
      </div>
    </div>
  </>
}