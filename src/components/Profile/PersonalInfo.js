import React from "react";
import { Button, Divider, TextField ,Radio,FormControlLabel,RadioGroup} from "@mui/material"
export default function PersonalInfo(){
    return <div className="RightProfile">
    <div className="Profile-TopRight">
        <span style={{ fontSize: "18px", paddingTop: "15px" }}><b>Personal Information</b></span>
        <Button>Edit</Button>
        <p></p>
        <TextField size="small" sx={{ mr: 7, width: "300px" }} disabled value="First Name" />
        <TextField disabled
            value="Last Name"
            size="small"
            sx={{
                width: "300px"
            }}
        />
        <Button variant="contained">SAVe</Button>
        <p>Your Gender</p>
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            row
            disabled
        >
            <FormControlLabel disabled value="female" control={<Radio />} label="Female" />
            <FormControlLabel disabled value="male" control={<Radio />} label="Male" />
            <FormControlLabel disabled value="other" control={<Radio />} label="Other" />
        </RadioGroup>
        <p style={{ paddingTop: "28px" }}><span style={{ fontSize: "18px", paddingTop: "35px" }}><b>Email Address</b></span>
        <Button>Edit</Button>
        </p>
        <TextField size="small" sx={{ mr: 7, width: "300px" }} disabled value="xyz@gmail.com" />
        <p style={{ paddingTop: "28px" }}><span style={{ fontSize: "18px", paddingTop: "35px" }}><b>Mobile Number</b></span>
        <Button>Edit</Button>
        </p>
        <TextField size="small" sx={{ mr: 7, width: "300px" }} disabled value="xxxxxx1234" />
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