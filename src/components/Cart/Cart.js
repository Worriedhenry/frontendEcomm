import { Divider, Link, Breadcrumbs, Typo, Button, Rating, IconButton, Tooltip, CircularProgress, Snackbar, Alert } from "@mui/material"
import Data from "../../data_resourses/nav_data"
import Bread from "./BreadCrimb"
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import RefreshIcon from '@mui/icons-material/Refresh';
import ButtonBase from '@mui/material/ButtonBase';
import axios from "axios";
const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

function CatlogCard({ product,setCart,AllProductMRP, setAllProductMRP,AllSellingPrice, setAllProductSellingPrice }) {
  const RemoveProductFromCart=async ()=>{
    let res=await axios.put("http://localhost:3001/RemoveProductFromCart/"+product._id,{user:localStorage.getItem("user")})
    setAllProductSellingPrice(AllSellingPrice-product.ProductSellingPrice)
    setAllProductMRP(AllProductMRP-product.ProductMRP)
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
            <Img alt="complex" src="https://res.cloudinary.com/drmxw2cme/image/upload/v1680337482/samples/food/spices.jpg" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item >
              <Typography gutterBottom variant="h3.heading" component="div">
                {product.ProductTitle}
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                <div style={{ marginTop: "-1px", display: "flex", fontSize: "13px" }}><span style={{ color: "#838484" }}><Rating readOnly size="small" defaultValue={4} precision={0.5} name="size-small" />
                  <span>&nbsp; 128 Rating&nbsp; & 68 Reviews &nbsp;</span></span><span></span>{true ? <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" style={{ width: "80px", marginLeft: "20px" }} /> : <></>}</div>
              </Typography>
              <div>
                <span style={{ fontSize: "20px" }}>{product.ProductSellingPrice}</span><span style={{ marginLeft: "10px", color: "#838383" }}><strike>{product.ProductMRP}</strike></span><span style={{ marginLeft: "10px", color: "#30B131" }}>{(product.ProductMRP * 100 - product.ProductSellingPrice * 100) / product.ProductMRP}% off</span>
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
  
  useEffect(() => {
    var CountSellingPrice=0
    var CountMRPPrice=0
    axios
      .get("http://localhost:3001/getcart")
      .then(res => {
        setCart(res.data)
        res.data.map((product)=>{
            CountSellingPrice+= product.ProductSellingPrice,
            CountMRPPrice+=product.ProductMRP}
        )
        setAllProductMRP(CountMRPPrice)
        setAllProductSellingPrice(CountSellingPrice)
      })
      .catch(err => console.error(err));
  },[])

  return <>
    <head>
      <title>Shopping Cart | Flipkart</title>
    </head>
    <Bread />
    <div className="Cart">


      <div className="Cart-left">
        <div
          style={{
            maxWidth: "100%",
            height: '47px',
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "white",
            marginBottom: "15px",
            padding: "5px 10px"
          }}
        >
          From saved address
          <Button>Enter Delivery pincode</Button>
        </div>
        {Cart && Cart.map((product) =>
          <>
            <CatlogCard product={product} setCart={setCart} setAllProductSellingPrice={setAllProductSellingPrice} setAllProductMRP={setAllProductMRP} AllProductMRP={AllProductMRP} AllSellingPrice={AllSellingPrice} />
            
          </>
        )}
        <div
          style={{
            width: "100%",
            background: "white",
            border: "1px solid grey",
            textAlign: "right",
            position: "sticky",
            height: "50px",
            bottom: "0px",
            display: "flex"
          }}
        ><Button size="small" variant="contained">Place Orders</Button></div>
      </div>

      <div className="Cart-Right">
        <h4 style={{ margin: "0px" }} >Price Details</h4>
        <Divider />
        {AllProductMRP!==0 && <>
        <div className="Cart-RightDetails" ><h5 style={{ margin: "0px" }}>Prices({Cart.length})</h5><span>&#8377;{AllProductMRP}</span></div>
        <div className="Cart-RightDetails" ><h5 style={{ margin: "0px" }}>Discount</h5><span>&#8377;{AllProductMRP-AllSellingPrice}</span></div>
        <div className="Cart-RightDetails" ><h5 style={{ margin: "0px" }}>Delivery Charges</h5><span>Free</span></div>
        <Divider />
        <div className="Cart-RightDetails" ><h3 style={{ margin: "0px" }}>Prices(2)</h3><h3 style={{ margin: "0px" }}>&#8377;{AllSellingPrice}</h3></div>
        <Divider />
        <h4>Yoy will save &#8377;{AllProductMRP-AllSellingPrice} in this order</h4>
        </>}
      </div>
    </div>
  </>
}