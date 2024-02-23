import React from 'react'
import  axios from "axios";
import Mycarousel from './carousel';
import Nav from "./navbar"
import FullProductWindow from './Fullproduct';
import BackendLink from '../../data_resourses/BackendLink';
function home(){

    axios
      .get(BackendLink+"/initialQuery")
      .then(res =>{
        console.log(res.status)
        // No action needed Needed
      } )
      .catch(err => console.error(err));

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