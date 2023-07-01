import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'Order Confirmed',
  'Shipped',
  'Out for Delivery',
  'Delivered'
];

export default function OrderProgresSteeper({step}) {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={step-1} alternativeLabel>
        {steps.map((label) => (
          <Step  key={label}>
            <StepLabel sx={{fontSize:"0.5em"}} >{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}