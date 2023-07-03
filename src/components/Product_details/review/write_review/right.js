import React, { useState } from "react"
import { Rating, Snackbar, Button, Alert } from "@mui/material"
import { useParams, useNavigate } from "react-router-dom"
import { AuthContext } from "../../../../Context/AuthContext"
import BackendLink from "../../../../data_resourses/BackendLink"
import axios from "axios"
function Right() {
    const [RatingValue, setRatingValue] = useState(null);
    const [Description, setDescription] = useState("")
    const [SnackbarSuccessController, setSuccessSnackbarControl] = useState(false)
    const [SnackbarErrorController, setErrorSnackbarControl] = useState(false)
    const [Title, setTitle] = useState("")
    const [ErrorMessage, setErrorMessage] = useState("An error occured")
    const ProductId = useParams().ProductId
    const { Valid } = React.useContext(AuthContext)
    const navigate = useNavigate()
    const handleSubmit = () => {
        console.log(ProductId)
        axios
            .post(BackendLink+"/review/addNew/" + ProductId, { Rating: RatingValue, Description, Title, ProductId, CustomerId: Valid })
            .then(res => {
                if (res.status === 200) {
                    setSuccessSnackbarControl(true)

                }
                else if (res.status == 202) {
                    setErrorMessage(res.data)
                    setErrorSnackbarControl(true)

                }
            })
            .catch(err => {
                setErrorSnackbarControl(true)
                console.error(err)
            });
        setTimeout(() => {
            navigate("/viewproduct/" + ProductId)
        }, 3000);
    }

    return (
        <div>

            <div style={{ marginLeft: "15px", marginRight: "15px" }}>
                <div style={{ border: "1px solid #f0f0f0" }}>
                    <div style={{ padding: "24px", width: "90%", borderBottom: "1px solid #f0f0f0" }}>
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
                    <div style={{ width: "90%" }}>
                        <div style={{ padding: "24px", paddingTop: "15px" }}>
                            <h3 style={{ fontSize: "18px" }}>Review this product</h3>
                            <form>
                                <textarea rows="9" style={{ borderStyle: "dotted", resize: "none", fontSize: "small", width: "90%" }} placeholder="Description" required onChange={(e) => setDescription(e.target.value)} >

                                </textarea>
                                <textarea rows="3" style={{ borderStyle: "dotted", resize: "none", fontSize: "small", width: "90%" }} placeholder="Title (Optional)" required onChange={(e) => setTitle(e.target.value)}>

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
            <Snackbar
                open={SnackbarErrorController}
                autoHideDuration={3000}
                onClose={() => setErrorSnackbarControl(false)}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
                <Alert onClose={() => setSuccessSnackbarControl(false)} severity="error" sx={{ width: '100%' }}>
                    {ErrorMessage}
                </Alert>
            </Snackbar>
        </div>

    )
}
export default Right;