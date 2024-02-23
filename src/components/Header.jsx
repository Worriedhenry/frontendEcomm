import { AuthContext } from "../Context/AuthContext";
import { Button, Menu, MenuItem, Divider, ButtonBase,IconButton, Grid, TextField, Autocomplete, InputAdornment } from "@mui/material"
import React,{useEffect,useState} from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Logo from "./FastKart.png"
import LoginDialog from "./UtlityComponents/LoginDialog";
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import SignDialog from "./UtlityComponents/SignDialog";
import CustomTextField from "./UtlityComponents/StyledTypography";
import { StyledTypography, InputPaper, StyledButton, GridItem } from "./UtlityComponents/HeaderStyledElement";
export default function NavBar() {
    const Context = React.useContext(AuthContext)
    const { Valid, setLoginOpen, setNext, SellerValid,searchSuggestion } = Context
    const [anchorEl, setAnchorEl] = useState(null);
    const [SearchQuery, setSearchQuery] = useState("")
    const navigate = useNavigate()
    const Open = Boolean(anchorEl);
    const placeholderTexts = ["phone", "grocery", "shoes", "clothes"];
    const [openSuggestions,setOpenSuggestion]=useState(false)
    const [searchTerm, setSearchTerm] = useState(0);
    // const [searchSuggestion,setSearchSuggestion]=React.useState([])
    useEffect(() => {
        const interval = setInterval(() => {
          setSearchTerm((prevTerm) => (prevTerm + 1) % placeholderTexts.length);
        }, 1500);
        return () => clearInterval(interval);
      }, []);
      


    const handleClick = (event) => {
        if (anchorEl == null) {
            setAnchorEl(event.currentTarget);
        }
        else {
            setAnchorEl(null)
        }
    };
    const LogOut = () => {
        localStorage.removeItem("token")
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
    const handleSellerClick = () => {
        if (SellerValid) {
            navigate("/admin/info/" + SellerValid)
        }
        else {
            navigate("/seller/login")
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


    return <GridItem justifyContent="center" container style={{ display: "flex", background: "#047BD5", alignItems: "center", width: "100%", position: "sticky", zIndex: "100", top: "0px",padding:"2.5px",overflowX:"hidden" }}>
        <Grid item container justifyContent="space-around" spacing={1} alignItems="center" xs={8} sm={6} md={6} direction="row">
            <Grid item sm={3} xs={3} md={2}>
                <ButtonBase onClick={() => navigate("/")}><img style={{ height: "100%", width: "100%" }} src={Logo} alt=""></img></ButtonBase>
            </Grid>
            <Grid item sm={6} xs={6} md={7}>
                <Autocomplete
                    freeSolo
                    disableClearable
                    options={SearchQuery.length>0 ? searchSuggestion.slice(0, 5) : []}
                    // open={openSuggestions && SearchQuery.length}
                    renderInput={(params) => (
                        <CustomTextField
                            {...params}
                            size="small"
                            placeholder={`Search ${placeholderTexts[searchTerm]}`}
                            sx={{
                                "& fieldset": { border: 'none' },
                              }}
                            value={SearchQuery}
                        onChange={(e) =>{ 
                            setOpenSuggestion(e.target.value.length ? true : false)
                            setSearchQuery(e.target.value)}}
                            InputProps={{
                                ...params.InputProps,
                                type: "search",
                                disableUnderline: true,
                                style: {
                                    backgroundColor: "white",
                                    border: "1px solid white",
                                    padding:"0px",
                                },
                                endAdornment: (
                                    <InputAdornment position="start">
                                        <IconButton onClick={() => navigate("/search?query=" + SearchQuery)} >
                                            {openSuggestions && <SearchIcon style={{ color: '#047BD5', cursor: 'pointer' }} />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    )}
                />
                {/* <InputPaper
                    sx={{ height: "80%" }}
                    style={{
                        display: "flex",

                    }}
                >
                    <input
                        type="text"
                        placeholder="Search Items"
                        autoComplete="email"
                        className="HeaderInput"
                        style={{ width: "100%", padding: "0px 8px", border: "1px solid white", boxSizing: "borderBox" }}
                        value={SearchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button className="SearchBarButton" onClick={() => navigate("/search?query=" + SearchQuery)} ><SearchIcon style={{ color: "#047BD5", height: "100%" }} /></button>
                </InputPaper> */}
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
            <Button sx={{ fontSize: 10 }} size="small" style={{ color: "white", textTransform: 'none', fontWeight: "bold" }} onClick={handleSellerClick} ><StyledTypography>{SellerValid ? "Seller DashBoard" : "Become a Seller"}</StyledTypography></Button>
            <div>
                <Button style={{ color: "white", textTransform: 'none', fontWeight: "bold" }} endIcon={!Open ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
                    onClick={handleClick}
                ><StyledTypography>More</StyledTypography></Button>
                <Menu
                    id="basic-menu"
                    open={Open}
                    anchorEl={anchorEl}
                    onClose={() => setAnchorEl(null)}
                    // onBlur={handleClose}

                    style={{ width: "100%" }}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem className="Headers-MenuItem" style={{ color: "#047BD5", width: '15vw' }} onClick={HandleProfile} >Profile</MenuItem>
                    <Divider />
                    <MenuItem className="Headers-MenuItem" style={{ color: "#047BD5", width: '15vw' }} onClick={HandleOrders} >Orders</MenuItem>
                    {Valid && <><Divider />
                        <MenuItem className="Headers-MenuItem" style={{ color: "#047BD5", width: '15vw' }} onClick={LogOut}>Logout</MenuItem></>}
                </Menu>
            </div>
            <Button style={{ color: "white", textTransform: 'none', fontWeight: "bold" }} className="Header-Cart" onClick={HandleCart} startIcon={<ShoppingCartIcon />} >Cart</Button>
        </Grid>
        <LoginDialog />
        <SignDialog />
    </GridItem>
}

const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 },
    {
        title: "The Lord of the Rings: The Return of the King",
        year: 2003,
    }]