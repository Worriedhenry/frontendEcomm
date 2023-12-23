import { Divider, Button, Rating, Stack, Skeleton,styled } from "@mui/material"
import Bread from "./BreadCrimb"
import {AuthContext} from "../../Context/AuthContext"
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import React, { useEffect, useState,useContext } from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import {useNavigate, useParams} from "react-router-dom"
import axios from "axios";
import { StyledButton } from "../UtlityComponents/HeaderStyledElement";
import { CartContext } from "../../Context/CartContext";
import { Img } from "../UtlityComponents/StyledImage";
import emptycart from "./emptycart.png"
import BackendLink from "../../data_resourses/BackendLink";
// import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
const StyTypo= styled(Typography)(({ theme }) => ({
  fontSize:"small",
  fontWeight:"500",
  [theme.breakpoints.down('sm')]: {
    fontSize:"0.5em", 
    whiteSpace:"nowrap",
  textOverflow:"ellipsis",
  overflow:"hidden"
  },
}));
const TitleTypo= styled(Typography)(({ theme }) => ({
  fontSize:"1.5em",
  fontWeight:"bold",
  [theme.breakpoints.down('sm')]: {
    fontSize:"1em", 
    whiteSpace:"nowrap",
  textOverflow:"ellipsis",
  overflow:"hidden"
  },
}));
const SellingPriceTypo= styled(Typography)(({ theme }) => ({
  fontSize:"large",
  fontWeight:"500",
  whiteSpace:"nowrap",
  textOverflow:"ellipsis",
  [theme.breakpoints.down('sm')]: {
    fontSize:"0.8em", 
    whiteSpace:"nowrap",
  textOverflow:"ellipsis",
  overflow:"hidden",
  fontWeight:"bold",
  },
}));
  
