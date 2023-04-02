import React from "react"
import { Box, IconButton, InputAdornment, TextField ,Typography ,Grid, Table ,styled, Button ,} from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Right_Part(){

    const [Assured,setAssured] =React.useState(true);

    const date=new Date(new Date().getTime()+6*24*60*60*1000);
    return (
        <>
            <h3>Canon EOS M50 Mark II Mirrorless Camera EF-M15-45mm is STM Lens&nbsp;&nbsp;(Black);</h3>
            <p>
                <div style={{marginTop:"-10px"}}><span style={{color:"#838484"}}><div style={{width:"28px",height:"15px",backgroundColor:"green" ,borderRadius:"0.2rem" ,color:"white" ,display:"inline"}}>4.4<StarOutlinedIcon style={{fontSize:"0.8rem"}}/></div>&nbsp; 52 Rating&nbsp; & 16 Reviews &nbsp;</span><span></span>{Assured ? <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" style={{width:"80px", marginLeft:"20px"}}/>:<></>}</div>
                <div>
                    <span style={{fontSize:"30px"}}>₹57,490</span><span style={{marginLeft:"10px" ,color:"#838383"}}><strike>₹60,995</strike></span><span style={{marginLeft:"10px",color:"#30B131"}}>5% off</span>
                </div>
            </p>
            <p>Available offers</p>
            <Box>
                <p style={{fontSize:"14px" ,fontWeight:"300"}}><LocalOfferIcon style={{color:"green" , marginRight:"9px" ,fontSize:"15px"}}/><strong>Bank offer</strong>10% off on Axis Bank Credit Card and EMI Transactions, up to ₹1500, on orders of ₹5,000 and above <span><a href="#" style={{textDecoration:"none",fontWeight:"500"}}>T&C</a></span></p>
                <p style={{fontSize:"14px" ,fontWeight:"300"}}><LocalOfferIcon style={{color:"green" , marginRight:"9px" ,fontSize:"15px"}}/><strong>Bank offer</strong>10% off on Axis Bank Credit Card and EMI Transactions, up to ₹1500, on orders of ₹5,000 and above <span><a href="#" style={{textDecoration:"none",fontWeight:"500"}}>T&C</a></span></p>
                <p style={{fontSize:"14px" ,fontWeight:"300"}}><LocalOfferIcon style={{color:"green" , marginRight:"9px" ,fontSize:"15px"}}/><strong>Bank offer</strong>10% off on Axis Bank Credit Card and EMI Transactions, up to ₹1500, on orders of ₹5,000 and above <span><a href="#" style={{textDecoration:"none",fontWeight:"500"}}>T&C</a></span></p>
                <p style={{fontSize:"14px" ,fontWeight:"300"}}><LocalOfferIcon style={{color:"green" , marginRight:"9px" ,fontSize:"15px"}}/><strong>Bank offer</strong>10% off on Axis Bank Credit Card and EMI Transactions, up to ₹1500, on orders of ₹5,000 and above <span><a href="#" style={{textDecoration:"none",fontWeight:"500"}}>T&C</a></span></p>
                
            </Box>
            <Table>
                <tr style={{height:"50px"}}>
                    <td style={{color:"#878787" ,fontWeight:"600"}}>Warranty</td>
                    <td style={{}}><ul>2 Year Warranty (1 year standard warranty + 1 year additional warranty from the date of purchase made by the customer.)</ul></td>
                </tr>                
                <tr style={{height:"50px"}}>
                    <td style={{color:"#878787" ,fontWeight:"600"}}>Delivery</td>
                    <td style={{fontWeight:"600"}}>
                        <ul>
                        <TextField label="Enter Delivery Pincode" variant="standard" style={{fontWeight:"600",fontSize:"0.8rem" ,color:"blue" ,verticalAlign:"baseline"}} /><a href="#" style={{textDecoration:"none", color:"#486EEF",marginLeft:"10px",verticalAlign:"baseline"}}>Check</a>
                        </ul>
                        <ul style={{marginTop:"-10px"}}>
                        <p style={{fontWeight:"600" ,fontSize:"0.8rem"}} > Delivery by {date.toDateString()} | ₹40 </p>
                        </ul>
                    </td>
                </tr>
                <tr style={{height:"50px"}}>
                    <td style={{color:"#878787" ,fontWeight:"600" ,verticalAlign:"baseline"}}>Seller</td>
                    <td style={{fontWeight:"600", verticalAlign:"baseline"}}>        
                            <ul>
                                 <table>
                                    <tr>
                                        <td><a style={{color:"#486EEF" ,textDecoration:"none"}} href="">AnkitTech</a></td> 
                                        {/* Change required in below line to correct widht of 4*    */}
                                        <td><Button  style={{height:"15px" ,maxwidth:"27px",backgroundColor:"#486EEF" ,color:"white",borderRadius:"2rem" ,fontSize:"0.6rem",fontWeight:"600"}} endIcon={<StarOutlinedIcon style={{ marginLeft:"-6px" ,fontSize:"0.7rem",color:"white"}} />}> 4.4</Button></td>
                                    </tr>
                                </table>                           
                                <li startIcon={<HelpOutlineIcon/>}>
                                    7 day seller replacement policy/brand assistance for device issues*<Button startIcon={<HelpOutlineIcon style={{color:"#878787"}}/>}></Button>
                                </li>
                                <li>
                                    GST invoice available<Button startIcon={<HelpOutlineIcon style={{color:"#878787"}}/>}></Button>
                                </li>
                            </ul>
                    </td>

                </tr>    
                <tr>
                    <td colSpan={2}>
                        <img style={{width:"400px"}}src="https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50" />
                    </td>
                </tr>                            
                <tr style={{height:"50px"}}>
                    <td style={{color:"#878787" ,fontWeight:"600" ,verticalAlign:"baseline"}}>Description</td>
                    <td style={{fontSize:"14px" ,marginTop:"-15px" ,verticalAlign:"baseline"}}><ul>Flex Your Stories.Lightweight and stylish, the EOS M50 Mark II is fun and easy to use with Wi-Fi connectivity for content creators to stay close to your audience at all times. 
                        Keep your social media feeds lit with high-quality visual storytelling in 4K and accurate eye and face detection autofocusing.Whatever content you create, set yourself apart from the crowd and give your audience something special. 
                        The EOS M50 Mark II gives you more ways to shoot photos, movies and live streams and connect with your followers.,suitable_for-Beginners,processor-DIGIC 8,sensor_type-APS-C CMOS,continuous_shooting_speed-11 fps (in High Continuous shooting)
                    </ul></td>
                </tr>
            </Table>
             
        </>
    )
}
export default Right_Part;