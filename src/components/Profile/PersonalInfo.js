import React, { useEffect, useState } from "react";
import { Button, Divider, TextField ,Radio,FormControlLabel,RadioGroup,Snackbar,Alert} from "@mui/material"
import axios from "axios";
import {useParams} from "react-router-dom"
const FlexDisplayStyle={
    display:"flex"
}

export default function PersonalInfo(){
    const [PersonalData,setPersonalData]=useState(false)
    const [EmailData,setEmailData]=useState(false)
    const [PhoneData,setPhoneData]=useState(false)
    const [FirstName,setFirstName]=useState("")
    const [LastName,setLastName]=useState("")
    const [Email,setEmail]=useState("")
    const [Phone,setPhone]=useState("")
    const [Gender,setGender]=useState("")
    const [SuccessSnackbarControl,setSuccessSnackbarControl]=useState(false)
    const [ErrorSnackbarControl,setErrorSnackbarControl]=useState(false)

    const params=useParams()
    useEffect(()=>{
        axios
          .get("http://localhost:3001/account/getuserInfo/"+params.UserId)
          .then(res => {
            console.log(res.data)
            setFirstName(res?.data.FirstName)
            setLastName(res?.data.LastName)
            setEmail(res?.data.Email)
            setPhone(res?.data.Phone)
            setGender(res?.data.Gender)
          })
          .catch(err => console.error(err));
    },[]);
    const UpdateName=async ()=>{
        if(FirstName.length===0){
            return setErrorSnackbarControl(true)
        }
        if (LastName.length===0){
            return setErrorSnackbarControl(true)
        }
        let result=await axios.put("http://localhost:3001/account/updateName/"+params.UserId,{FirstName,LastName})
        if (result.status===200){
            setSuccessSnackbarControl(true)
        }
    }
    const UpdateEmail=async ()=>{
        if(Email.length===0){
            return setErrorSnackbarControl(true)
        }
        let result=await axios.put("http://localhost:3001/account/updateEmail/"+params.UserId,{Email})
        if (result.status===200){
            setSuccessSnackbarControl(true)
        }
    }

    const UpdatePhone=async ()=>{
        if(Phone.length===0){
            return setErrorSnackbarControl(true)
        }
        let result=await axios.put("http://localhost:3001/account/updatePhone/"+params.UserId,{Phone})
        if (result.status===200){
            setSuccessSnackbarControl(true)
        }
    }


    return <div className="RightProfile">
    <div className="Profile-TopRight">
        <span style={{ fontSize: "18px", paddingTop: "15px" }}><b>Personal Information</b></span>
        <Button onClick={()=> setPersonalData(!PersonalData)}>{ PersonalData ? "cancle" :"edit"}</Button>
        <p></p>
        <div style={FlexDisplayStyle}>
        <TextField  variant="filled" size="small" sx={{ mr: 7, width: "300px" }} label={ PersonalData && "First name" } disabled={ PersonalData ? false :true} onChange={(e)=>setFirstName(e.target.value)} value={FirstName} />
        <TextField variant="filled" size="small" sx={{ mr: 7, width: "300px" }} label={ PersonalData && "Last name" } disabled={ PersonalData ? false :true} onChange={(e)=>setLastName(e.target.value)}  value={LastName} />
        { PersonalData && <Button onClick={UpdateName} variant="contained">Save</Button>}
        </div>
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
        <div style={FlexDisplayStyle}>
        <TextField variant="filled" label={ EmailData && "Email Address" }  size="small" sx={{ mr: 7, width: "300px" }}  disabled={ EmailData ? false :true} onChange={(e)=>setEmail(e.target.value)} value={Email} />
        { EmailData && <Button onClick={UpdateEmail} variant="contained">Save</Button>}
        </div>
        <p style={{ paddingTop: "28px" }}><span style={{ fontSize: "18px", paddingTop: "35px" }}><b>Mobile Number</b></span>
        <Button onClick={()=> setPhoneData(!PhoneData)}>{ PhoneData ? "cancle" :"edit"}</Button>
        </p>
        <div style={FlexDisplayStyle}>
        <TextField variant="filled" label={ PhoneData && "Mobile number" } onChange={(e)=>setPhone(e.target.value)} size="small" sx={{ mr: 7, width: "300px" }} disabled={ PhoneData ? false :true} value={Phone} />
        { PhoneData && <Button onClick={UpdatePhone} variant="contained">Save</Button>}
        </div>
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