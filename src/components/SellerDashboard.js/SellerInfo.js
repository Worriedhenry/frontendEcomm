import React, { useEffect, useState } from "react";
import { Button, Divider, TextField, Snackbar, Alert } from "@mui/material"
import { useParams,useNavigate } from "react-router-dom"
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";
export default function SellerInfo() {
    const [PersonalData, setPersonalData] = useState(false)
    const [BuisnessData, setBuisnessData] = useState(false)
    const [EmailData, setEmailData] = useState(false)
    const [GSTIN, setGSTIN] = useState(false)
    const {setSellerValid}=React.useContext(AuthContext)
    const [PhoneData, setPhoneData] = useState(false)
    const [BuisnessLocation, setBuisnessLocation] = useState(false)
    const [FirstName, setFirstName] = useState("")
    const [LastName, setLastName] = useState("")
    const [Email, setEmail] = useState("")
    const [Phone, setPhone] = useState("")
    const [StoreName, setStoreName] = useState("")
    const [StoreLocation, setStoreLocation] = useState("")
    const [GSTINValue, setGSTINValue] = useState("")
    const [SuccessSnackbarControl, setSuccessSnackbarControl] = useState(false)
    const [ErrorSnackbarControl, setErrorSnackbarControl] = useState(false)
    const navigate=useNavigate()
    const params = useParams()
    useEffect(() => {
        console.log(params.SellerId)
        axios
            .get("http://localhost:3001/admin/info/" + params.SellerId)
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

    }, []);
    const UpdateSellerName = async () => {
        if (FirstName.length === 0 || LastName.length === 0) {
            return setErrorSnackbarControl(true)
        }
        if (LastName.length === 0) {
            return setErrorSnackbarControl(true)
        }
        let result = await axios.put("http://localhost:3001/admin/updateSellerName/" + params.SellerId, { FirstName, LastName })
        if (result.status === 200) {
            setSuccessSnackbarControl(true)
        }
    }
    const UpdateSellerEmail = async () => {
        if (Email.length === 0) {
            return setErrorSnackbarControl(true)
        }
        let result = await axios.put("http://localhost:3001/admin/updateSellerEmail/" + params.SellerId, { Email })
        if (result.status === 200) {
            setSuccessSnackbarControl(true)
        }
    }

    const UpdateSellerPhone = async () => {
        if (Phone.length === 0) {
            return setErrorSnackbarControl(true)
        }
        try {
            let result = await axios.put("http://localhost:3001/admin/updateSellerPhone/" + params.SellerId, { PhoneNumber: Phone })
            if (result.status === 200) {
                setSuccessSnackbarControl(true)
            }
        } catch (err) {
            console.log(err)
        }
    }
    const updateStoreLocation = async () => {
        if (StoreLocation.length === 0) {
            return setErrorSnackbarControl(true)
        }
        try {
            let result = await axios.put("http://localhost:3001/admin/updateStoreLocation/" + params.SellerId, { StoreLocation })
            if (result.status === 200) {
                setSuccessSnackbarControl(true)
            }
        } catch (err) {
            console.log(err)
        }
    }
    const updateStoreName = async () => {
        if (StoreName.length === 0) {
            return setErrorSnackbarControl(true)
        }
        let result = await axios.put("http://localhost:3001/admin/updateStoreName/" + params.SellerId, { StoreName })
        console.log(result)
        if (result.status === 200) {
            setSuccessSnackbarControl(true)
        }
    }
    const HnadleSellerLogOut=()=>{
        localStorage.removeItem("SellerToken")
        setSellerValid(false)
        navigate("/seller/login")
    }
    return <div style={{ width: "100%", background: "white", padding: "2vw" }}>
        <div className="Profile-TopRight">
            <h3 style={{ paddingTop: "2vw" }}><b>Seller Information</b>
                <Button onClick={() => setPersonalData(!PersonalData)}>{PersonalData ? "cancle" : "edit"}</Button>
            </h3>
            <TextField variant="filled" size="small" sx={{ mr: 7 }} onChange={(e)=>setFirstName(e.target.value)} label={PersonalData && "First name"} disabled={PersonalData ? false : true} value={FirstName} />
            <TextField variant="filled" size="small" onChange={(e)=>setLastName(e.target.value)} sx={{ mr: 7}} label={PersonalData && "Last name"} disabled={PersonalData ? false : true} value={LastName} />
            {PersonalData && <Button variant="contained" onClick={UpdateSellerName}>Save</Button>}
            <p></p>
            <h3 style={{ fontSize: "18px", paddingTop: "15px" }}>Buisness Information
                <Button onClick={() => setBuisnessData(!BuisnessData)}>{BuisnessData ? "cancle" : "edit"}</Button>
            </h3>
            <TextField variant="filled" size="small" sx={{ mr: 7 }} label={BuisnessData && "Buisness name"} disabled={BuisnessData ? false : true} onChange={(e) => setStoreName(e.target.value)} value={StoreName} />
            {BuisnessData && <Button onClick={updateStoreName} variant="contained">Save</Button>}
            <h3>Buisness Location <Button onClick={() => setBuisnessLocation(!BuisnessLocation)}>{BuisnessLocation ? "cancle" : "edit"}</Button></h3>
            <TextField variant="filled" size="small" sx={{ mr: 7}} label={BuisnessData && "Buisness Location"} onChange={(e) => setStoreLocation(e.target.value)} disabled={BuisnessLocation ? false : true} value={StoreLocation} />
            {BuisnessLocation && <Button onClick={updateStoreLocation} variant="contained">Save</Button>}

            <h3 style={{ paddingTop: "28px" }}>Email Address
                <Button onClick={() => setEmailData(!EmailData)}>{EmailData ? "cancle" : "edit"}</Button>
            </h3>
            <TextField variant="filled" label={EmailData && "Email Address"} size="small" sx={{ mr: 7}} disabled={EmailData ? false : true} onChange={(e) => setEmail(e.target.value)} value={Email} />
            {EmailData && <Button variant="contained" onClick={UpdateSellerEmail}>Save</Button>}
            <h3 style={{ paddingTop: "28px" }}>
                GSTIN
            </h3>
            <TextField variant="filled" size="small" sx={{ mr: 7 }} disabled value={GSTINValue} />
            <h3 style={{ paddingTop: "28px" }}>
                Mobile Number
                <Button onClick={() => setPhoneData(!PhoneData)}>{PhoneData ? "cancle" : "edit"}</Button>
            </h3>
            <TextField variant="filled" label={PhoneData && "Mobile number"} size="small" sx={{ mr: 7}} disabled={PhoneData ? false : true} onChange={(e) => setPhone(e.target.value)} value={Phone} />
            {PhoneData && <Button onClick={UpdateSellerPhone} variant="contained">Save</Button>}
        </div>
        <div className="Profile-TopBottom">
            <h3>FAQ</h3>
            <h5 style={{fontSize:"small"}}>What happens when I update my email address (or mobile number)?</h5>
            <p style={{fontSize:"small"}}>Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).</p>
            <h5>When will my Flipkart account be updated with the new email address (or mobile number)?</h5>
            <p style={{fontSize:"small"}}>It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.</p>
            <h5>What happens to my existing Flipkart account when I update my email address (or mobile number)?</h5>
            <p style={{fontSize:"small"}}>Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional. You'll continue seeing your Order history, saved information and personal details.</p>
            <h5 >Does my Seller account get affected when I update my email address?</h5>
            <p style={{fontSize:"small"}}>Flipkart has a 'single sign-on' policy. Any changes will reflect in your Seller account also. </p>
            <Button onClick={HnadleSellerLogOut}>Logout</Button>
        </div>
        <Snackbar
            open={ErrorSnackbarControl}
            autoHideDuration={3000}
            onClose={() => setErrorSnackbarControl(false)}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
            <Alert onClose={() => setSnackbarControl(false)} severity="error" sx={{ width: '100%' }}>
                Fields cannot be Empty
            </Alert>
        </Snackbar>
        <Snackbar
            open={SuccessSnackbarControl}
            autoHideDuration={3000}
            onClose={() => setSuccessSnackbarControl(false)}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
            <Alert onClose={() => setSnackbarControl(false)} severity="success" sx={{ width: '100%' }}>
                Fields Updated Successfully
            </Alert>
        </Snackbar>

    </div>
}