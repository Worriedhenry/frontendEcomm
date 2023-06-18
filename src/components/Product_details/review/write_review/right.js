import React, { useState } from "react"
import { Rating, Snackbar, Button, Alert } from "@mui/material"
import { useParams,useNavigate } from "react-router-dom"
import axios from "axios"
function Right() {
    const [RatingValue, setRatingValue] = useState(null);
    const [Description, setDescription] = useState("")
    const [SnackbarSuccessController, setSuccessSnackbarControl] = useState(false)
    const [Title, setTitle] = useState("")
    const ProductId = useParams().ProductId
    const navigate=useNavigate()
    const handleSubmit = () => {
        console.log(ProductId)
        axios
            .post("http://localhost:3001/review/addNew/" + ProductId, { Rating:RatingValue, Description, Title })
            .then(res => {
                if (res.status === 200) {
                    setSuccessSnackbarControl(true)
                    setTimeout(() => {
                        navigate("/viewproduct/"+ProductId)
                    }, 1000);
                }
            })
            .catch(err => console.error(err));
    }

    return (
        <div>

            <div style={{ marginLeft: "15px", marginRight: "15px" }}>
                <div style={{ border: "1px solid #f0f0f0" }}>
                    <div style={{ padding: "24px", width: "100%", borderBottom: "1px solid #f0f0f0" }}>
                        <div style={{ marginBottom: "6px", fontWeight: "600" }}>
                            <span style={{ fontSize: "18x", letterSpacing: "0.1rem" }}>Rate this product</span>
                        </div>
                        <Rating 
                         name="simple-controlled"
                         value={RatingValue}
                         onChange={(event, newValue) => {
                           setRatingValue(newValue);
                         }}
                        />
                    </div>
                    <div style={{ width: "100%" }}>
                        <div style={{ padding: "24px", paddingTop: "15px" }}>
                            <h3 style={{ fontSize: "18px" }}>Review this product</h3>
                            <form>
                                <textarea rows="9" cols="110" style={{ borderStyle: "dotted", resize: "none", fontSize: "15px" }} placeholder="Description" required onChange={(e) => setDescription(e.target.value)} >

                                </textarea>
                                <textarea rows="3" cols="110" style={{ borderStyle: "dotted", resize: "none", fontSize: "15px" }} placeholder="Title (Optional)" required onChange={(e) => setTitle(e.target.value)}>

                                </textarea>
                                <br></br>
                                <Button style={{ backgroundColor: "rgb(255, 173, 51)", color: "#f0f0f0" }} variant="filled" onClick={handleSubmit}>Submit</Button>

                            </form>
                        </div>
                    </div>


                </div>
            </div>
            <Snackbar
                open={SnackbarSuccessController}
                autoHideDuration={3000}
                onClose={() => setSuccessSnackbarControl(false)}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
                <Alert onClose={() => setSuccessSnackbarControl(false)} severity="success" sx={{ width: '100%' }}>
                    Review Added Successfully
                </Alert>
            </Snackbar>
        </div>

    )
}
export default Right;