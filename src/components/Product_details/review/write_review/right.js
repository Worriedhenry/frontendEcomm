import React from "react"
import Star from "./StarRating";
import {Rating} from "@mui/material"
import { colors } from "@mui/material";
import { Button } from '@mui/material';

function Right(){
    const [RatingValue, setValue] = React.useState(null);
    return(
        <div>

            <div style={{marginLeft:"15px" ,marginRight:"15px"}}>
                <div style={{border:"1px solid #f0f0f0" }}>
                    <div style={{padding:"24px" ,width:"100%" ,borderBottom:"1px solid #f0f0f0"}}>
                        <div style={{marginBottom:"6px" ,fontWeight:"600"}}>
                            <span style={{fontSize:"18x" ,letterSpacing:"0.1rem"}}>Rate this product</span>
                        </div>
                        <Rating onChange={(event, newValue) => {setValue(newValue)}} precision={0.5}  name="no-value" value={RatingValue} />
                    </div>
                    <div style={{width:"100%"}}>
                        <div style={{padding:"24px" ,paddingTop:"15px"}}>
                            <h3 style={{fontSize:"18px"}}>Review this product</h3>
                            <form>
                            <textarea rows="9" cols="110" style={{borderStyle:"dotted",resize: "none" ,fontSize:"15px"}} placeholder="Description" required>

                            </textarea>
                            <textarea rows="3" cols="110" style={{borderStyle:"dotted",resize: "none" ,fontSize:"15px"}} placeholder="Title (Optional)" required>

                            </textarea>
                            <br></br>
                            <Button style={{backgroundColor:"rgb(255, 173, 51)" ,width:"10%" ,height:"10%"  ,borderRadius:"2px" ,color:"#f0f0f0" ,fontWeight:"600" }} variant="filled" >Submit</Button>            

                            </form>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    
    )
}
export default Right;