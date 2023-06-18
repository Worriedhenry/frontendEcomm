import { createContext, useEffect, useState } from "react";
import axios from "axios"
const AuthContext=createContext()

const AuthState= ({children})=>{
    const [Valid,setValid] =useState(false)
    const [LoginOpen,setLoginOpen]=useState(false)
    const [SignOpen,setSignOpen]=useState(false)
    const [Next,setNext]=useState("/")
    const [Cart,setCart]=useState([])
    const [Address,setAddress]=useState(null)
    useEffect(()=>{
        if (localStorage.getItem("token")){
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
              }
              try{
            axios
              .post("http://localhost:3001/jwt",{token:localStorage.getItem("token")})
              .then(res =>{
                if (res.status==200){
                    console.log(res.data)
                    setValid(res.data.id)
                }
              } )
              .catch(err => console.error(err));}
              catch(err){
                console.log(err)
              }
        }
    },[])
    return (
        <AuthContext.Provider value={{Valid,setValid,LoginOpen,setLoginOpen,SignOpen,setSignOpen,Next,setNext,Cart,setCart,Address,setAddress}}>
            {children}
        </AuthContext.Provider>
    )
}
export {AuthState,AuthContext}