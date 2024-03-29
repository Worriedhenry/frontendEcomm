import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import {Button} from '@mui/material';
import Typography from '@mui/material/Typography';
import PlaceOrder from './orderPlacing';
import Payment from './Payment';
import styled from '@emotion/styled';


const steps = ['ADDRESS', 'PAYMENT'];

function HorizontalNonLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    console.log(activeStep)
    const newActiveStep =
      isLastStep()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          activeStep
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Box  sx={{ width: '50%',
              margin:"auto",
              '@media screen and (max-width:700px) ':{
                  width:"100%"
              }
              
              }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
          <React.Fragment>
            <div style={{justifyContent:"center",margin:"2vh"}}>

            {activeStep===0 && <PlaceOrder />}
            {activeStep===1 && <Payment />}
            </div>

            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 6 ,margin:"auto" ,marginBottom:"2vh" }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
               <Box sx={{ flex: '1 1 auto' }} />{

              !isLastStep() ?<Button variant='contained' onClick={handleNext} sx={{ mr: 1 }}>
                Next
              </Button> :
                <></>       
              }
 
 
            </Box>
          </React.Fragment>
        
      </div>
    </Box>
  );
}

export default HorizontalNonLinearStepper;