import React,{useState} from "react";
import { Button, Snackbar,Alert} from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
export default function ManageAddress(){
    const [Address,setAddress]=useState(false)

    return <div className="manageaddressDiv" style={{width:"100%",background:"white",padding:"2vw"}}>
        <p><span style={{ fontSize: "18px", paddingTop: "35px",marginTop:"22px" }}><b>Manage Address</b></span>
        <Button>Edit</Button>
        </p>
        <Button startIcon={<AddIcon/>} onClick={()=>setAddress(true)} variant="outlined" style={{justifyContent:"left"}} fullWidth >Add a new address</Button>
        <Snackbar
      open={Address}
      autoHideDuration={3000}
      onClose={()=>setAddress(false)}
      anchorOrigin={{vertical:"bottom",horizontal: "center"}}
      >
      <Alert onClose={()=>setSnackbarControl(false)} severity="error" sx={{ width: '100%' }}>
        Function not available
      </Alert>
    </Snackbar>
</div>
}