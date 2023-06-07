import { Search } from "@mui/icons-material"
import { Button, ButtonGroup, FormControl, IconButton, InputAdornment, TextField, Dialog, Menu, MenuItem, Divider } from "@mui/material"
import * as React from 'react';
import AbcIcon from '@mui/icons-material/Abc';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import OutlinedInput from '@mui/material/OutlinedInput';
import Logo from "./Flip-Logo.jpg"
import SignUp from "./SignUp";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import { width } from "@mui/system";
export default function NavBar() {

    const [LogHover, setLogHover] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [signOpen, setSignOpen] = React.useState(false);
    const [Auth,setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [Next,setNext]=React.useState("/")
    const navigate=useNavigate()
    const Open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (anchorEl==null){
        setAnchorEl(event.currentTarget);}
        else{
            setAnchorEl(null)
        }
    };
    const handleLeave = (event: React.MouseEvent<HTMLButtonElement>) => {
        // setAnchorEl(event.currentTarget);
        console.log("leaved")
    };
    React.useEffect(() => {
        // console.log(LogHover)
    })

    const handleAuth =(e)=>{
        if (Auth) {
            navigate(e)
        }
        else{
            setNext(e)
            setOpen(true)
        }
    }
    const handleClose = () => {
        setAnchorEl(null);
    };
    function OpenSign(){
        setSignOpen(true)
    }
    function OpenLogin(){
        setOpen(true)
        setSignOpen(false)
    }
    return <div style={{ display: "flex", justifyContent: "center", background: "#047BD5", height: "9vh", alignItems: "center", width: "100%",position:"sticky",zIndex:"100",top:"0px" }}>
        <div style={{ display: "flex", width: "54vw", justifyContent: "space-around", alignItems: "center" }}>
           <img style={{ height: "48px" }}  src={Logo} alt=""></img>

            <FormControl sx={{ width: '30vw' }} variant="filled">
                <input
                    id="outlined-adornment-password"
                    type="text"
                    className="BorderColor"
                    placeholder="Search Items"
                    size="small"
                    style={{height:"30px"}}
                    

                />
            </FormControl>
            
                <div>
                <Button
                    onClick={()=>setOpen(true)}
                    endIcon={ !Open ? <ArrowDownwardIcon /> : <ArrowUpwardIcon/>}
                    style={{ color: "#047BD5", background: "white" }} >Login
                </Button>
                </div>
                

           

        </div>
        <div style={{ width: "25vw", display: "flex", justifyContent: "space-around"}}>
            <Button style={{ color: "white", textTransform: 'none' }} startIcon={<AbcIcon />} onClick={()=>navigate("/seller/login")} >Become Seller</Button>
            <div>
            <Button style={{ color: "white", textTransform: 'none' }} endIcon={ !Open ? <ArrowDownwardIcon /> : <ArrowUpwardIcon/>} 
            onClick={handleClick}
            >More</Button>
            <Menu
                    id="basic-menu"
                    open={Open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    // onBlur={handleClose}
                    
                    style={{width:"100%"}}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem style={{ color: "#047BD5",width:'15vw' }} onClick={()=> handleAuth("/account")} >Profile</MenuItem>
                    <Divider />
                    <MenuItem style={{ color: "#047BD5" ,width:'15vw'}}  onClick={()=> handleAuth("/account/orders")} >Orders</MenuItem>
                    <Divider />
                    <MenuItem style={{ color: "#047BD5",width:'15vw' }} >Whislist</MenuItem>
                    <Divider />
                    <MenuItem style={{ color: "#047BD5",width:'15vw' }} onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </div>
            <Button style={{ color: "white", textTransform: 'none' }} onClick={()=>navigate("/viewcart")}  startIcon={<ShoppingCartIcon />} >Cart</Button>
        </div>
        <Dialog
            fullWidth
            open={open}
            onClose={() => setOpen(false)}
            sx={{
                "& .MuiDialog-container": {
                    "& .MuiPaper-root": {
                        width: "fit-content",
                        maxWidth: "50vw",  // Set your width here
                        height: "100%",
                        maxHeight: "80vh"
                    },
                },
            }}

        >
            <Login OpenSign={OpenSign} />
        </Dialog>
        <Dialog
            fullWidth
            open={signOpen}
            onClose={() => setSignOpen(false)}
            sx={{
                "& .MuiDialog-container": {
                    "& .MuiPaper-root": {
                        width: "100%",
                        maxWidth: "50vw",  // Set your width here
                        height: "80vh",
                        maxHeight: "80vh"
                    },
                },
            }}

        >
            <SignUp OpenLogin={OpenLogin}  />
        </Dialog>
    </div>
}