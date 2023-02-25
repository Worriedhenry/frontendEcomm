import { Search } from "@mui/icons-material"
import { Button, ButtonGroup, FormControl, IconButton, InputAdornment, TextField , Dialog} from "@mui/material"
import React, { useEffect, useState } from "react"
import AbcIcon from '@mui/icons-material/Abc';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import OutlinedInput from '@mui/material/OutlinedInput';
import Logo from "./Flip-Logo.jpg"
import Login from "./Login";
import { width } from "@mui/system";
export default function NavBar() {

    const [LogHover, setLogHover] = useState(false)
    const [open,setOpen]=useState(false)
    useEffect(() => {
        console.log(LogHover)
    })

    return <div style={{ display: "flex", justifyContent: "center", background: "#047BD5", height: "9vh", alignItems: "center", width: "100%" }}>
        <div style={{ display: "flex", width: "54vw", justifyContent: "space-around", alignItems: "center" }}>
            <img style={{ height: "48px" }} src={Logo} alt=""></img>

            <FormControl sx={{ width: '30vw' }} variant="filled">
                <OutlinedInput
                    id="outlined-adornment-password"
                    type="text"
                    placeholder="Search Items"
                    size="small"
                    sx={{ input: { color: 'white' } }}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                edge="end"
                            >
                                <Search style={{ color: "white" }} />
                            </IconButton>
                        </InputAdornment>
                    }

                />
            </FormControl>
            <div >
                <Button
                   onMouseEnter={() => setLogHover(true)}
                   onMouseLeave={() => setLogHover(false)}
                    onClick={() => { setOpen(true) }} style={{ color: "#047BD5", background: "white" }} variant="contained">Login</Button>
                
            </div>

        </div>
        <div style={{ width: "25vw", display: "flex", justifyContent: "space-around" }}>
            <Button style={{ color: "white", textTransform: 'none' }} startIcon={<AbcIcon />} >Change Language</Button>
            <Button style={{ color: "white", textTransform: 'none' }} startIcon={<AbcIcon />} >More</Button>
            <Button style={{ color: "white", textTransform: 'none' }} startIcon={<ShoppingCartIcon />} >Cart</Button>
        </div>
        <Dialog 
        fullWidth 
        open={open} 
        onClose={()=>setOpen(false)}
        sx={{
                "& .MuiDialog-container": {
                  "& .MuiPaper-root": {
                    width: "100%",
                    maxWidth: "50vw",  // Set your width here
                    height:"80vh",
                    maxHeight:"80vh"
                  },
                },
              }}
    
    >
        <Login />
    </Dialog>
    </div>
}