import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
} from '@mui/material';


const Payment = () => {
    const navigate=useNavigate()
  const [selectedOption, setSelectedOption] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [upiId, setUpiId] = useState('');

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

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/ordersuccess")
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <Typography variant="h6" align="center" gutterBottom>
        Payment Options
      </Typography>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <form onSubmit={handleSubmit}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Select Payment Method:</FormLabel>
            <RadioGroup name="paymentMethod" value={selectedOption} onChange={handleOptionChange}>
              <FormControlLabel value="cash_on_delivery" control={<Radio />} label="Cash on Delivery" />
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
                      {/* Options for months */}
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
                      {/* Options for years */}
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
            Proceed to Pay
          </Button>
        </form>
        <Box display="flex" justifyContent="center" alignItems="center" marginTop="20px">

        </Box>
      </Paper>
    </div>
  );
};

export default Payment;
