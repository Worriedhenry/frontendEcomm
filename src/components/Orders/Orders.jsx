import React from "react";
import OrdersFilter from "./OrderFilters";
import NavBar from "../Header";
import OrdersRight from "./OrdersData";
export default function Orders(){


    return < div 
    style={{backgroundColor:"#f3f0f0",padding:"50px 16px",display: "flex"}}
    >
        <OrdersFilter />
        <OrdersRight />
    </div>
}