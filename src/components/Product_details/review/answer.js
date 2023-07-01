import React from "react";
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import VerifiedIcon from '@mui/icons-material/Verified';
function Answer({props}){
    return(
        <div style={{borderRadius:"1px solid #f0f0f0" ,boxSizing:"border-box"}}>
            <div style={{padding:"20px"}}>
                <div style={{display:"inline-block" }}>
                    <div style={{backgroundColor:"#388e3c",display:"inline-block" ,alignItems:"center" ,fontSize:"12px" ,borderRadius:"3px" ,padding:"2px 4px 2px 6px ", fontWeight:"800" ,color:"white" ,marginTop:"3px"}}>{props.Rating.$numberDecimal}<StarOutlinedIcon style={{paddingLeft:"1px" ,display:"inline-block" ,fontSize:"12px"}}/> </div>
                <h4 style={{marginLeft:"20px" ,display:"inline-block"}}>{props.Title}</h4>
                </div>
                <div>
                    <div  style={{margin:"11 px 0" ,fontWeight:"400" ,lineHeight:"1.4" ,overflowWrap:"break-word",textOverflow:"ellipsis",fontSize:"small",maxHeight:"25vh",wordWrap:"normal",overflow:"hidden"}}>
                   {props.Description}
                    </div>
                    <div>
                        <div style={{display:"flex" ,boxSizing:"border-box" ,alignItems:"center" ,fontWeight:"600"}}>
                            <span style={{fontSize:"12px",color:"#878787"}}><VerifiedIcon style={{ fontSize:"12px" ,color:"#878787" ,paddingLeft:"5px" }}/> certified Buyer , Sirsa</span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

  
    )
}
export default Answer;