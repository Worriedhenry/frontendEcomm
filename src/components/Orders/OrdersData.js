import {Divider, Link,Breadcrumbs,Typo ,Button, Rating, IconButton, Tooltip, CircularProgress, Snackbar,Alert} from "@mui/material"
import Data from "../../data_resourses/nav_data"

import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import RefreshIcon from '@mui/icons-material/Refresh';
import ButtonBase from '@mui/material/ButtonBase';
import SearchIcon from '@mui/icons-material/Search';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });
function Preview({src,des}){
    return <div className="OrdersPreview">
    <img style={{width:"80px"}} src={src} alt="" />
    <div style={{width:"380px"}} > 
        <h4>{des}</h4>
        <p>Color:#00000</p>
    </div>
    <h3 style={{width:"169px"}}>₹999</h3>
    <div>
        <h5>Order Satus</h5>
        <p>You Requested the order but canceled</p>
    </div>
</div>

}
function CatlogCard() {

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
                  Shoes
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  <div style={{ marginTop: "-1px", display: "flex", fontSize: "13px" }}><span style={{ color: "#838484" }}><Rating readOnly size="small" defaultValue={4} precision={0.5} name="size-small" />
                    <span>&nbsp; 128 Rating&nbsp; & 68 Reviews &nbsp;</span></span><span></span>{true ? <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" style={{ width: "80px", marginLeft: "20px" }} /> : <></>}</div>
                </Typography>
                <div>
                    <span style={{fontSize:"20px"}}>₹57,490</span><span style={{marginLeft:"10px" ,color:"#838383"}}><strike>₹60,995</strike></span><span style={{marginLeft:"10px",color:"#30B131"}}>5% off</span>
                </div>
              </Grid>
              <Grid item spacing={2}>
                <Button variant='contained' size='small'>Save For Later</Button>
                {/* <Button variant='contained' size='small' color="error">Remove</Button> */}
                <Button style={{ margin: "5px" }} size="small"  variant='contained' color="error">  Remove</Button>
              </Grid>
            </Grid>
            <Grid item>
              <p style={{ background: "green", borderRadius: "5px", color: "white", padding: "5px 7.5px", margin: "5px 1px" }}>Arriving Soon</p>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    );
  }
export default function OrdersRight(){


    return <div className="Orders-Right">
        <input placeholder="Search Your Orders Here" className="SearchOrder"  />
        <Button startIcon={<SearchIcon />} variant="contained">Search Orders</Button>
        {Data.map((e)=>
        <CatlogCard src={e.url} des={e.text} />
        )}    
        
    
    
    
    </div>
}