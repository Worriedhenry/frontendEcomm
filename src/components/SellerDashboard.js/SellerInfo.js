import React, { useEffect, useState } from "react";
import { Button, Divider, TextField, Radio, FormControlLabel, RadioGroup } from "@mui/material"
import {useParams} from "react-router-dom"
import axios from "axios";
export default function SellerInfo() {
    const [PersonalData, setPersonalData] = useState(false)
    const [BuisnessData, setBuisnessData] = useState(false)
    const [EmailData, setEmailData] = useState(false)
    const [GSTIN, setGSTIN] = useState(false)
    const [PhoneData, setPhoneData] = useState(false)
    const [FirstName, setFirstName] = useState("")
    const [LastName, setLastName] = useState("")
    const [Email, setEmail] = useState("")
    const [Phone, setPhone] = useState("")
    const [StoreName,setStoreName]=useState("")
    const [StoreLocation,setStoreLocation]=useState("")
    const [GSTINValue,setGSTINValue]=useState("")

    const params=useParams()
    useEffect(() => {
        axios
            .get("http://localhost:3001/admin/info/"+params.SellerId)
            .then(res => {
                setGender(res?.Gender)
                setFirstName(res?.FirstName)
                setLastName(res?.LastName)
                setEmail(res?.Email)
                setPhone(res?.PhoneNumber)
                setGSTINValue(res?.GSTIN)
                setStoreLocation(res.StoreLocation)
                setStoreName(res?.StoreName)
            })
            .catch(err => console.error(err));

    });
    const UpdatePersonalData =()=>{}

    return <div className="RightProfile">
        <div className="Profile-TopRight">
            <span style={{ fontSize: "18px", paddingTop: "15px" }}><b>Seller Information</b></span>
            <Button onClick={() => setPersonalData(!PersonalData)}>{PersonalData ? "cancle" : "edit"}</Button>
            <p></p>
            <TextField variant="filled" size="small" sx={{ mr: 7, width: "300px" }} label={PersonalData && "First name"} disabled={PersonalData ? false : true} value={FirstName} />
            <TextField variant="filled" size="small" sx={{ mr: 7, width: "300px" }} label={PersonalData && "Last name"} disabled={PersonalData ? false : true} value={LastName} />
            {PersonalData && <Button variant="contained" onClick={UpdatePersonalData}>Save</Button>}
            <p></p>
            <span style={{ fontSize: "18px", paddingTop: "15px" }}><b>Buisness Information</b></span>
            <Button onClick={() => setBuisnessData(!BuisnessData)}>{BuisnessData ? "cancle" : "edit"}</Button>
            <p></p>
            <TextField variant="filled" size="small" sx={{ mr: 7, width: "300px" }} label={BuisnessData && "Buisness name"} disabled={BuisnessData ? false : true} value={StoreName} />
            <TextField variant="filled" size="small" sx={{ mr: 7, width: "300px" }} label={BuisnessData && "Buisness Location"} disabled={BuisnessData ? false : true} value={StoreLocation} />
            {BuisnessData && <Button variant="contained">Save</Button>}

            <p style={{ paddingTop: "28px" }}><span style={{ fontSize: "18px", paddingTop: "35px" }}><b>Email Address</b></span>
                <Button onClick={() => setEmailData(!EmailData)}>{EmailData ? "cancle" : "edit"}</Button>
            </p>
            <TextField variant="filled" label={EmailData && "Email Address"} size="small" sx={{ mr: 7, width: "300px" }} disabled={EmailData ? false : true} value={Email} />
            {EmailData && <Button variant="contained">Sav
                e</Button>}
            <p style={{ paddingTop: "28px" }}><span style={{ fontSize: "18px", paddingTop: "35px" }}><b>GSTIN</b></span>
                <Button onClick={() => setGSTIN(!EmailData)}>{GSTIN ? "cancle" : "edit"}</Button>
            </p>
            <TextField variant="filled" label={GSTIN && "GSTIN"} size="small" sx={{ mr: 7, width: "300px" }} disabled={!GSTIN} value={GSTINValue} />
            {GSTIN && <Button variant="contained">Save</Button>}
            <p style={{ paddingTop: "28px" }}><span style={{ fontSize: "18px", paddingTop: "35px" }}><b>Mobile Number</b></span>
                <Button onClick={() => setPhoneData(!PhoneData)}>{PhoneData ? "cancle" : "edit"}</Button>
            </p>
            <TextField variant="filled" label={PhoneData && "Mobile number"} size="small" sx={{ mr: 7, width: "300px" }} disabled={PhoneData ? false : true} value={Phone} />
            {PhoneData && <Button variant="contained">Save</Button>}
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

    </div>
}