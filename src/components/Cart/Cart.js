import { Button, Divider, Link,Breadcrumbs,Typo } from "@mui/material"
import React, { useState } from "react"
import Data from "../../data_resourses/nav_data"
import Bread from "./BreadCrimb"
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';

function CartCard() {
    const [Assured,setAssured]=useState(true)
    return <div style={{ display: "flex", height: "173px", background: "white",padding:"10px" }}>

        <img src={Data[0].url} style={{ width: "fit-content"}} alt=""></img>
        <div  style={{paddingLeft:"35px"}}>
            <h4 style={{marginBottom:"5px"}}>{Data[0].text}</h4>
            <div style={{marginTop:"-1px",display:"flex",fontSize:"13px"}}><span style={{color:"#838484"}}><div style={{width:"28px",height:"15px",backgroundColor:"green" ,borderRadius:"0.2rem" ,color:"white" ,display:"inline",fontSize:"12px",padding:"2px"}}>4.4<StarOutlinedIcon style={{fontSize:"0.8rem"}}/></div>&nbsp; 52 Rating&nbsp; & 16 Reviews &nbsp;</span><span></span>{Assured ? <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" style={{width:"80px", marginLeft:"20px"}}/>:<></>}</div>
            <div>
                    <span style={{fontSize:"20px"}}>₹57,490</span><span style={{marginLeft:"10px" ,color:"#838383"}}><strike>₹60,995</strike></span><span style={{marginLeft:"10px",color:"#30B131"}}>5% off</span>
                </div>
            <p style={{color:"#838383"}}>Available</p>
            <Button variant="text">Save for later</Button>
            <Button variant="text">Remove</Button>
            <Divider />
        </div>
    </div>
}
export default function Cart() {


    return <>
    <Bread/>
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
                    padding:"5px 10px"
                }}
            >
                From saved address
                <Button>Enter Delivery pincode</Button>
            </div>
            <CartCard />
            <Divider />
            <CartCard />
            <Divider />
            <CartCard />
            <div
                style={{
                    width: "100%",
                    background: "white",
                    border:"1px solid grey",
                    textAlign: "right",
                    position:"sticky",
                    height:"50px",
                    bottom:"0px",
                    display:"flex"
                }}
            ><Button size="small" variant="contained">Place Orders</Button></div>
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
    </>
}