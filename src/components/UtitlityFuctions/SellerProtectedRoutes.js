import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../Context/AuthContext"
import NavBar from "../Header"
import Footer from "../Footer"
import Home from "../Home/home"
import { Backdrop, CircularProgress } from "@mui/material"
export default function SellerProtectedRoutes({ Component }) {
    const navigate = useNavigate()
    const { Valid, Loading, SellerValid } = React.useContext(AuthContext)
    if (Loading) {
        return (
            <Backdrop
            sx={{ color: '#0000', zIndex: (theme) => theme.zIndex.drawer + 1, background: "white" }}
            open={Loading}
            >
            <CircularProgress sx={{color:"#047BD5"}} />
        </Backdrop>
    )
    }
    if(!SellerValid){
        return (
            <><NavBar /><Home/><Footer /></>
        )
    }
    return (
        <><NavBar /> {Component}<Footer /></>
    )
}