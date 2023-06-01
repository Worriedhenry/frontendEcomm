import { Button } from "@mui/material";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import Data from "../../data_resourses/nav_data";
function Preview({src,des}){
    return <div className="OrdersPreview">
    <img style={{width:"80px"}} src={src} alt="" />
    <div style={{width:"380px"}} > 
        <h4>{des}</h4>
        <p>Color:#00000</p>
    </div>
    <h3 style={{width:"169px"}}>₹999</h3>
    <div>
        <h5>Order Satus</h5>
        <p>You Requested the order but canceled</p>
    </div>
</div>

}
export default function OrdersRight(){


    return <div className="Orders-Right">
        <input placeholder="Search Your Orders Here" className="SearchOrder"  />
        <Button startIcon={<SearchIcon />} variant="contained">Search Orders</Button>
        {Data.map((e)=>
        <Preview src={e.url} des={e.text} />
        )}
        
    
    
    
    </div>
}