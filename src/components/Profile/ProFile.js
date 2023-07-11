import { Grid} from "@mui/material"
import React, { useEffect, useState } from "react"
import Logo from "../Fastkart.png"
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
    return <Grid spacing={2} container style={{background:"#f3f0f0",display:"flex",padding:"14px 3vw"}}>
        <Grid xs={4} sm={3}  md={2.5} item>
        <ProFileLeft  UpdateParent={ChildUpadate} />
        </Grid>
        <Grid xs={8} sm={8} md={8.5} item>
        {page==0 && <PersonalInfo/> }
        {page==1 && <ManageAddress /> }
        </Grid>
    </Grid>


}