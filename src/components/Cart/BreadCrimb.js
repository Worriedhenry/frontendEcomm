import { Link, Typography ,Breadcrumbs} from '@mui/material'
import React from 'react'

export default function Breadcrumb(){

    return <div style={{backgroundColor:"#f3f0f0",padding:"26px 56px 1px"}}>
    <Breadcrumbs aria-label="breadcrumb">
  <Link underline="hover" color="inherit" href="/">
    home
  </Link>
  <Typography color="text.primary">Cart</Typography>
</Breadcrumbs>
    </div>
}
