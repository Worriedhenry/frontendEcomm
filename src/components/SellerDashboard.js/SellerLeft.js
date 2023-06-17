import { Button, Divider,styled,Typography} from "@mui/material"
import React from "react"
import Logo from "../Flip-Logo.jpg"
import PersonIcon from '@mui/icons-material/Person';
import {useNavigate,useParams} from "react-router-dom"

const StyledTypography = styled(Typography)(({ theme }) => ({
  
    [theme.breakpoints.down('sm')]: {
      fontSize:"8px", 
      padding:"1px",
      MaxWidth:"100%"
    },
  }));
export default function SellerLeft({path}) {
    const navigate=useNavigate()
    const SellerId=useParams().SellerId
    
    return <div className="Profile-left">
        <div className="profile-Greeting" >
            <div
                style={{ display: "flex" }}
            >
                <img style={{ width: "50px", borderRadius: "50%", marginRight: "16px" }} src={Logo} />
                <div>
                    <p
                        style={{ margin: "0px" }}
                    ><b>Hello,</b></p>
                    <p style={{ margin: "0px" }}><b>UserName</b></p>
                </div>
            </div>

        </div>
        <div className="Profile-Offers">
            <Divider />
            <p style={{ display: "flex", alignItem: "center" }}>
                <PersonIcon />  Account Settings
            </p>
            <Divider />
            <Button onClick={(e)=>navigate("/admin/info/"+SellerId)} style={{ width: "100%", paddingRight: "30%",backgroundColor:path=="info"? "#29a0ed":"white",textTransform:"none",color:path=="info" ?"white" : "black",textAlign:"left" }}>
                <StyledTypography>Seller Info </StyledTypography>    
            </Button>

            <Button onClick={(e)=>navigate("/admin/catlog/"+SellerId)} style={{ width: "100%", paddingRight: "30%",backgroundColor:path=="catlog"? "#29a0ed":"white" ,textTransform:"none",color:path=="catlog" ?"white" : "black" }}>
                <StyledTypography> Manage Products</StyledTypography>
            </Button>

            <Button onClick={(e)=>navigate("/admin/addproduct/"+SellerId)} style={{ width: "100%", paddingRight: "30%",backgroundColor:path=="addproduct"? "#29a0ed":"white" ,textTransform:"none",color:path=="addproduct" ?"white" : "black",textAlign:"left" }}>
                <StyledTypography>Add Product</StyledTypography>
            </Button>
            
        </div>
    </div>

}