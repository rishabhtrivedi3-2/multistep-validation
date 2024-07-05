import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Secondstep from './Secondstep';
import Firststep from './Firststep';
import { textAlign } from '@mui/system';
import { Grid } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { add } from '../statemanagemnet/slice';

import { useEffect, useState } from 'react';
import Thirstep from './Thirstep';

const steps = ['Personal Information', 'Address Information', 'Confirmation'];

export default function HorizontalLinearStepper() {
    const dispatch = useDispatch();
    const formData = useSelector((state) => state.form);

    const [activeStep, setActiveStep] = React.useState(0);
    const [isNextDisabled, setIsNextDisabled] = useState(true);
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('data'));
        if (storedData) {

            Object.keys(storedData).forEach((key) => {
                dispatch(add({ field: key, value: storedData[key] }));
                console.log(formData);
            });
        }
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(formData));
    }, [formData]);

    useEffect(() => {
        validateStep();
    }, [formData, activeStep]);

    const handleNext = () => {

        if (isNextDisabled) {
            window.alert("enter details");
            setActiveStep((prevActiveStep) => prevActiveStep - 1);

        } else {

            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }

    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };


    const handleReset = () => {
        setActiveStep(0);
    }
    const validateStep = () => {
        switch (activeStep) {
            case 0:
                setIsNextDisabled(!(formData.name && formData.email && formData.phoneNo));
                break;
            case 1:
                setIsNextDisabled(!(formData.address_1 && formData.city && formData.state && formData.zipcode));
                break;
            default:
                setIsNextDisabled(false);
        }
    };
    const dis = (step) => {
        switch (step) {
            case 0:
                return <Firststep />;
            case 1:
                return <Secondstep />;
            case 3:
                return <Thirstep />;
            default:

        }



        switch (activeStep) {
            case 0:
                return <Firststep />;

            case 1:
                return <Secondstep />;
            case 2:
                return <Thirstep />;

            default:


        }
    }

    return (
        <Box sx={{ width: '70%', alignItems: 'center', marginTop: '4rem', marginBottom: '2rem' }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};


                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <Grid container style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', border: '1px solid #ccc', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', borderRadius: '2rem', marginTop: '2rem', paddingTop: '2rem', paddingBottom: '1rem', backgroundColor: '#c5d5c5', width: '100%', }}>
                <Typography container variant="h4" color="textPrimary" style={{ fontWeight: 'bold' }}>
                    Sign in
                </Typography>
                {dis()}
            </Grid>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>



                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                            variant='contained'
                        >
                            Back
                        </Button>
                        <Button onClick={handleNext} style={{ marginLeft: 'auto ', display: 'inline-block' }} sx={{ display: 'inline-block' }} variant='contained'>
                            {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                        </Button>
                    </Box>
                </React.Fragment>
            )
            }
        </Box >

    );
}
