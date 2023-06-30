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
      <Grid container spacing={2}>
        <Grid item  container justifyContent="center" sm={3}>
          <ButtonBase sx={{ width: 200, height: 200 }}>
            <Img alt="complex" src={product.ProductImages[0]} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm={9} container>
          <Grid item xs sm={8} sx={{maxHeight:"45vh"}} container direction="column" spacing={2}>
              <Typography gutterBottom sx={{fontSize:"large"}} variant="h3.heading" component="h2">
                {product.ProductTitle}
              </Typography>
              <Typography className='TypoGraphy-Truncate' sx={{fontSize:"larger"}} variant="subtitle2" gutterBottom>
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
                  &nbsp; {product.ProductNumericalRating} rating & {product.reviews.length} reviews
                </div>
              </Typography>
              <Typography className='TypoGraphy-Truncate' sx={{height:"45%"}} variant='subtitle2' component="h5">
                {product.ProductDescription}
              </Typography>
          </Grid>
          <Grid item  sm={4}>
            <Typography sx={{fontSize:"large"}} variant='h2.heading' component="h2" >
              &#8377; {product.ProductSellingPrice}
            </Typography>
            <div
              style={{
                fontSize: "12px",
                margin: "6px 0px"
              }}
            >
              <strike>&#8377; {product.ProductMRP}</strike> &nbsp; {((product.ProductMRP - product.ProductSellingPrice) * 100 / product.ProductMRP).toFixed(2)}%
            </div>
            <h5 style={{ marginTop: "0px",color:"green" }}>
              Free Delivery
            </h5>

          </Grid>
        </Grid>
      </Grid>
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