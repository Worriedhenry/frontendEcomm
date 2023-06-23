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
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [pincode, setPincode] = useState("");
  const [locality, setLocality] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [landmark, setLandmark] = useState("");
  const [additionalPhone, setAdditionalPhone] = useState("");
  const [deliveryType, setDeliveryType] = useState("home");

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
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Mobile Number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
              type="tel"
              pattern="[0-9]{10}"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Locality"
              value={locality}
              onChange={(e) => setLocality(e.target.value)}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Address"
              value={address}
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
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Landmark (Optional)"
              value={landmark}
              onChange={(e) => setLandmark(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Additional Phone (Optional)"
              value={additionalPhone}
              onChange={(e) => setAdditionalPhone(e.target.value)}
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
