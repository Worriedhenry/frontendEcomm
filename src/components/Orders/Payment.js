import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Button, Typography, Box, Paper, MenuItem
} from '@mui/material';
import { OrderContext } from '../../Context/OrderContext';
import { AuthContext } from '../../Context/AuthContext';
import { CartContext } from '../../Context/CartContext';
import axios from "axios"
import { useParams } from 'react-router-dom';
const Payment = () => {
  const navigate = useNavigate()
  const ProductId = useParams().ProductId
  const [selectedOption, setSelectedOption] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [upiId, setUpiId] = useState('');
  const { Valid } = React.useContext(AuthContext)
  const {Products}=React.useContext(CartContext)
  const { Name, setName, Phone, setPhone, Pincode, setPincode, Locality, setLocality, Address, setAddress, City, setCity, State, setState, Landmark, setLandmark, Alternate, setAlternate, AddressType, setAddressType } = React.useContext(OrderContext)




  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleCardHolderNameChange = (e) => {
    setCardHolderName(e.target.value);
  };

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  const handleExpiryMonthChange = (e) => {
    setExpiryMonth(e.target.value);
  };

  const handleExpiryYearChange = (e) => {
    setExpiryYear(e.target.value);
  };

  const handleUpiIdChange = (e) => {
    setUpiId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const OrderedId=[]
    var OrderValue=0
    var OrderMRPvalue=0
    Products.map((ele)=>{
      OrderedId.push(ele._id)
      OrderValue+=ele.ProductSellingPrice
      OrderMRPvalue+=ele.ProductMRP
    })
    console.log(OrderedId,OrderMRPvalue,OrderValue)
    let res =await axios.post("http://localhost:3001/orders/new", { Name, Phone, CustomerId: Valid, OrderDestination: Address + "," + Locality + "," + City + "," + State + "," + Pincode + "," + " , Near" + Landmark, AlternatePhone: Alternate, Ordereditem:OrderedId, OrderValue, OrderMRPvalue })
    console.log(res)
  };
  React.useEffect(() => {
    console.log(selectedOption)
  })
  return (
    <div style={{ maxWidth: '70%', margin: '0 auto', padding: '20px' }}>
      <Typography variant="h6" align="center" gutterBottom>
        Payment Options
      </Typography>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <form onSubmit={handleSubmit}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Select Payment Method:</FormLabel>
            <RadioGroup name="paymentMethod" defaultValue="COD" value={selectedOption} onChange={handleOptionChange}>
              <FormControlLabel default value="COD" control={<Radio />} label="Cash on Delivery" />
              <FormControlLabel value="upi" control={<Radio />} label="UPI" />
              <FormControlLabel value="credit_card" control={<Radio />} label="Credit Card" />
              <FormControlLabel value="debit_card" control={<Radio />} label="Debit Card" />
            </RadioGroup>
          </FormControl>
          {selectedOption === 'credit_card' || selectedOption === 'debit_card' ? (
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  label="Card Holder Name"
                  value={cardHolderName}
                  onChange={handleCardHolderNameChange}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  label="Card Number"
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField type="text" label="CVV" value={cvv} onChange={handleCvvChange} required fullWidth />
              </Grid>
              <Grid item xs={6}>
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <TextField
                      select
                      label="Expiry Month"
                      value={expiryMonth}
                      onChange={handleExpiryMonthChange}
                      fullWidth
                      required
                    >
                      <MenuItem value="01">1</MenuItem>
                      <MenuItem value="02">2</MenuItem>
                      <MenuItem value="03">3</MenuItem>
                      <MenuItem value="04">4</MenuItem>
                      <MenuItem value="05">5</MenuItem>
                      <MenuItem value="06">6</MenuItem>
                      <MenuItem value="07">7</MenuItem>
                      <MenuItem value="08">8</MenuItem>
                      <MenuItem value="09">9</MenuItem>
                      <MenuItem value="10">10</MenuItem>
                      <MenuItem value="11">11</MenuItem>
                      <MenuItem value="12">12</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      select
                      label="Expiry Year"
                      value={expiryYear}
                      onChange={handleExpiryYearChange}
                      fullWidth
                      required
                    >
                      <MenuItem value="23">23</MenuItem>
                      <MenuItem value="24">24</MenuItem>
                      <MenuItem value="25">25</MenuItem>
                      <MenuItem value="26">26</MenuItem>
                      <MenuItem value="27">27</MenuItem>
                      <MenuItem value="28">28</MenuItem>
                      <MenuItem value="29">29</MenuItem>

                    </TextField>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          ) : (
            selectedOption === 'upi' && (
              <TextField type="text" label="UPI ID" value={upiId} onChange={handleUpiIdChange} required fullWidth />
            )
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: '20px', backgroundColor: '#2874f0', color: '#ffffff' }}
          >
            Pay
          </Button>
        </form>
        <Box display="flex" justifyContent="center" alignItems="center" marginTop="20px">

        </Box>
      </Paper>
    </div>
  );
};

export default Payment;
