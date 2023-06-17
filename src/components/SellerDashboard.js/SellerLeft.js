import { Button, Divider} from "@mui/material"
import React from "react"
import Logo from "../Flip-Logo.jpg"
import PersonIcon from '@mui/icons-material/Person';
import {useNavigate,useParams} from "react-router-dom"
export default function SellerLeft({page}) {
    const navigate=useNavigate()
    const SellerId=useParams().SellerId
    
    return <div className="Profile-left">
        <div className="profile-Greeting" >
            <div
                style={{ display: "flex" }}
            >
                <img style={{ width: "50px", borderRadius: "50%", height: "50px", marginRight: "16px" }} src={Logo} />
                <div>
                    <p
                        style={{ margin: "0px" }}
                    ><b style={{ fontSize: "13px" }}>Hello,</b></p>
                    <p style={{ margin: "0px" }}><b>UserName</b></p>
                </div>
            </div>

        </div>
        <div className="Profile-Offers">
            <Divider />
            <p style={{ width: "100%", padding: " 0px 42px", display: "flex", alignItem: "center" }}>
                <PersonIcon />  Account Settings
            </p>
            <Divider />
            <Button onClick={(e)=>navigate("/admin/info/"+SellerId)} style={{ width: "100%", paddingRight: "30%",backgroundColor:page==0? "#29a0ed":"white",textTransform:"none",color:page==0 ?"white" : "black",textAlign:"left" }}>
                Seller Info     
            </Button>

            <Button onClick={(e)=>navigate("/admin/catlog/"+SellerId)} style={{ width: "100%", paddingRight: "30%",backgroundColor:page==1? "#29a0ed":"white" ,textTransform:"none",color:page==1 ?"white" : "black" }}>
                Manage Products
            </Button>

            <Button onClick={(e)=>navigate("/admin/addproduct/"+SellerId)} style={{ width: "100%", paddingRight: "30%",backgroundColor:page==2? "#29a0ed":"white" ,textTransform:"none",color:page==2 ?"white" : "black",textAlign:"left" }}>
                Add Product
            </Button>
            
        </div>
    </div>

}