import React from 'react'
import { Dialog } from '@mui/material'
import { AuthContext } from '../../Context/AuthContext'
import SignUp from "../SignUp"
export default function SignDialog() {
    const Context = React.useContext(AuthContext)
    const { LoginOpen, setLoginOpen, SignOpen, setSignOpen } = Context
    return (
        <Dialog
            fullWidth
            open={SignOpen}
            onClose={() => setSignOpen(false)}
            sx={{
                "& .MuiDialog-container": {
                    "& .MuiPaper-root": {
                        width: "fit-content",
                        maxWidth: "70vw", 
                        minWidth: "50vw",
                        height: "100%",
                        maxHeight: "80vh"
                    },
                },
            }}

        >
            <SignUp />
        </Dialog>
    )
}