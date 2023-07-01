import { Box , styled } from '@mui/material';
import React from 'react'

import Mycarousel from './carousel';
import Nav from "./navbar"
import FullProductWindow from './Fullproduct';
function home(){
    return(
        <>
        <head>
            <title>Flipkart</title>
        </head>
        <Nav />
        <Mycarousel />
        <FullProductWindow />
        <FullProductWindow />
        </>
    )
}
export default home;