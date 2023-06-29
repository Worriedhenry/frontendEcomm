import React, { useState } from "react";
import { OrderContext } from '../../Context/OrderContext';
import {
  TextField,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const PlaceOrderPage = () => {

  const [deliveryType, setDeliveryType] = useState("home");
  const {Name,setName,Phone,setPhone,Pincode,setPincode,Locality,setLocality,Address,setAddress,City,setCity,State,setState,Landmark,setLandmark,Alternate,setAlternate}=React.useContext(OrderContext)
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));


  return (
    <div className="place-order-container">
      <h2>Address</h2>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Mobile Number"
              value={Phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              type="tel"
              pattern="[0-9]{10}"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Pincode"
              value={Pincode}
              onChange={(e) => setPincode(e.target.value)}
              required
              type="number"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Locality"
              value={Locality}
              onChange={(e) => setLocality(e.target.value)}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Address"
              value={Address}
              onChange={(e) => setAddress(e.target.value)}
              multiline
              minRows={2}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="City/District/Town"
              value={City}
              onChange={(e) => setCity(e.target.value)}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="State"
              value={State}
              onChange={(e) => setState(e.target.value)}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Landmark (Optional)"
              value={Landmark}
              onChange={(e) => setLandmark(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Additional Phone (Optional)"
              value={Alternate}
              onChange={(e) => setAlternate(e.target.value)}
              type="tel"
              pattern="[0-9]{10}"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <RadioGroup
                row={!isMobile}
                value={deliveryType}
                onChange={(e) => setDeliveryType(e.target.value)}
              >
                <FormControlLabel
                  value="home"
                  control={<Radio />}
                  label="Home(all day delivery )"
                />
                <FormControlLabel
                  value="office"
                  control={<Radio />}
                  label="Work( 10AM - 5PM delivery )"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>

          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default PlaceOrderPage;
