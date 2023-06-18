import {styled,Typography} from "@mui/material"
const StyledTypography = styled(Typography)(({ theme }) => ({
  
    [theme.breakpoints.down('sm')]: {
      fontSize:"8px", 
      padding:"1px",
      MaxWidth:"100%"
    },
  }));

export default StyledTypography