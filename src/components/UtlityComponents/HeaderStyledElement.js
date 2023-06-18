import {styled,Grid,Typography,Button,Paper} from "@mui/material"
const GridItem = styled(Grid)(({ theme }) => ({
    justifyContent :"center",
    
    [theme.breakpoints.down('sm')]: {
  
      justifyContent: 'center',
    },
  }));
  const InputPaper = styled(Paper)(({ theme }) => ({
    
    [theme.breakpoints.down('sm')]: {
      height:"18px"
      
    },
  }));
  const StyledButton = styled(Button)(({ theme }) => ({
      [theme.breakpoints.down('sm')]: { 
          padding:"1px",
          width:"100%"
        },
    }));
  const StyledTypography = styled(Typography)(({ theme }) => ({
      fontSize: "14px",
      fontWeight:"bold" ,
    
      [theme.breakpoints.down('sm')]: {
        fontSize:"8px", 
        padding:"1px",
        MaxWidth:"100%"
      },
     
    }));
export {StyledTypography,StyledButton,InputPaper,GridItem}  