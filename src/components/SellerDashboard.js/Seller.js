import { Grid } from "@mui/material"
import React, { useState } from "react"
import SellerLeft from "./SellerLeft";
import SellerInfo from "./SellerInfo";
import SellerCatlog from "./SellerCatlog";
import AddProduct from "./SellerAddProduct";
import { useLocation } from "react-router-dom"
export default function SellerProfile() {
  const location = useLocation()
  const pathSegments = location.pathname.split('/');
  const [, category, path] = pathSegments;

  console.log(category);
  return <Grid spacing={2} container style={{ background: "#f3f0f0", display: "flex", padding: "14px 3vw" }} >
    <Grid position="sticky" top="11vh" xs={4} sm={3} md={2.5} item>
      <SellerLeft path={path} />
    </Grid>
    <Grid xs={8} sm={8} md={8.5} item>
      {path == "info" && <SellerInfo />}
      {path == "catlog" && <SellerCatlog />}
      {path == "addproduct" && <AddProduct />}
    </Grid>
  </Grid>


}