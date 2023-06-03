import React from "react"
import Left from "./left"
import Right from "./right"
function Write_review(){
    return(
        <div style={{display:"flex"}}>
            <div>
                <Left/>
            </div>
            <div>
                <Right/>
            </div>
        </div>
    )
}
export default Write_review;