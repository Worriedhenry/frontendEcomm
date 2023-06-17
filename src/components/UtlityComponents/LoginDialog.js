import React from 'react'
import { Dialog } from '@mui/material'
import { AuthContext } from '../../Context/AuthContext';
import Login from '../Login';
export default function LoginDialog(){
    const Context=React.useContext(AuthContext)
    const {LoginOpen,setLoginOpen,SignOpen,setSignOpen}=Context
    return (
      <Dialog
              fullWidth
              open={LoginOpen}
              onClose={() => setLoginOpen(false)}
              sx={{
                  "& .MuiDialog-container": {
                      "& .MuiPaper-root": {
                          width: "fit-content",
                          maxWidth: "70vw",  // Set your width here
                          minWidth:"50vw",
                          height: "100%",
                          maxHeight: "80vh"
                      },
                  },
              }}
  
          >
              <Login />
          </Dialog>
    )
  }