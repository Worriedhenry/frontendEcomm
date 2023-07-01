import { Divider, Button, Rating, Grid, Stack, Skeleton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import ButtonBase from '@mui/material/ButtonBase';
import axios from 'axios';
import { useSearchParams ,useNavigate} from "react-router-dom"

const StyTypo= styled(Typography)(({ theme }) => ({
    fontSize:"small",
    fontWeight:"500",
    [theme.breakpoints.down('sm')]: {
      fontSize:"0.5em", 
    },
  }));
const SellingPriceTypo= styled(Typography)(({ theme }) => ({
    fontSize:"large",
    fontWeight:"500",
    [theme.breakpoints.down('sm')]: {
      fontSize:"0.8em", 
    },
  }));
    
const StyledGrid= styled(Grid)(({ theme }) => ({
    height:"11vw",
    [theme.breakpoints.down('sm')]: {
      height:"20vw", 
    },
  }));
    
const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});
function CatlogCard({ product }) {
  const navigate=useNavigate()
  return (
    <>
    <head>
            <title>Flipkart</title>
        </head>
    <Paper
      elevation={3}
      style={{cursor:"pointer"}}
      onClick={()=>navigate("/viewproduct/"+product._id)}
      sx={{
        p: 2,
        margin: 1,
        maxWidth: 1200,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <StyledGrid container height="10vw" spacing={2}>
        <Grid item height="100%" container justifyContent="center" sm={3} xs={3}>
          <ButtonBase sx={{ width: 200, height: 200,maxHeight:"100%",maxWidth:"100%" }}>
            <Img alt="complex" src={product.ProductImages[0]} />
          </ButtonBase>
        </Grid>
        <Grid item xs={9} sm={9} container>
          <Grid item xs={9} sm={8} sx={{maxHeight:"45vh"}} direction="column" container>
              <SellingPriceTypo className='truncate' gutterBottom sx={{fontSize:"large",fontWeight:"bold"}} variant="h3.heading" component="h2">
                {product.ProductTitle}
              </SellingPriceTypo>
              <StyTypo className='TypoGraphy-Truncate' sx={{fontSize:"larger"}} variant="subtitle2" gutterBottom>
                <div
                className='TypoGraphy-Truncate'
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "center",
                    fontSize:"medium"
                  }}
                >
                  <Rating readOnly size="small" defaultValue={product.ProductNumericalRating} precision={0.5}  />
                  &nbsp;<StyTypo> {product.ProductNumericalRating} rating & {product.reviews.length} reviews</StyTypo>
                </div>
              </StyTypo>
              <StyTypo className='truncate' variant='subtitle2' component="h5">
                {product.ProductDescription}
              </StyTypo>
          </Grid>
          <Grid item  sm={4}>
            <SellingPriceTypo style={{fontWeight:"bold"}} variant='h2.heading' component="h2" >
              &#8377; {product.ProductSellingPrice}
            </SellingPriceTypo>
            <div
              style={{
                fontSize: "12px",
                margin: "6px 0px"
              }}
            >
              <StyTypo style={{fontWeight:"bold"}}><strike>&#8377; {product.ProductMRP}</strike> &nbsp; {((product.ProductMRP - product.ProductSellingPrice) * 100 / product.ProductMRP).toFixed(2)}%</StyTypo>
            </div>
            <StyTypo style={{ marginTop: "0px",color:"green" }}>
              Free Delivery
              </StyTypo>

          </Grid>
        </Grid>
      </StyledGrid>
    </Paper></>
  );
}
export default function SearchProduct() {
  const [SearchResult, setSearchResult] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()
  
  useEffect(() => {
    axios
      .get("http://localhost:3001/search?query=" + searchParams.get("query"))
      .then(res => {
        setSearchResult(res.data.SearchResult)
          
      })
      .catch(err => console.error(err));
  }, [searchParams, setSearchParams])

  return <Grid container
    style={{
      display: "flex",
      // padding: "7px",
      justifyContent:"center",
      backgroundColor:"#f3f0f0"
    }}
  > <Grid xs={0} md={2} item>
    <Paper
      className='SearchProduct-Filters'
      style={{
        // padding: "20px",
        minHeight:"83vh"
      }}
    >
      {SearchResult &&<h3 style={{textAlign:"center"}}>Filter</h3>}
      <Skeleton height={50} />
      <Divider />
      <Stack spacing={5}>
        <Skeleton  />
        <Skeleton  />
        <Skeleton  />
        <Skeleton  />
        <Skeleton  />
        <Skeleton  />
      </Stack>
    </Paper>
    </Grid>
    <Grid xs={11.5} md={10}  item>
    <Paper
      style={{
        margin: "0px 0px 0px 11px"
      }}
    >

      { SearchResult && <h3 style={{textAlign:"center",fontSize:"large"}}>Found {SearchResult.length} results for "{searchParams.get("query")}"</h3>}
      { !SearchResult && <Skeleton  height={60}/>}
      <Divider />
      {!SearchResult &&<Stack spacing={1}>
        <Skeleton mt={0} height={250} />
        <Skeleton height={250} />
      </Stack>}
      { SearchResult && SearchResult.length==0 && <div
        style={{
          height: "88vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>No Product Found for "{searchParams.get("query")}". Try any other name or cheak the spelling</div>}
      {SearchResult && SearchResult.map((product, index) => <><CatlogCard product={product} /><Divider /></>)}
    </Paper>
    </Grid>
  </Grid>
}