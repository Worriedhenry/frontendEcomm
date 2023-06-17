import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@mui/material"
import { Link } from 'react-router-dom';

const SellerLogin = () => {
  const [open, setOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogin = () => {
    console.log('Phone Number:', phoneNumber);
    console.log('Password:', password);

    handleClose();
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="login-dialog-title">
        <DialogTitle id="login-dialog-title">Log In</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="phone-number"
            label="Phone Number"
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            fullWidth
          />
          <TextField
            margin="dense"
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
          />
          <Link to="/seller/register" style={{color:"rgb(71, 160, 251)" , textDecoration:"none" , alignContent:"flex-start"}} >Register for new account</Link>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleLogin} color="primary">
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SellerLogin ;
