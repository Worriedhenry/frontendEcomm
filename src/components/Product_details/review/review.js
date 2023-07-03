import React, { useEffect } from "react"
import { Box, IconButton, InputAdornment, TextField ,Typography ,Grid, Table ,styled, Button ,} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import Answer from "./answer";
import Write_review from "./write_review/write_review";
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import BackendLink from "../../../data_resourses/BackendLink";
import axios from "axios"
function Reviews({ProductId}){
    const [showmoreReviews, setshowmoreReviews] = useState(3);
    const [Reviews,setReviews]=useState(false)
    const handleLoadMore = () => {
        setVisibleComments(Reviews.length);
      };
    useEffect(()=>{
        axios
          .get(BackendLink+"/review/getreview/"+ProductId)
          .then(res => {
            if(res.status==200){
                setReviews(res.data)
            }
          })
          .catch(err => console.error(err));
    },[ProductId])
    const navigate=useNavigate()
    return(
        
        <div>
            <div>
                <div style={{marginTop:"24px" ,border:"1px solid #f0f0f0" ,borderRadius:"2px"}}>
                    <div style={{display:"flex" ,justifyContent:"space-between"}}>
                        
                        <div style={{fontSize:"24px" ,fontWeight:"550" ,padding:"24px 0 0 24px"}}> Review & Ratings</div>
                        
                        <div onClick={()=> navigate("/writereview/"+ProductId)} style={{textAlign:"right" ,boxSizing:"border-box"}}>
                            <button type="submit" style={{boxShadow:"0 1px 2px 0 rgba(0,0,0,.26)" ,border:"none",cursor:"pointer" ,color:"#212121",fontSize:"14px" ,padding:"16px 36px" ,margin:"18px 18px 0 0"}}><span >Rate Product</span></button>
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
                {Reviews && Reviews.length<=3 && Reviews.map((review)=>
                    <Answer props={review} />
                )}
                {Reviews && Reviews.length>3 && Reviews.slice(0,3).map((review)=>
                <Answer props={review} />
                )}
                {Reviews.length>3 && <p style={{fontSize:"small"}}>and {Reviews.length-3} more ...</p>}
                
            </div>
        </div>
    )
}
export default Reviews;