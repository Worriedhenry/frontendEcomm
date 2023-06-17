import React, { useEffect, useState } from "react";
import { Button, Divider, TextField,Snackbar,Alert} from "@mui/material"
import {useParams} from "react-router-dom"
import axios from "axios";
export default function SellerInfo() {
    const [PersonalData, setPersonalData] = useState(false)
    const [BuisnessData, setBuisnessData] = useState(false)
    const [EmailData, setEmailData] = useState(false)
    const [GSTIN, setGSTIN] = useState(false)
    const [PhoneData, setPhoneData] = useState(false)
    const [BuisnessLocation,setBuisnessLocation]=useState(false)
    const [FirstName, setFirstName] = useState("")
    const [LastName, setLastName] = useState("")
    const [Email, setEmail] = useState("")
    const [Phone, setPhone] = useState("")
    const [StoreName,setStoreName]=useState("")
    const [StoreLocation,setStoreLocation]=useState("")
    const [GSTINValue,setGSTINValue]=useState("")
    const [SuccessSnackbarControl,setSuccessSnackbarControl]=useState(false)
    const [ErrorSnackbarControl,setErrorSnackbarControl]=useState(false)

    const params=useParams()
    useEffect(() => {
        console.log(params.SellerId)
        axios
            .get("http://localhost:3001/admin/info/"+params.SellerId)
            .then(res => {
                setFirstName(res?.data.FirstName)
                setLastName(res?.data.LastName)
                setEmail(res?.data.Email)
                setPhone(res?.data.PhoneNumber)
                setGSTINValue(res?.data.GSTIN)
                setStoreLocation(res?.data.StoreLocation)
                setStoreName(res?.data.StoreName)
            })
            .catch(err => console.error(err));

    },[]);
    const UpdateSellerName=async ()=>{
        if(FirstName.length===0 || LastName.length===0){
            return setErrorSnackbarControl(true)
        }
        if (LastName.length===0){
            return setErrorSnackbarControl(true)
        }
        let result=await axios.put("http://localhost:3001/admin/updateSellerName/"+params.UserId,{FirstName,LastName})
        if (result.status===200){
            setSuccessSnackbarControl(true)
        }
    }
    const UpdateSellerEmail=async ()=>{
        if (Email.length===0){
            return setErrorSnackbarControl(true)
        }
        let result=await axios.put("http://localhost:3001/admin/updateSellerEmail/"+params.SellerId,{Email})
        if (result.status===200){
            setSuccessSnackbarControl(true)
        }
    }

    const UpdateSellerPhone=async ()=>{
        if (Phone.length===0){
            return setErrorSnackbarControl(true)
        }
        try{
        let result=await axios.put("http://localhost:3001/admin/updateSellerPhone/"+params.SellerId,{PhoneNumber:Phone})
        if (result.status===200){
            setSuccessSnackbarControl(true)
        }
        }catch(err){
            console.log(err)
        }
    }
    const updateStoreLocation=async ()=>{
        if (StoreLocation.length===0){
            return setErrorSnackbarControl(true)
        }
        try{
        let result=await axios.put("http://localhost:3001/admin/updateStoreLocation/"+params.SellerId,{StoreLocation})
        if (result.status===200){
            setSuccessSnackbarControl(true)
        }
        }catch(err){
            console.log(err)
        }
    }
    const updateStoreName=async ()=>{
        if (StoreName.length===0){
            return setErrorSnackbarControl(true)
        } 
        let result=await axios.put("http://localhost:3001/admin/updateStoreName/"+params.SellerId,{StoreName})
        console.log(result)
        if (result.status===200){
            setSuccessSnackbarControl(true)
        }
    }

    return <div className="RightProfile">
        <div className="Profile-TopRight">
            <span style={{ fontSize: "18px", paddingTop: "15px" }}><b>Seller Information</b></span>
            <Button onClick={() => setPersonalData(!PersonalData)}>{PersonalData ? "cancle" : "edit"}</Button>
            <p></p>
            <TextField variant="filled" size="small" sx={{ mr: 7, width: "300px" }} label={PersonalData && "First name"} disabled={PersonalData ? false : true} value={FirstName} />
            <TextField variant="filled" size="small" sx={{ mr: 7, width: "300px" }} label={PersonalData && "Last name"} disabled={PersonalData ? false : true} value={LastName} />
            {PersonalData && <Button  variant="contained" onClick={UpdateSellerName}>Save</Button>}
            <p></p>
            <span style={{ fontSize: "18px", paddingTop: "15px" }}><b>Buisness Information</b></span>
            <Button onClick={() => setBuisnessData(!BuisnessData)}>{BuisnessData ? "cancle" : "edit"}</Button>
            <p></p>
            <TextField variant="filled" size="small" sx={{ mr: 7, width: "300px" }} label={BuisnessData && "Buisness name"} disabled={BuisnessData ? false : true} onChange={(e)=>setStoreName(e.target.value)} value={StoreName} />
            {BuisnessData && <Button onClick={updateStoreName} variant="contained">Save</Button>}
            <h3>Buisness Location <Button onClick={() => setBuisnessLocation(!BuisnessLocation)}>{BuisnessLocation ? "cancle" : "edit"}</Button></h3>
            <TextField variant="filled" size="small" sx={{ mr: 7, width: "300px" }} label={BuisnessData && "Buisness Location"} onChange={(e)=>setStoreLocation(e.target.value)} disabled={BuisnessLocation ? false : true} value={StoreLocation} />
            {BuisnessLocation &&  <Button onClick={updateStoreLocation} variant="contained">Save</Button>}

            <p style={{ paddingTop: "28px" }}><span style={{ fontSize: "18px", paddingTop: "35px" }}><b>Email Address</b></span>
                <Button onClick={() => setEmailData(!EmailData)}>{EmailData ? "cancle" : "edit"}</Button>
            </p>
            <TextField variant="filled" label={EmailData && "Email Address"} size="small" sx={{ mr: 7, width: "300px" }} disabled={EmailData ? false : true} onChange={(e)=>setEmail(e.target.value)} value={Email} />
            {EmailData && <Button variant="contained" onClick={UpdateSellerEmail}>Save</Button>}
            <p style={{ paddingTop: "28px" }}><span style={{ fontSize: "18px", paddingTop: "35px" }}><b>GSTIN</b></span>
            </p>
            <TextField variant="filled"  size="small" sx={{ mr: 7, width: "300px" }} disabled value={GSTINValue} />
            <p style={{ paddingTop: "28px" }}><span style={{ fontSize: "18px", paddingTop: "35px" }}><b>Mobile Number</b></span>
                <Button onClick={() => setPhoneData(!PhoneData)}>{PhoneData ? "cancle" : "edit"}</Button>
            </p>
            <TextField variant="filled" label={PhoneData && "Mobile number"} size="small" sx={{ mr: 7, width: "300px" }} disabled={PhoneData ? false : true} onChange={(e)=>setPhone(e.target.value)} value={Phone} />
            {PhoneData && <Button onClick={UpdateSellerPhone} variant="contained">Save</Button>}
        </div>
        <div className="Profile-TopBottom">
            <h3>FAQ</h3>
            <h5>What happens when I update my email address (or mobile number)?</h5>
            <p>Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).</p>
            <h5>When will my Flipkart account be updated with the new email address (or mobile number)?</h5>
            <p>It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.</p>
            <h5>What happens to my existing Flipkart account when I update my email address (or mobile number)?</h5>
            <p>Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional. You'll continue seeing your Order history, saved information and personal details.</p>
            <h5>Does my Seller account get affected when I update my email address?</h5>
            <p>Flipkart has a 'single sign-on' policy. Any changes will reflect in your Seller account also. </p>
            <Button>Deactivate Account</Button>
        </div>
        <Snackbar
      open={ErrorSnackbarControl}
      autoHideDuration={3000}
      onClose={()=>setErrorSnackbarControl(false)}
      anchorOrigin={{vertical:"bottom",horizontal: "center"}}
      >
      <Alert onClose={()=>setSnackbarControl(false)} severity="error" sx={{ width: '100%' }}>
        Fields cannot be Empty
      </Alert>
    </Snackbar>
    <Snackbar
      open={SuccessSnackbarControl}
      autoHideDuration={3000}
      onClose={()=>setSuccessSnackbarControl(false)}
      anchorOrigin={{vertical:"bottom",horizontal: "center"}}
      >
      <Alert onClose={()=>setSnackbarControl(false)} severity="success" sx={{ width: '100%' }}>
        Fields Updated Successfully
      </Alert>
    </Snackbar>

    </div>
}