import { Search } from "@mui/icons-material"
import { Button, ButtonGroup, FormControl, IconButton, InputAdornment, TextField, Dialog, Menu, MenuItem, Divider,ButtonBase } from "@mui/material"
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
import SearchIcon from '@mui/icons-material/Search';
export default function NavBar() {

    const [LogHover, setLogHover] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [signOpen, setSignOpen] = React.useState(false);
    const [Auth,setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [Next,setNext]=React.useState("/")
    const [SearchQuery,setSearchQuery]=React.useState("")
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
           <ButtonBase onClick={()=>navigate("/")}><img style={{ height: "48px" }}  src={Logo} alt=""></img></ButtonBase>
                <div>
                <input
                    id="outlined-adornment-password"
                    type="text"
                    className="BorderColor"
                    placeholder="Search Items"
                    size="small"
                    style={{height:"26px",width:"30vw",padding:"0px 8px"}}
                    value={SearchQuery}
                    onChange={(e)=>setSearchQuery(e.target.value)}
                />
                <Button onClick={()=>navigate("/search?query="+SearchQuery)} color="primary" style={{backgroundColor:"white"}} startIcon={<SearchIcon style={{color:"#047BD5"}}  /> } variant="contained" ></Button>
                </div>
            
                <div>
                <Button
                    onClick={()=>setOpen(true)}
                    endIcon={ !Open ? <ArrowDownwardIcon /> : <ArrowUpwardIcon/>}
                    size="small"
                    style={{ color: "#047BD5", background: "white",fontWeight:"bold" }} >Login
                </Button>
                </div>
                

           

        </div>
        <div style={{ width: "25vw", display: "flex", justifyContent: "space-around"}}>
            <Button style={{ color: "white", textTransform: 'none',fontWeight:"bold" }} startIcon={<AbcIcon />} onClick={()=>navigate("/seller/register")} >Become Seller</Button>
            <div>
            <Button style={{ color: "white", textTransform: 'none' ,fontWeight:"bold"}} endIcon={ !Open ? <ArrowDownwardIcon /> : <ArrowUpwardIcon/>} 
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
            <Button style={{ color: "white", textTransform: 'none' ,fontWeight:"bold"}} onClick={()=>navigate("/viewcart")}  startIcon={<ShoppingCartIcon />} >Cart</Button>
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