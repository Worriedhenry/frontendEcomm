import React from 'react'

import Mycarousel from './carousel';
import Nav from "./navbar"
import FullProductWindow from './Fullproduct';
function home(){
    return(
        <>
        <head>
            <title>Fastkart-Online Shooping and selling Platform</title>
        </head>
        <Nav />
        <Mycarousel />
        <FullProductWindow />
        <FullProductWindow />
        </>
    )
}
export default home;