import { Button, Divider, styled,Typography} from "@mui/material"
import React, { useState,useEffect } from "react"
import Logo from "../Flip-Logo.jpg"
import { AuthContext } from "../../Context/AuthContext"
import {useNavigate,useParams} from "react-router-dom"
import axios from "axios"


  const StyledTypography = styled(Typography)(({ theme }) => ({
  
    [theme.breakpoints.down('sm')]: {
      fontSize:"8px", 
      padding:"1px",
      MaxWidth:"100%"
    },
  }));
export default function ProFileLeft(props) {
    const navigate=useNavigate()
    const [Page,setPage]=useState(0)
    const [Name,setName]=useState("")
    const params=useParams()
    const {Valid}=React.useContext(AuthContext)
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
        <div className="Profile-Offers">

            <Divider />
            <Button onClick={(e)=>UpdateP(e.target.value)} value={0} style={{ width: "100%", paddingRight: "30%",backgroundColor:Page==0? "#29a0ed":"white",textTransform:"none",color:Page==0 ?"white" : "black",textAlign:"left" }}>
                <StyledTypography>My Profile</StyledTypography>    
            </Button>

            <Button
                onClick={()=> navigate("/account/orders/"+Valid)}
                style={{ width: "100%", paddingRight: "30%" ,textTransform:"none",color:"black"}}>
                <StyledTypography>My Orders</StyledTypography>
            </Button>
            <Button
                onClick={()=> navigate("/viewcart/"+Valid)}
                style={{ width: "100%", paddingRight: "30%" ,textTransform:"none",
                color:"black"}}>
                <StyledTypography>My Cart</StyledTypography>
            </Button>


        </div>
    </div>

}