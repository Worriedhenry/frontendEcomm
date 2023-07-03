import { FormGroup, Checkbox, FormControlLabel, Divider } from "@mui/material";
import React from "react";
import axios from 'axios';
import { useEffect ,useState } from "react";
import { useSearchParams } from "react-router-dom"; 


export default function OrdersFilter(props) {
    // const [FilterParams, setFilterParams] = useSearchParams()
    // const [FilterResult, setFilterResult] = useState(false)
    const FilterParams=props.FilterParams
    const setFilterParams=props.setFilterParams

    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

    const handleClick = (event) => {
        const { value, checked } = event.target;
        const updatedCheckboxes = checked
          ? [...selectedCheckboxes, value]
          : selectedCheckboxes.filter((checkbox) => checkbox !== value);
    
        setSelectedCheckboxes(updatedCheckboxes);
        setFilterParams({ query: updatedCheckboxes.join(',') });
      };



    return <div className="OrdersFilter">
        <h3>Filters</h3>
        <Divider />
        <div>
            <h4>Order Status</h4>
            <FormGroup size="small">
                <FormControlLabel control={<Checkbox value="On the way" checked={selectedCheckboxes.includes('On the way')} onChange ={handleClick} /> } label="On the way" />
                <FormControlLabel control={<Checkbox value="Delivered"  checked={selectedCheckboxes.includes('Delivered')} onChange={handleClick} /> } label="Delivered" />
                <FormControlLabel control={<Checkbox  value="Cancelled" checked={selectedCheckboxes.includes('Cancelled')} onChange={handleClick} /> } label="Cancelled" />
                <FormControlLabel control={<Checkbox value="Returned" checked={selectedCheckboxes.includes('Returned')} onChange={handleClick} /> } label="Returned" />
            </FormGroup>
        </div>
        <div>
            <h4>ORDER TIME</h4>
            <FormGroup>
                <FormControlLabel control={<Checkbox value="Last 30 days" checked={selectedCheckboxes.includes('Last 30 days')}  onChange ={handleClick} />} label="Last 30 days" />
                <FormControlLabel control={<Checkbox value="2022" checked={selectedCheckboxes.includes('2022')} />}  onChange ={handleClick} label="2022" />
                <FormControlLabel control={<Checkbox value="2021" checked={selectedCheckboxes.includes('2021')} />}  onChange ={handleClick} label="2021" />
                <FormControlLabel control={<Checkbox value="2020" checked={selectedCheckboxes.includes('2020')}  />}  onChange ={handleClick} label="2020" />
                <FormControlLabel control={<Checkbox value="Older" checked={selectedCheckboxes.includes('Older')} />}  onChange ={handleClick} label="Older" />
            </FormGroup>
        </div>


    </div>
}