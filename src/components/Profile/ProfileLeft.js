import { Button, Divider, TextField ,Radio,FormControlLabel,RadioGroup} from "@mui/material"
import React, { useState,useEffect } from "react"
import Logo from "../Flip-Logo.jpg"
import InventoryIcon from '@mui/icons-material/Inventory';
import PersonIcon from '@mui/icons-material/Person';
import {useNavigate,useParams} from "react-router-dom"
import axios from "axios"
export default function ProFileLeft(props) {
    const navigate=useNavigate()
    const [Page,setPage]=useState(0)
    const [Name,setName]=useState("")
    const params=useParams()
    const UpdateP =(e)=>{
        setPage(e)
        props.UpdateParent(e)
    }
    useEffect(()=>{
        axios
          .get("http://localhost:3001/account/getuserInfo/"+params.UserId)
          .then(res => {
            setName(res?.data.FirstName)
          })
          .catch(err => console.error(err));
    },[]);

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
                    <p style={{ margin: "0px" }}><b>{Name}</b></p>
                </div>
            </div>

        </div>
        <div className="Profile-Offers">
            <Button
                onClick={()=> navigate("/account/orders")}
                startIcon={<InventoryIcon style={{ paddingRight: "30%" }} />}
                style={{ width: "100%", height: "48px", paddingRight: "30%" ,textTransform:"none"}}>
                My Orders
            </Button>

            <Divider />
            <Button onClick={(e)=>UpdateP(e.target.value)} value={0} style={{ width: "100%", paddingRight: "30%",backgroundColor:Page==0? "#29a0ed":"white",textTransform:"none",color:Page==0 ?"white" : "black",textAlign:"left" }}>
                Personal Info     
            </Button>
            <Button value={1} onClick={(e)=>UpdateP(e.target.value)} style={{ width: "100%", paddingRight: "30%",backgroundColor:Page==1? "#29a0ed":"white" ,textTransform:"none",color:Page==1 ?"white" : "black" }}>
                Manage Address
            </Button>



        </div>
    </div>

}