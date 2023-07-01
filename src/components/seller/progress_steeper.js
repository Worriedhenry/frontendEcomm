import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import {Button} from '@mui/material';
import Typography from '@mui/material/Typography';
import FirstPageSeller from './firstpage';
import SecondPageSeller from './Secondpage';
const steps = ['EMAIL ID & GST', 'PASSWORD CREATION'];
import { useForm } from 'react-hook-form'; 
import * as yup from 'yup'
import {yupResolver} from "@hookform/resolvers/yup"
function HorizontalNonLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const schema=yup.object().shape({
    Phone:yup.number().test(val => val.toString().length === 10),
    GST :yup.string().required(),
    Email:yup.string().email().required()
  })
  const {register ,handleSubmit ,formState:{errors}}=useForm({
    resolver:yupResolver(schema)
  })



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

  const handleNext = (data) => {
    console.log(data)
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



    <Box sx={{ width: '100%' }}>
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
            {activeStep===0 && <FirstPageSeller register={register}  />}
            {activeStep===1 && <SecondPageSeller />}

            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
               <Box sx={{ flex: '1 1 auto' }} />{

              !isLastStep() && <Button variant='contained' onClick={handleSubmit(handleNext)} sx={{ mr: 1 }}>
                Next
              </Button>             
              }
 
 
            </Box>
          </React.Fragment>
        
      </div>
              {errors.Phone && <Typography style={{fontWeight:"1em" ,color:"red" ,margin:"auto"}}>*Please enter valid 10 digit Phone no. *</Typography>}
              {errors.Email && <Typography style={{fontWeight:"1em" ,color:"red" ,margin:"auto"}}>*Please enter valid email *</Typography>}

    </Box>
  );
}

export default HorizontalNonLinearStepper;