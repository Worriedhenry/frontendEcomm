import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import StarsIcon from '@mui/icons-material/Stars';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CopyrightIcon from '@mui/icons-material/Copyright';
import React from 'react';
import { Button } from '@mui/material';

export default function(){



    return <div className='Footer'>
        <Button startIcon={<ShoppingBagIcon/>}>Become a seller</Button>
        <Button startIcon={<StarsIcon/>}>Advertise</Button>
        <Button startIcon={<CardGiftcardIcon/>}>Gift</Button>
        <Button startIcon={<HelpOutlineIcon/>}>Help Center</Button>
        <Button startIcon={<ShoppingBagIcon/>}>2013-2023 CumKart</Button>

    </div>
}