import { createContext, useEffect, useState } from "react";
import axios from "axios"
import BackendLink from "../data_resourses/BackendLink";
const AuthContext=createContext()

const AuthState= ({children})=>{
    const [Valid,setValid] =useState(false)
    const [LoginOpen,setLoginOpen]=useState(false)
    const [SignOpen,setSignOpen]=useState(false)
    const [Next,setNext]=useState("/")
    const [Loading,setLoading]=useState(true)
    const [SellerValid,setSellerValid]=useState(false)
    const [searchSuggestion,setSearchSuggestion]=useState([])
    useEffect(()=>{
        if (localStorage.getItem("token")){
              try{
            axios
              .post(BackendLink+"/jwt",{token:localStorage.getItem("token")})
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
            .post(BackendLink+"/sellerAuth",{token:localStorage.getItem("SellerToken")})
            .then(res =>{
                if(res.status==200){
                  console.log(res.data)
                  setSellerValid(res.data.id)
                }
            } )
            .catch(err => console.error(err));
        }
    },[])
    useEffect(()=>{
      axios
        .get(BackendLink+"/getsearchsuggestion")
        .then(res =>{
          setSearchSuggestion(res.data)
        } )
        .catch(err => console.error(err));
    },[])
    return (
        <AuthContext.Provider value={{Valid,setValid,LoginOpen,setLoginOpen,SignOpen,setSignOpen,Next,setNext,Loading,setLoading,SellerValid,setSellerValid,searchSuggestion}}>
            {children}
        </AuthContext.Provider>
    )
}
export {AuthState,AuthContext}