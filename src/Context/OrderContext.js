import React,{ createContext, useEffect, useState } from "react";
import axios from "axios"
const OrderContext=createContext()

const OrderState=({children})=>{

    const [Name,setName]=React.useState("")
    const [Phone,setPhone]=React.useState("")
    const [Pincode,setPincode]=React.useState("")
    const [Locality,setLocality]=React.useState("")
    const [Address,setAddress]=React.useState("")
    const [City,setCity]=React.useState("")
    const [State,setState]=React.useState("")
    const [Landmark,setLandmark]=React.useState("")
    const [Alternate,setAlternate]=React.useState("")
    const [AddressType,setAddressType]=React.useState("Home")

    return (
        <OrderContext.Provider value={{Name,setName,Phone,setPhone,Pincode,setPincode,Locality,setLocality,Address,setAddress,City,setCity,State,setState,Landmark,setLandmark,Alternate,setAlternate,AddressType,setAddressType}}>
            {children}
        </OrderContext.Provider>
    )
}
export {OrderContext,OrderState}