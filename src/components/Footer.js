import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
export default function(){



    return <div className='Footer'>
        <Button onClick={()=>navigate("/seller/register")} startIcon={<ShoppingBagIcon/>}>Become a seller</Button>
        <Button startIcon={<ShoppingBagIcon/>}>2013-2023 CumKart</Button>
        <Button onClick={()=>window.open('https://github.com/Worriedhenry/frontendEcomm', '_blank')} >Contribute Code</Button>

    </div>
}