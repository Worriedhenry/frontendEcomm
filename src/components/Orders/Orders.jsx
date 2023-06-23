import React from "react";
import OrdersFilter from "./OrderFilters";
import NavBar from "../Header";
import OrdersRight from "./OrdersData";
import Breadcrumb from "../Cart/BreadCrimb";
export default function Orders(){


    return <>
    < div 
    style={{backgroundColor:"#f3f0f0",padding:" 0px 16px",display: "flex"}}
    >
        <OrdersFilter />
        <OrdersRight />
    </div>
    </>
}