import { Divider,Button } from '@mui/material'
import React,{useState} from 'react'
import Data from '../../data_resourses/nav_data'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
const WishStyle={
    width:"860px",
    height:"127px",
    padding:"15px",
    display:"flex"
    
}
function WishCard(){
    const [Assured,setAssured]=useState(true)
    return <div style={WishStyle}>
        <img src={Data[0].url} style={{ width: "fit-content" ,paddingRight:"30px"}} alt=""></img>
        <div className="">
            <h4>{Data[0].text}</h4>
            <p>
                <div style={{marginTop:"-17px",fontSize:"15px",display:"flex",padding:"1px"}}><span style={{color:"#838484"}}><div style={{width:"28px",height:"15px",backgroundColor:"green" ,borderRadius:"0.2rem" ,color:"white" ,display:"inline"}}> 4.4<StarOutlinedIcon style={{fontSize:"0.8rem"}}/></div>&nbsp; 52 Rating</span><span></span>{Assured ? <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" style={{width:"80px", marginLeft:"10px"}}/>:<></>}</div>
                <div style={{marginTop:"14px"}}>
                    <span style={{fontSize:"18px"}}>₹57,490</span><span style={{marginLeft:"10px" ,color:"#838383",fontSize:"small"}}><strike>₹60,995</strike></span><span style={{marginLeft:"10px",color:"#30B131",fontSize:"small"}}>5% off</span>
                </div>
            </p>
        </div>
    </div>
}
export default function Whislist(){

    return <div className='RightProfile'>
        <h3>My Whislist</h3>
        <Divider></Divider>
        <WishCard />
        <Divider/>
        <WishCard />
        <Divider/>
        <WishCard />


    </div>
}