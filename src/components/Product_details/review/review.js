import React from "react"
import { Box, IconButton, InputAdornment, TextField ,Typography ,Grid, Table ,styled, Button ,} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import Answer from "./answer";
function Reviews(){
    
    return(
        // <Box>

        // </Box>
        <div>
            <div style={{marginTop:"24px" ,border:"1px solid #f0f0f0" ,borderRadius:"2px"}}>
                <div style={{display:"flex" ,justifyContent:"space-between"}}>
                    
                    <div style={{fontSize:"24px" ,fontWeight:"480" ,padding:"24px 0 0 24px"}}> Review & Ratings</div>
                    
                    <div style={{textAlign:"right" ,boxSizing:"border-box"}}>
                        <button type="submit" style={{boxShadow:"0 1px 2px 0 rgba(0,0,0,.26)" ,border:"none",cursor:"pointer" ,color:"#212121",fontSize:"14px" ,padding:"16px 36px" ,margin:"18px 18px 0 0"}}><span>Rate Product</span></button>
                    </div>
                </div>

                <div style={{padding:"20px"}}>
                    <div style={{width:"60%"}}>
                        <div style={{width:"25%" ,textAlign:"center"}}>
                            <div style={{display:"inline-block" , fontSize:"32px" ,marginTop:"4px"}}>4.5</div>
                            <div style={{display:"inline-block" ,padding:"2px 0 0 4px"}}>{<StarIcon style={{fontSize:"26px"}}/>}</div>                
                        </div>
                    </div>


                </div>

            </div>
            <Answer/>
            
        </div>
    )
}
export default Reviews;