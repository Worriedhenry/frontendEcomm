import { AuthContext } from "../Context/AuthContext";
import { Button, Menu, MenuItem, Divider, ButtonBase, Paper, Grid, styled, Typography } from "@mui/material"
import * as React from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Logo from "./Flip-Logo.jpg"
import LoginDialog from "./UtlityComponents/LoginDialog";
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import SignDialog from "./UtlityComponents/SignDialog";
import { StyledTypography, InputPaper, StyledButton, GridItem } from "./UtlityComponents/HeaderStyledElement";

export default function NavBar() {
    const Context = React.useContext(AuthContext)
    const { Valid, setLoginOpen, setNext } = Context
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [SearchQuery, setSearchQuery] = React.useState("")
    const navigate = useNavigate()
    const Open = Boolean(anchorEl);

    React.useEffect(() => {
        console.log(Context)
    })

    const handleClick = (event) => {
        if (anchorEl == null) {
            setAnchorEl(event.currentTarget);
        }
        else {
            setAnchorEl(null)
        }
    };
    const LogOut = () => {
        console.log("hi")
        localStorage.clear()
        location.reload()
        navigate("/")
    };

    const HandleCart = () => {
        if (Valid) {
            setAnchorEl(null);
            navigate("/viewcart/" + Valid)
        }
        else {
            setLoginOpen(true)
            setNext("/viewcart")
        }
    }
    const HandleProfile = () => {
        if (Valid) {
            setAnchorEl(null);
            navigate("/account/" + Valid)
        }
        else {
            setLoginOpen(true)
        }
    }
    const HandleOrders = () => {
        if (Valid) {
            setAnchorEl(null); 
            navigate("/account/orders/" + Valid)
        }
        else {
            setLoginOpen(true)
        }
    }

    return <GridItem justifyContent="center" container style={{ display: "flex", background: "#047BD5", alignItems: "center", width: "100%", position: "sticky", zIndex: "100", top: "0px" }}>
        <Grid item container justifyContent="space-around" spacing={1} alignItems="center" xs={8} sm={6} md={6} direction="row">
            <Grid item sm={3} xs={3} md={2}>
                <ButtonBase onClick={() => navigate("/")}><img style={{ height: "100%", width: "100%" }} src={Logo} alt=""></img></ButtonBase>
            </Grid>
            <Grid item sm={6} xs={6} md={7}>
                <InputPaper
                    sx={{ height: "80%" }}
                    style={{
                        display: "flex",

                    }}
                >
                    <input
                        type="text"
                        placeholder="Search Items"
                        className="HeaderInput"
                        style={{ width: "100%", padding: "0px 8px", border: "1px solid white", boxSizing: "borderBox" }}
                        value={SearchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button className="SearchBarButton" onClick={() => navigate("/search?query=" + SearchQuery)} ><SearchIcon style={{ color: "#047BD5", height: "100%" }} /></button>
                </InputPaper>
            </Grid>
            <Grid item md={2} xs={3}>
                {!Context.Valid && <StyledButton
                    onClick={() => setLoginOpen(true)}
                    size="small"
                    sx={{ fontSize: 12 }}
                    style={{ color: "#047BD5", MaxWidth: "80%", background: "white", fontWeight: "bold" }} >
                    <StyledTypography>Login</StyledTypography>
                </StyledButton>}
            </Grid>
        </Grid>
        <Grid item md={4} xs={4} sm={4} style={{ width: "fitContent", display: "flex", justifyContent: "space-around" }}>
            <Button sx={{ fontSize: 10 }} size="small" style={{ color: "white", textTransform: 'none', fontWeight: "bold" }} onClick={() => navigate("/seller/register")} ><StyledTypography>Become a Seller</StyledTypography></Button>
            <div>
                <Button style={{ color: "white", textTransform: 'none', fontWeight: "bold" }} endIcon={!Open ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
                    onClick={handleClick}
                ><StyledTypography>More</StyledTypography></Button>
                <Menu
                    id="basic-menu"
                    open={Open}
                    anchorEl={anchorEl}
                    onClose={()=>setAnchorEl(null)}
                    // onBlur={handleClose}

                    style={{ width: "100%" }}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem className="Headers-MenuItem" style={{ color: "#047BD5", width: '15vw' }} onClick={HandleProfile} >Profile</MenuItem>
                    <Divider />
                    <MenuItem className="Headers-MenuItem" style={{ color: "#047BD5", width: '15vw' }} onClick={HandleOrders} >Orders</MenuItem>
                    <Divider />
                    <MenuItem className="Headers-MenuItem" style={{ color: "#047BD5", width: '15vw' }} >Whislist</MenuItem>
                    <Divider />
                    <MenuItem className="Headers-MenuItem" style={{ color: "#047BD5", width: '15vw' }} onClick={LogOut}>Logout</MenuItem>
                </Menu>
            </div>
            <Button style={{ color: "white", textTransform: 'none', fontWeight: "bold" }} className="Header-Cart" onClick={HandleCart} startIcon={<ShoppingCartIcon />} >Cart</Button>
        </Grid>
        <LoginDialog />
        <SignDialog />
    </GridItem>
}