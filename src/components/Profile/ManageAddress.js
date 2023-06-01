import React from "react";
import { Button, Divider, TextField ,Radio,FormControlLabel,RadioGroup} from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
export default function ManageAddress(){
    return <div className="RightProfile">
        <p><span style={{ fontSize: "18px", paddingTop: "35px",marginTop:"22px" }}><b>Manage Address</b></span>
        <Button>Edit</Button>
        </p>
        <Button startIcon={<AddIcon/>} variant="outlined" style={{justifyContent:"left"}} fullWidth >Add a new address</Button>
        

</div>
}