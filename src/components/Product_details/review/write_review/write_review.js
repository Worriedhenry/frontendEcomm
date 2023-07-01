import React from "react"
import Left from "./Left"
import Right from "./right"
import { Grid } from "@mui/material";
function Write_review(){
    return(
        <Grid container style={{backgroundcolor:"#f1f3f6"}}>
            <Grid md={12} item style={{marginLeft:"15px",padding:"2px 4px 2px 6px" ,fontSize:"32px" ,border:"4px solid #f0f0f0",borderBottom:"4px solid #f0f0f0" ,marginTop:"10px" }} >
                <span style={{padding:"24px",textAlign:"center" }}>Reviews & Ratings</span>
            </Grid>
            <Grid md={12} container alignItems="center" style={{display:"flex"}}>
                <Grid md={3} xs={8} item>
                    <Left />
                </Grid>
                <Grid md={8} xs={12} item>
                    <Right/>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default Write_review;