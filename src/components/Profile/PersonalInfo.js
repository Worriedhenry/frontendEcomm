import React, { useState } from "react";
import { Button, Divider, TextField ,Radio,FormControlLabel,RadioGroup} from "@mui/material"
export default function PersonalInfo(){
    const [PersonalData,setPersonalData]=useState(false)
    const [EmailData,setEmailData]=useState(false)
    const [PhoneData,setPhoneData]=useState(false)
    const [FirstName,setFirstName]=useState("")
    const [LastName,setLastName]=useState("")
    const [Email,setEmail]=useState("")
    const [Phone,setPhone]=useState("")
    const [Gender,setGender]=useState("")

    return <div className="RightProfile">
    <div className="Profile-TopRight">
        <span style={{ fontSize: "18px", paddingTop: "15px" }}><b>Personal Information</b></span>
        <Button onClick={()=> setPersonalData(!PersonalData)}>{ PersonalData ? "cancle" :"edit"}</Button>
        <p></p>
        <TextField variant="filled" size="small" sx={{ mr: 7, width: "300px" }} label={ PersonalData && "First name" } disabled={ PersonalData ? false :true} value="First Name" />
        <TextField variant="filled" size="small" sx={{ mr: 7, width: "300px" }} label={ PersonalData && "Last name" } disabled={ PersonalData ? false :true} value="Last Name" />
        { PersonalData && <Button variant="contained">SAVe</Button>}
        <p>Your Gender</p>
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            row
            disabled={ PersonalData ? false :true}
        >
            <FormControlLabel disabled={ PersonalData ? false :true} value="female" control={<Radio />} label="Female" />
            <FormControlLabel disabled={ PersonalData ? false :true} value="male" control={<Radio />} label="Male" />
            <FormControlLabel disabled={ PersonalData ? false :true} value="other" control={<Radio />} label="Other" />
        </RadioGroup>
        <p style={{ paddingTop: "28px" }}><span style={{ fontSize: "18px", paddingTop: "35px" }}><b>Email Address</b></span>
        <Button onClick={()=> setEmailData(!EmailData)}>{ EmailData ? "cancle" :"edit"}</Button>
        </p>
        <TextField variant="filled" label={ EmailData && "Email Address" }  size="small" sx={{ mr: 7, width: "300px" }}  disabled={ EmailData ? false :true} value="xyz@gmail.com" />
        { EmailData && <Button variant="contained">SAVe</Button>}
        <p style={{ paddingTop: "28px" }}><span style={{ fontSize: "18px", paddingTop: "35px" }}><b>Mobile Number</b></span>
        <Button onClick={()=> setPhoneData(!PhoneData)}>{ PhoneData ? "cancle" :"edit"}</Button>
        </p>
        <TextField variant="filled" label={ PhoneData && "Mobile number" } size="small" sx={{ mr: 7, width: "300px" }} disabled={ PhoneData ? false :true} value="xxxxxx1234" />
        { PhoneData && <Button variant="contained">SAVe</Button>}
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