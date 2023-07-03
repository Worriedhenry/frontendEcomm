import React from "react";
function Specs({product}){
    return (
        <div>

            <div style={{marginTop:"24px" ,borderRadius:"2px" ,border:"1px solid #f0f0f0"}}>
                <div>
                    <div style={{fontSize:"24px" ,padding:"24px 30px 24px 24px",fontWeight:"550" ,color:"#212121"}}>Specifications</div>
                </div>
                <div >
                    <div style={{borderTop:"1px solid #f0f0f0" ,padding:"24px 24px 34px"}}>
                            <div style={{fontSize:"18px"}}>General</div>
                            <table>
                                    {product && product.specifications.map((element)=>
                                <tbody>
                                    <tr style={{paddingBottom:"16px"}}>
                                        <td style={{color:"#878787"}}>{element.key}</td>
                                        <td>
                                            <ul>
                                                <li style={{listStyle:"none",paddingLeft:"10px"}}>{element.value}</li>
                                            </ul>
                                        </td>
                                    </tr>  
                                </tbody>
                                    ) }                                  
                            </table>
                    </div>     
                </div>    
            </div>      
        </div>
    )
} 

export default Specs;