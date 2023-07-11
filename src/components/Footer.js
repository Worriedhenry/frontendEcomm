import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { StyledTypography, InputPaper, StyledButton, GridItem } from "./UtlityComponents/HeaderStyledElement";
export default function(){



    return <div className='Footer'>
        <StyledButton onClick={()=>navigate("/seller/register")} startIcon={<ShoppingBagIcon/>}>< StyledTypography>Become a seller</StyledTypography></StyledButton>
        <StyledButton startIcon={<ShoppingBagIcon/>}>< StyledTypography>2022-2023 Fastkart</StyledTypography></StyledButton>
        <StyledButton onClick={()=>window.open('https://github.com/Worriedhenry/frontendEcomm', '_blank')} >< StyledTypography>Contribute</StyledTypography></StyledButton>

    </div>
}