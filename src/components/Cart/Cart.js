import { Button, Divider } from "@mui/material"
import React from "react"
import Data from "../../data_resourses/nav_data"

function CartCard() {
    return <div style={{ display: "flex", height: "239px", background: "white" }}>
        <img src={Data[0].url} style={{ width: "fit-content" }} alt=""></img>
        <div className="">
            <h4>{Data[0].text}</h4>
            <p className="Specification" style={{ margin: "0px", padding: "0px" }}>12GB RAM </p>
            <p className="seller">Seller:RANDIYON KA DHABA</p>
            <p><span style={{ textDecoration: "line-through", marginRight: "10px" }}>1,37,000 </span><h3 style={{ display: "inline" }}>95,000/-</h3></p>
            <p color="green">Available</p>
            <Button variant="outlined">Save for later</Button>
            <Button variant="outlined">Remove</Button>
            <Divider />
        </div>
    </div>
}
export default function Cart() {



    return <div className="Cart">
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
                    padding:"5px 10px"
                }}
            >
                From saved address
                <Button>Enter Delivery pincode</Button>
            </div>
            <CartCard />
            <Divider />
            <CartCard />
            <div
                style={{
                    width: "100%",
                    background: "white",
                    textAlign: "right"
                }}
            ><Button variant="contained">Place Orders</Button></div>
        </div>
        <div className="Cart-Right">
                <h4 style={{margin:"0px"}} >Price Details</h4>
                <Divider />
                <div className="Cart-RightDetails" ><h5 style={{margin:"0px"}}>Prices(2)</h5><span>1,33,094</span></div>
                <div className="Cart-RightDetails" ><h5 style={{margin:"0px"}}>Discount</h5><span>-1,33,094</span></div>
                <div className="Cart-RightDetails" ><h5 style={{margin:"0px"}}>Delivery Charges</h5><span>Free</span></div>
                <Divider />
                <div className="Cart-RightDetails" ><h3 style={{margin:"0px"}}>Prices(2)</h3><h3 style={{margin:"0px"}}>1,33,094</h3></div>
                <Divider />
                <h4>Yoy will save a lot in this order</h4>
        </div>
    </div>
}