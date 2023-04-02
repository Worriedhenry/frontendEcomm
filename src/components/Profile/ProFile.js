import { Button, Divider, TextField ,Radio,FormControlLabel,RadioGroup} from "@mui/material"
import React, { useEffect, useState } from "react"
import Logo from "../Flip-Logo.jpg"
import InventoryIcon from '@mui/icons-material/Inventory';
import PersonIcon from '@mui/icons-material/Person';
import PersonalInfo from "./PersonalInfo";
import ProFileLeft from "./ProfileLeft";
import ManageAddress from "./ManageAddress";
import ServiceNotAvailable from "./SavedUPI";
export default function Profile() {
    const [page,setPage]=useState(0)
    function ChildUpadate(num){
        setPage(num)
    }
    return <div className="Profile-Container">
        <ProFileLeft UpdateParent={ChildUpadate} />
        {page==0 && <PersonalInfo/> }
        {page==1 && <ManageAddress /> }
        {page>1 && <ServiceNotAvailable/>} 
    </div>


}