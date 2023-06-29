import React from "react";
import { Snackbar,Alert } from "@mui/material";

const SuccessSnackBar=({message})=>{
    return(
        <Snackbar
      open={SnackbarControl}
      autoHideDuration={3000}
      onClose={() => setSnackbarControl(false)}
      message={EmptyFeildError}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert onClose={() => setSnackbarControl(false)} severity="success" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
    )
}
const WarningSnackBar=({message})=>{
    return(
        <Snackbar
      open={SnackbarControl}
      autoHideDuration={3000}
      onClose={() => setSnackbarControl(false)}
      message={EmptyFeildError}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert onClose={() => setSnackbarControl(false)} severity="warning" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
    )
}
const ErrorSnackBar=({message})=>{
    return(
        <Snackbar
      open={SnackbarControl}
      autoHideDuration={3000}
      onClose={() => setSnackbarControl(false)}
      message={EmptyFeildError}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert onClose={() => setSnackbarControl(false)} severity="error" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
    )
}
export {SuccessSnackBar,WarningSnackBar,ErrorSnackBar}