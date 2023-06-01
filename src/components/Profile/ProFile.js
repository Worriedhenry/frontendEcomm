import { Button, Divider, TextField ,Radio,FormControlLabel,RadioGroup} from "@mui/material"
import React, { useEffect, useState } from "react"
import Logo from "../Flip-Logo.jpg"
import InventoryIcon from '@mui/icons-material/Inventory';
import PersonIcon from '@mui/icons-material/Person';
import PersonalInfo from "./PersonalInfo";
import ProFileLeft from "./ProfileLeft";
import ManageAddress from "./ManageAddress";
import ServiceNotAvailable from "./SavedUPI";
import Whislist from "./Whislist";
export default function Profile(props) {
    const [page,setPage]=useState(props.page)
    function ChildUpadate(num){
        setPage(num)
    }
    return <div className="Profile-Container">
        <ProFileLeft UpdateParent={ChildUpadate} />
        {page==0 && <PersonalInfo/> }
        {page==1 && <ManageAddress /> }
        {page==6 && <Whislist /> }
        {page>6 && <ServiceNotAvailable/>} 
    </div>


}