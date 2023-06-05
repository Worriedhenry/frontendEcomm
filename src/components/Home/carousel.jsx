import carouselImgs from "../../data_resourses/carousel_data"
import React from 'react'
import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css'
import { Box , styled } from '@mui/material';

const Image=styled('img')({
    width:"100%",
    height:"220px",
    marginTop:"8px",
    marginBottom:"6px"
})

function data(info){
    return <Image src={info.url} alt="img"></Image>
}


function Mycarousel(){

    return(
        <div style={{backgroundColor:"#EAEEEB" }}>
        <Carousel responsive={{
    desktop:{
        breakpoint:{max:3000 ,min:1024},
        items:1
    },
    mobile:{
        breakpoint: {max:464,min:0},
        items:1
    },
    tablet:{
        breakpoint: {max:1024,min:464},
        items:1       
    }
}}
        autoPlay={true}
        autoPlaySpeed={3000}
        draggable={false}
        infinite={true}
        >
            {carouselImgs.map(data)}
        </Carousel>
        </div>
    )
}

export default Mycarousel;