function CatlogCard({ product, setCart, AllProductMRP, setAllProductMRP, AllSellingPrice, setAllProductSellingPrice }){
  const {UserId}=useParams()
  const RemoveProductFromCart = async () => {
    let res = await axios.put(BackendLink+"/RemoveProductFromCart/"+ UserId+"/"+ product._id, { user: localStorage.getItem("user") })
    setAllProductSellingPrice(AllSellingPrice - product.ProductSellingPrice)
    setAllProductMRP(AllProductMRP - product.ProductMRP)
    setCart(res.data)

  }
  return (
    <Paper
    elevation={3}
    sx={{
      margin:"5px"
    }}
    >
      <Grid container md={11.5} xs={11.5} alignItems="center">
        <Grid item md={2} sm={2.5} xs={3} height="fit-content">
          <ButtonBase>
            <Img  src={product.ProductImages[0]} />
          </ButtonBase>
        </Grid>
        <Grid item p={1} container md={8} sm={8.5}  xs={9}alignItems="flex-start">
          <Grid md={12} xs={12} item>
            <SellingPriceTypo>
            {product.ProductTitle}
            </SellingPriceTypo >
              <StyTypo  m="auto" sx={{display:"flex",alignItems:"center"}}><Rating readOnly size="small" defaultValue={product.ProductNumericalRating
} precision={0.5} name="size-small" /> &nbsp;Rating & {product?.reviews.length} Reviews</StyTypo>
          </Grid>
          <Grid item md={12} xs={12} container alignItems="center">
            <Grid item >
            <SellingPriceTypo>&#8377; {product.ProductSellingPrice}</SellingPriceTypo>
             <StyTypo><strike>&#8377;{product.ProductMRP}</strike> {((product.ProductMRP * 100 - product.ProductSellingPrice * 100) / product.ProductMRP).toFixed(2)} % off</StyTypo>
             </Grid> 
          </Grid>
          <Grid item>
          <Button style={{ margin: "5px" }} onClick={RemoveProductFromCart} size="small" variant='contained' color="error"><StyTypo>Remove</StyTypo></Button>
          </Grid>
        </Grid>

      </Grid>
    </Paper>
    // <Paper
    //   elevation={3}
    //   sx={{
    //     p: 2,
    //     margin: 1,
    //     maxWidth: "100%",
    //     flexGrow: 1,
    //     backgroundColor: (theme) =>
    //       theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    //   }}
    // >
    //   <Grid container spacing={2}>
    //     <Grid item md={2} sm={2} xs={2}>
    //       <ButtonBase>
    //         <Img alt="complex" src={product.ProductImages[0]} />
    //       </ButtonBase>
    //     </Grid>
    //     <Grid item md={10} sm xs={10} container>
    //       <Grid item xs={10} sm={10} md={10} container direction="column" spacing={2}>
    //         <Grid item md={10} xs={8} >
    //           <SellingPriceTypo gutterBottom style={{ fontWeight: "bold",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden" }} variant="h3.heading" component="div">
    //             {product.ProductTitle}
    //           </SellingPriceTypo>
    //           <StyTypo variant="subtitle2" gutterBottom>
    //             <div style={{ marginTop: "-1px", display: "flex", fontSize: "13px" }}><span style={{ color: "#838484" }}><Rating readOnly size="small" defaultValue={4} precision={0.5} name="size-small" />
    //               <span>&nbsp; {product?.rating} Rating&nbsp; & {product?.reviews.length} Reviews &nbsp;</span></span></div>
    //           </StyTypo>
    //           <div>
    //             <SellingPriceTypo>
    //             <span>&#8377; {product.ProductSellingPrice}</span><span style={{ marginLeft: "10px", color: "#838383" }}><strike>&#8377;{product.ProductMRP}</strike></span><span style={{ marginLeft: "10px", color: "#30B131" }}>{((product.ProductMRP * 100 - product.ProductSellingPrice * 100) / product.ProductMRP).toFixed(2)} % off</span></SellingPriceTypo>
    //           </div>
    //         </Grid>
    //         <Grid item spacing={2} xs={2} md={2}>
    //           {/* <Button variant='contained' size='small'>Save For Later</Button> */}
    //           {/* <Button variant='contained' size='small' color="error">Remove</Button> */}
    //           <Button style={{ margin: "5px" }} onClick={RemoveProductFromCart} size="small" variant='contained' color="error">  Remove</Button>
    //         </Grid>
    //       </Grid>
    //       <Grid item md={2} xs={2}>
    //         <StyTypo style={{ background: "green", borderRadius: "5px", color: "white", padding: "5px 7.5px", margin: "5px 1px" }}>{product.quantity > 0 ? "In Stock" : "Out Of Stock"}</StyTypo>
    //       </Grid>
    //     </Grid>
    //   </Grid>
    // </Paper>
  );
}
export default function Cart() {
  const navigate=useNavigate()
  const [Cart, setCart] = useState(false)
  const [AllProductMRP, setAllProductMRP] = useState(0)
  const [AllSellingPrice, setAllProductSellingPrice] = useState(0)
  const params=useParams()
  const {setProducts} = React.useContext(CartContext)
  const {Valid}=React.useContext(AuthContext)

  const PlaceOrder=async ()=>{
    navigate("/buyproduct")
  }

  useEffect(() => {
    var CountSellingPrice = 0
    var CountMRPPrice = 0
    var ProductIds=[]
    axios
      .get(BackendLink+"/getcart/"+params.UserId)
      .then(res => {
        setCart(res.data)

        res.data.map((product) => {
          CountSellingPrice += product.ProductSellingPrice,
            CountMRPPrice += product.ProductMRP
          ProductIds.push(product._id)
        }
        )
        setProducts(res.data)
        setAllProductMRP(CountMRPPrice)
        setAllProductSellingPrice(CountSellingPrice)
      })
      .catch(err => console.error(err));
  }, [])

  return <>
    <head>
      <title>Shopping Cart | Fastkart</title>
    </head>
    <Grid container spacing={2} justifyContent="center" className="Cart">
      <Grid  item md={8} sm={8} xs={12}  mr={1}>
      <Paper >
        <TitleTypo
          style={{
            maxWidth: "100%",
            height: '47px',
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "white",
            margin: "0px",
            fontWeight:"bold"
          }}
        >
          <ShoppingBagIcon color="primary"/> Cart
        </TitleTypo>
        {!Cart && <Stack spacing={1}>
          <Skeleton variant="rounded" height={140} />
          <Skeleton variant="rounded" height={140} />
          <Skeleton variant="rounded" height={140} />
        </Stack>}
        <div style={{height:"73vh",overflow:"scroll"}} className="CartItemContainer">
          {Cart && Cart.length>0 ? Cart.map((product) =>
            <>
              <CatlogCard product={product} setCart={setCart} setAllProductSellingPrice={setAllProductSellingPrice} setAllProductMRP={setAllProductMRP} AllProductMRP={AllProductMRP} AllSellingPrice={AllSellingPrice} />

            </>
          )
          :
          <div style={{justifyContent:"center"}}> <img style={{margin:"auto" ,marginLeft:"30%" ,maxWidth:"40%" ,marginTop:"10vh"}} src={emptycart}></img></div>
        
        }
        </div>
        <div
          style={{
            width: "100%",
            background: "white",
            border: "1px solid grey",
            textAlign: "right",
            position: "sticky",
            bottom: "0px",
            display: "flex",
            justifyContent: "flex-end"
          }}
        ><StyledButton disabled={Cart.length==0} size="large" onClick={PlaceOrder} variant="contained">Place Orders</StyledButton></div>
      </Paper>
      </Grid>
      <Grid md={3} sm={3} height={240} item className="Cart-Right">
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
        <Grid item container mt={2} >
          <Grid item sm={6} md={6} xs={6}>
            <StyTypo sx={{fontWeight:"bold"}} textAlign="left">
              Prices({Cart.length})
            </StyTypo>
          </Grid>
          <Grid item sm={6} md={6} xs={6}>
            <StyTypo sx={{fontWeight:"bold"}}  textAlign="right">
            &#8377;{AllProductMRP}
            </StyTypo>
          </Grid>
        </Grid>
        <Grid item container mt={2}>
          <Grid item sm={6} md={6} xs={6}>
            <StyTypo sx={{fontWeight:"bold"}} textAlign="left">
              Discount
            </StyTypo>
          </Grid>
          <Grid item sm={6} md={6} xs={6}>
            <StyTypo sx={{fontWeight:"bold"}}  textAlign="right">
            &#8377;{AllProductMRP - AllSellingPrice}
            </StyTypo>
          </Grid>
        </Grid>
        <Grid item container mt={2}>
          <Grid item sm={6} md={6} xs={6}>
            <StyTypo sx={{fontWeight:"bold"}} textAlign="left">
              Delivery
            </StyTypo>
          </Grid>
          <Grid item sm={6} md={6} xs={6}>
            <StyTypo sx={{fontWeight:"bold"}}  textAlign="right">
            Free
            </StyTypo>
          </Grid>
        </Grid>
        <Grid item container mt={2} height={40}>
          <Grid item md={12} xs={12}><Divider/></Grid>
          <Grid item sm={6} md={6} xs={6}>
            <StyTypo sx={{fontWeight:"bold"}} textAlign="left">
              Price
            </StyTypo>
          </Grid>
          <Grid item sm={6} md={6} xs={6} >
            <StyTypo sx={{fontWeight:"bold",height:"100%"}}  textAlign="right">
            &#8377;{AllSellingPrice}
            </StyTypo>
          </Grid>
        </Grid>
        <Grid>
        <Grid item md={12} xs={12} ><Divider/></Grid>
        <StyTypo sx={{fontWeight:"bold"}}>
        You will save &#8377;{AllProductMRP - AllSellingPrice} in this order
        </StyTypo>
        </Grid>
          </>}
        
          {/* <div className="Cart-RightDetails" ><h5 style={{ margin: "0px" }}>Prices({Cart.length})</h5><span>&#8377;{AllProductMRP}</span></div>
          <div className="Cart-RightDetails" ><h5 style={{ margin: "0px" }}>Discount</h5><span>&#8377;{AllProductMRP - AllSellingPrice}</span></div>
          <div className="Cart-RightDetails" ><h5 style={{ margin: "0px" }}>Delivery Charges</h5><span>Free</span></div>
          <Divider />
          <div className="Cart-RightDetails" ><h3 style={{ margin: "0px" }}>Prices({Cart.length})</h3><h3 style={{ margin: "0px" }}>&#8377;{AllSellingPrice}</h3></div>
          <Divider />
          <h4>You will save &#8377;{AllProductMRP - AllSellingPrice} in this order</h4> */}
      </Grid>
    </Grid>
  </>
}