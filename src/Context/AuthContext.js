import { createContext, useEffect, useState } from "react";
import axios from "axios"
const AuthContext=createContext()

const AuthState= ({children})=>{
    const [Valid,setValid] =useState(false)
    const [LoginOpen,setLoginOpen]=useState(false)
    const [SignOpen,setSignOpen]=useState(false)
    const [Next,setNext]=useState("/")
    const [Loading,setLoading]=useState(true)
    const [SellerValid,setSellerValid]=useState(false)
    useEffect(()=>{
        if (localStorage.getItem("token")){
              try{
            axios
              .post("http://localhost:3001/jwt",{token:localStorage.getItem("token")})
              .then(res =>{
                setLoading(false)
                if (res.status==200){
                    setValid(res.data.id)
                }
              } )
              .catch(err => console.error(err));}
              catch(err){
                console.log(err)
              }
        }
        else{
          setLoading(false)
        }

        if(localStorage.getItem("SellerToken")){
          axios
            .post("http://localhost:3001/sellerAuth",{token:localStorage.getItem("SellerToken")})
            .then(res =>{
                if(res.status==200){
                  console.log(res.data)
                  setSellerValid(res.data.id)
                }
            } )
            .catch(err => console.error(err));
        }
    },[])
    return (
        <AuthContext.Provider value={{Valid,setValid,LoginOpen,setLoginOpen,SignOpen,setSignOpen,Next,setNext,Loading,setLoading,SellerValid}}>
            {children}
        </AuthContext.Provider>
    )
}
export {AuthState,AuthContext}