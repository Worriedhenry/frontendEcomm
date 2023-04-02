import { Button, Divider, TextField ,Radio,FormControlLabel,RadioGroup} from "@mui/material"
import React, { useState } from "react"
import Logo from "../Flip-Logo.jpg"
import InventoryIcon from '@mui/icons-material/Inventory';
import PersonIcon from '@mui/icons-material/Person';

export default function ProFileLeft(props) {

    const [Page,setPage]=useState(0)
    const UpdateP =(e)=>{
        setPage(e)
        props.UpdateParent(e)
    }
    const ButtonStyle={}
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
            <Button
                startIcon={<InventoryIcon style={{ paddingRight: "30%" }} />}
                style={{ width: "100%", height: "48px", paddingRight: "30%" ,textTransform:"none"}}>
                My Orders
            </Button>

            <Divider />
            <p style={{ width: "100%", padding: " 0px 42px", display: "flex", alignItem: "center" }}>
                <PersonIcon />  Account Settings
            </p>
            <Divider />
            <Button onClick={(e)=>UpdateP(e.target.value)} value={0} style={{ width: "100%", paddingRight: "30%",backgroundColor:Page==0? "#29a0ed":"white",textTransform:"none",color:Page==0 ?"white" : "black",textAlign:"left" }}>
                Personal Info     
            </Button>

            <Button value={1} onClick={(e)=>UpdateP(e.target.value)} style={{ width: "100%", paddingRight: "30%",backgroundColor:Page==1? "#29a0ed":"white" ,textTransform:"none",color:Page==1 ?"white" : "black" }}>
                Manage Address
            </Button>

            <Button value={2} onClick={(e)=>UpdateP(e.target.value)} style={{ width: "100%", paddingRight: "30%",backgroundColor:Page==2? "#29a0ed":"white" ,textTransform:"none",color:Page==2 ?"white" : "black",textAlign:"left" }}>
                PAN Details
            </Button>
            <Divider />
            <p style={{ width: "100%", padding: " 0px 42px", display: "flex", alignItem: "center",textTransform:"none" }}>
                <PersonIcon color="primary" />  Payment
            </p>
            <Divider />
            <Button value={3} onClick={(e)=>UpdateP(e.target.value)} style={{ width: "100%", paddingRight: "30%",backgroundColor:Page==3? "#29a0ed":"white" ,textTransform:"none",color:Page==3 ?"white" : "black",textAlign:"left" }}>
                Gift Card
            </Button>

            <Button value={4} onClick={(e)=>UpdateP(e.target.value)} style={{ width: "100%", paddingRight: "30%",backgroundColor:Page==4? "#29a0ed":"white" ,textTransform:"none",color:Page==4 ?"white" : "black" }}>
                Saved UPI
            </Button>

            <Button value={5} onClick={(e)=>UpdateP(e.target.value)} style={{ width: "100%", paddingRight: "30%",backgroundColor:Page==5? "#29a0ed":"white" ,textTransform:"none",color:Page==5 ?"white" : "black",textAlign:"left" }}>
                Saved Cards
            </Button>
            <Divider /><p style={{ width: "100%", padding: " 0px 42px", display: "flex", alignItem: "center",textTransform:"none" ,textAlign:"left"}}>
                <PersonIcon />  My Stuff
            </p>
            <Divider />
            <Button value={6} onClick={(e)=>UpdateP(e.target.value)} style={{ width: "100%", padding: "0px 30%",backgroundColor:Page==6? "#29a0ed":"white" ,textTransform:"none",color:Page==6 ?"white" : "black",textAlign:"left" ,justifyContent:"left"}}>
                My Orders
            </Button>

            <Button value={7} onClick={(e)=>UpdateP(e.target.value)} style={{ width: "100%", paddingRight: "30%",backgroundColor:Page==7? "#29a0ed":"white" ,textTransform:"none",color:Page==7 ?"white" : "black",textAlign:"left" }}>
                My Orders
            </Button>

            <Button value={8} onClick={(e)=>UpdateP(e.target.value)} style={{ width: "100%", paddingRight: "30%",backgroundColor:Page==8? "#29a0ed":"white" ,textTransform:"none",color:!Page==8 ?"white" : "black",textAlign:"left" }}>
                My Orders
            </Button>

        </div>
    </div>

}