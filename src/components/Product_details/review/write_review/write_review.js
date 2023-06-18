import React from "react"
import Left from "./Left"
import Right from "./right"
function Write_review(){
    return(
        <div style={{backgroundcolor:"#f1f3f6"}}>
            <div style={{marginLeft:"15px",padding:"2px 4px 2px 6px" ,fontSize:"32px" ,border:"4px solid #f0f0f0",borderBottom:"4px solid #f0f0f0" ,marginTop:"10px" }} >
                <span style={{padding:"24px" }}>Reviews & Ratings</span>
            </div>
            <div style={{display:"flex"}}>
                <div>
                    <Left />
                </div>
                <div>
                    <Right/>
                </div>
            </div>
        </div>
    )
}
export default Write_review;