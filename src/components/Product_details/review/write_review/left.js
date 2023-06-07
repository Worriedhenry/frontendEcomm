import React from "react"

function Left(){
    return(
        <div style={{marginLeft:"15px",width:"300px"}}>
            <div>
                <div style={{border:"1px solid #f0f0f0" ,padding:"24px"}}>
                    <div style={{marginBottom:"6px" ,fontWeight:"600"}}>
                        <span style={{fontSize:"18x"}}>What makes a good review</span>
                    </div>
                </div>



                <div style={{border:"1px solid #f0f0f0" ,padding:"24px"}}>
                    <div style={{marginBottom:"6px" ,fontWeight:"bold",color:"black"}}>
                        <span style={{fontSize:"18x"}}>Have you used this Product ?</span>
                    </div>
                    <div style={{marginBottom:"6px" ,fontWeight:"550"}}>
                        <span style={{fontSize:"15x"}}>Your review should be about your experience with the product.</span>
                    </div>
                </div>


                <div style={{border:"1px solid #f0f0f0" ,padding:"24px"}}>
                    <div style={{marginBottom:"6px" ,fontWeight:"600"}}>
                        <span style={{fontSize:"18x"}}>Why review a product ?</span>
                    </div>
                    <div style={{marginBottom:"6px" ,fontWeight:"550", fontSize:"14x"}}>
                        <span style={{fontSize:"15x"}}>Your valuable feedback will help fello shoppers decide!</span>
                    </div>
                </div>


                <div style={{border:"1px solid #f0f0f0" ,padding:"24px"}}>
                    <div style={{marginBottom:"6px" ,fontWeight:"600"}}>
                        <span style={{fontSize:"18x"}}>How to review a product ?</span>
                    </div>
                    <div style={{marginBottom:"6px" ,fontWeight:"550"}}>
                        <span style={{fontSize:"15x"}}>In the Flipkart product page, the customers can sort reviews by “Most Helpful, Most Recent, Positive First, and Negative First”</span>
                    </div>
                </div>



            </div>
        </div>
    )
}
export default Left;