import { Search } from "@mui/icons-material"
import { Button, ButtonGroup, FormControl, IconButton, InputAdornment, TextField, Dialog, Menu, MenuItem } from "@mui/material"
import * as React from 'react';
import AbcIcon from '@mui/icons-material/Abc';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import OutlinedInput from '@mui/material/OutlinedInput';
import Logo from "./Flip-Logo.jpg"
import SignUp from "./SignUp";
import Login from "./Login";
import { width } from "@mui/system";
export default function NavBar() {

    const [LogHover, setLogHover] = React.useState(false)
    const [open, setOpen] = React.useState(false)
    const [signOpen, setSignOpen] = React.useState(false)
    const [Auth,setAuth] = React.useState(true)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const Open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    React.useEffect(() => {
        // console.log(LogHover)
    })
    const handleClose = () => {
        setAnchorEl(null);
    };

    return <div style={{ display: "flex", justifyContent: "center", background: "#047BD5", height: "9vh", alignItems: "center", width: "100%",position:"sticky",zIndex:"100",top:"0px" }}>
        <div style={{ display: "flex", width: "54vw", justifyContent: "space-around", alignItems: "center" }}>
            <img style={{ height: "48px" }} src={Logo} alt=""></img>

            <FormControl sx={{ width: '30vw' }} variant="filled">
                <input
                    id="outlined-adornment-password"
                    type="text"
                    className="BorderColor"
                    placeholder="Search Items"
                    size="small"
                    sx={{ input: { color: 'white' },width:"30px" }}
                    inputLabelProps={{className:"BorderColor"}}
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
            <div
            >
                <div>
                <Button
                    onMouseEnter={handleClick}
                    endIcon={ !Open ? <ArrowDownwardIcon /> : <ArrowUpwardIcon/>}
                    style={{ color: "#047BD5", background: "white" }} >Login
                </Button>
                </div>
                <Menu
                    id="basic-menu"
                    open={Open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    onBlur={handleClose}
                    style={{width:"100%"}}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    {Auth && <MenuItem style={{ color: "#047BD5" }} onClick={() => { setOpen(true)  }}>Login</MenuItem>}
                    <MenuItem style={{ color: "#047BD5" }}  onClick={() => { setSignOpen(true) }}>SignUp</MenuItem>
                    <MenuItem style={{ color: "#047BD5" }} onClick={handleClose}>Orders</MenuItem>
                    <MenuItem style={{ color: "#047BD5" }} onClick={handleClose}>Whislist</MenuItem>
                    <MenuItem style={{ color: "#047BD5" }} onClick={handleClose}>Logout</MenuItem>
                </Menu>

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
            <Login />
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
            <SignUp />
        </Dialog>
    </div>
}