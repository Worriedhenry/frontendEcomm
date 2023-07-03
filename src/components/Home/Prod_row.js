
import React from "react"
import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css'
import { useNavigate } from "react-router-dom"
import { Box , ButtonBase, styled ,Typography } from '@mui/material';

const StyTypo= styled(Typography)(({ theme }) => ({
    fontSize:"small",
    fontWeight:"500",
    [theme.breakpoints.down('sm')]: {
      fontSize:"0.5em", 
    },
  }));
function Data1(props){
    const navigate=useNavigate()
    return (

        <div onClick={()=> navigate("/viewproduct/"+props.id)} style={{ minWidth:"20vw" }}>
            <div style={{alignContent:"center"}}>
                <img src={props.url} style={{height:"10vw"}} />
            </div>
            <div  style={{textAlign:"center"}}>
                <StyTypo className="truncate" style={{fontWeight:"999" ,color:"black"}}>{props.title.shortTitle}</StyTypo>
                <StyTypo className="truncate" style={{color:"green"}}>{props.price.offer}</StyTypo>
                <StyTypo className="truncate" style={{color:"grey"}}>{props.title.company}</StyTypo>
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
