import { Box , ButtonBase, styled ,Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Data from "../../data_resourses/nav_data"
const StyBox =styled(Box)`
    display:flex;
    margin: 0px 10px 0 10px;
    justify-content:space-between;
    overflow-x:scroll;
`
const StyTypo= styled(Typography)`
    font-size:14px;
    font-weight:500;

`
const InnerImgBox=styled(Box)`
    padding:12px 8px;
    text-align:center;

`
function data(info){
    const navigate=useNavigate()
    return(
        <InnerImgBox style={{cursor:"pointer"}}>
            <ButtonBase onClick={()=>navigate("/search?query="+info.text)}>
            <img src={info.url} style={{width:"64px" ,height:"64px"}}></img>
            <StyTypo>{info.text}</StyTypo>
            </ButtonBase>
        </InnerImgBox>
    )
}
function nav(){

    return(
        <StyBox>
            {
                Data.map(data)
            }
        </StyBox>
    )
}
export default nav;