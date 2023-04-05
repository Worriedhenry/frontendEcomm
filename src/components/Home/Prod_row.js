
import React from "react"
import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css'
import { style } from "@mui/system"
import { useNavigate } from "react-router-dom"

function Data1(props){
    const navigate=useNavigate()
    return (

        <div style={{margin:"30px" ,minWidth:"180px" }}>
            <div style={{alignContent:"center"}}>
                <img src={props.url} style={{widht:"auto" ,height:"150px"}} />
            </div>
            <div onClick={()=> navigate("/viewproduct")} style={{textAlign:"center"}}>
                <p style={{fontWeight:"999" ,color:"black"}}>{props.title.shortTitle}</p>
                <p style={{color:"green"}}>{props.price.offer}</p>
                <p style={{color:"grey"}}>{props.title.company}</p>
            </div>
        </div>
    )
}


function ProductWindow(info){
    const Data=info.data;
    return(
        <div style={{padding:"8px" ,backgroundColor:"#EAEEEB"}}>
            <div style={{display:"flex" ,backgroundColor:"white"}}>
                <div style={{width:"180px",height:"220px",position:"sticky"}}>
                    <div style={{height:"40px",marginBottom:"40px"}}>
                        <h3 style={{fontFamily:"poppins", fontSize:"25px", textAlign:"center"}}>{info.tagline}</h3>
                    </div>
                    <img src={info.url} style={{height:"180px",width:"180px"}} />
                </div >
                <div className=" products_slider" style={{display:"flex" ,overflow:"scroll" ,textAlign:"center"}}>
                    { Data.map(Data1)};
                </div>
            </div>
        </div>
    )
}
export default ProductWindow;
