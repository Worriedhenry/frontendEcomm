import React,{useState} from "react"

const SnackbarContext=React.createContext()

const SnackbarState=({children})=>{
    const [Phone,setPhone]=useState(0)
    const [EmailId,setEmailId]=useState()
    const [GSTIN,setGSTIN]=useState()

    return (
        <SnackbarContext.Provider  value={{Phone,setPhone,EmailId,setEmailId,GSTIN,setGSTIN}} >
            {children}
        </SnackbarContext.Provider>
    )

}

export {SnackbarContext,SnackbarState}