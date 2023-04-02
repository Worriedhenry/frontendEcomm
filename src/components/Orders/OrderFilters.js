import { FormGroup, Checkbox, FormControlLabel, Divider } from "@mui/material";
import React from "react";

export default function OrdersFilter() {


    return <div className="OrdersFilter">
        <h3>Filters</h3>
        <Divider />
        <div>
            <h4>Order Status</h4>
            <FormGroup>
                <FormControlLabel control={<Checkbox />} label="On the way" />
                <FormControlLabel control={<Checkbox />} label="Delivered" />
                <FormControlLabel control={<Checkbox />} label="Cancelled" />
                <FormControlLabel control={<Checkbox />} label="Returned" />
            </FormGroup>
        </div>
        <div>
            <h4>ORDER TIME</h4>
            <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Last 30 days" />
                <FormControlLabel control={<Checkbox />} label="2022" />
                <FormControlLabel control={<Checkbox />} label="2021" />
                <FormControlLabel control={<Checkbox />} label="2020" />
                <FormControlLabel control={<Checkbox />} label="Older" />
            </FormGroup>
        </div>


    </div>
}