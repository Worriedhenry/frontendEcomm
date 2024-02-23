import * as React from "react";
import TextField from "@mui/material/TextField";

import { styled } from "@mui/system";

const CustomTextField = styled(TextField)(({ theme }) =>({
    // height: "30px", // Adjust the height as needed
    // "& fieldset": {
    //   border: "1px solid white",
    // },
    // "& input": {
    //   padding: "8px",
    // },

    [theme.breakpoints.down('sm')]: {
        height:"18px ",
        background:"red"
      },
  }));

export default CustomTextField;