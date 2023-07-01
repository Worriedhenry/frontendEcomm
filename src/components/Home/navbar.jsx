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
const StyTypo= styled(Typography)(({ theme }) => ({
    fontSize:"small",
    fontWeight:"500",
    [theme.breakpoints.down('sm')]: {
      fontSize:"0.5em", 
    },
  }));
    

const InnerImgBox=styled(Box)`
    padding:12px 8px;
    text-align:center;

`
function data(info){
    const navigate=useNavigate()
    return(
        <InnerImgBox style={{cursor:"pointer"}}>
            <ButtonBase onClick={()=>navigate("/search?query="+info.text)}>
            <img src={info.url} style={{height:"6vw"}}></img>
            <StyTypo >{info.text}</StyTypo>
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