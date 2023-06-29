import React, { useState } from "react"

const SellerContext=React.createContext()

function SellerState({children}) {

    const [Phone,setPhone]=useState(0)
    const [EmailId,setEmailId]=useState()
    const [GSTIN,setGSTIN]=useState()

    return(
        <SellerContext.Provider value={{Phone,setPhone,EmailId,setEmailId,GSTIN,setGSTIN}}>
            {children}
        </SellerContext.Provider>
    )
}
export {SellerContext,SellerState}