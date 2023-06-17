
import React from "react"
import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css'
import { style } from "@mui/system"
import { useNavigate } from "react-router-dom"

function Data1(props){
    const navigate=useNavigate()
    return (

        <div onClick={()=> navigate("/viewproduct")} style={{ minWidth:"20vw" }}>
            <div style={{alignContent:"center"}}>
                <img src={props.url} style={{height:"10vw"}} />
            </div>
            <div  style={{textAlign:"center"}}>
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
            <div style={{display:"flex" ,backgroundColor:"white",alignItems:"center"}}>
                <div style={{minWidth:"25vw",position:"sticky",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                    <div style={{height:"40px",marginBottom:"40px"}}>
                        <h3 style={{fontFamily:"poppins", textAlign:"center"}}>{info.tagline}</h3>
                    </div>
                    <img src={info.url} style={{width:"100%"}} />
                </div >
                <div className=" products_slider" style={{display:"flex" ,overflow:"scroll" ,textAlign:"center",alignItems:"center"}}>
                    { Data.map(Data1)};
                </div>
            </div>
        </div>
    )
}
export default ProductWindow;
