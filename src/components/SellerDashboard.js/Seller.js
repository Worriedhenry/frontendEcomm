import { Button, Divider, TextField ,Radio,FormControlLabel,RadioGroup} from "@mui/material"
import React, { useEffect, useState } from "react"
import Logo from "../Flip-Logo.jpg"
import InventoryIcon from '@mui/icons-material/Inventory';
import PersonIcon from '@mui/icons-material/Person';
import Whislist from "../Profile/Whislist";
import SellerLeft from "./SellerLeft";
import SellerInfo from "./SellerInfo";
import SellerCatlog from "./SellerCatlog";
import AddProduct from "./SellerAddProduct";
export default function SellerProfile(props) {
    const [page,setPage]=useState(props.page)
    function ChildUpadate(num){
        setPage(num)
    }
    return <div className="Profile-Container">
        <SellerLeft UpdateParent={ChildUpadate} />
        {page==0 && <SellerInfo/> }
        {page==1 && <SellerCatlog /> }
        {page==2 && <AddProduct /> }
    </div>


}