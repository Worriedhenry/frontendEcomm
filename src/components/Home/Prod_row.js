import Products from "../../data_resourses/productdata"
import React from "react"
import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css'
import { style } from "@mui/system"

function data(props){
    return (
        <div style={{margin:"30px"}}>
            <div style={{alignContent:"center"}}>
                <img src={props.url} style={{widht:"auto" ,height:"150px"}} />
            </div>
            <div style={{textAlign:"center" }}>
                <p style={{fontWeight:"999"}}>{props.title.shortTitle}</p>
                <p style={{color:"green"}}>{props.price.offer}</p>
                <p>{props.title.company}</p>
            </div>
        </div>
    )
}


function ProductWindow(){

    return(
        <div style={{display:"flex"}}>
        <div style={{width:"180px",height:"220px",position:"sticky"}}>
            <div style={{height:"40px",marginBottom:"40px"}}>
                <h3 style={{fontFamily:"poppins", fontSize:"25px", textAlign:"center"}}>Best of Electronics</h3>
            </div>
            <img src="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90" style={{height:"180px",width:"180px"}} />
        </div >
        <div className=" products_slider" style={{display:"flex" ,overflow:"scroll"}}>
            {Products.map(data)};
        </div>
        </div>
    )
}
export default ProductWindow;
