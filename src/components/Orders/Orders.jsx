import React from "react";
import OrdersFilter from "./OrderFilters";
import NavBar from "../Header";
import OrdersRight from "./OrdersData";
import Breadcrumb from "../Cart/BreadCrimb";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
export default function Orders(){

    const [FilterParams, setFilterParams] = useSearchParams()
    // const [FilterResult, setFilterResult] = useState(false)

    return <>
    <head>
      <title>Orders | Fastkart</title>
    </head>
    < div 
    style={{backgroundColor:"#f3f0f0",padding:" 0px 16px",display: "flex"}}
    >
        <OrdersFilter  FilterParams={FilterParams} setFilterParams={setFilterParams} />
        <OrdersRight FilterParams={FilterParams} setFilterParams={setFilterParams} />
    </div>
    </>
}