import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { add } from '../statemanagemnet/slice';
import { isInteger } from 'mathjs';

const Firststep = () => {

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [emailHelperText, setEmailHelperText] = useState('');
    const [phoneNumber, setPhoneNumber] = useState();
    const [phoneError, setPhoneError] = useState(false);
    const [phoneHelperText, setPhoneHelperText] = useState('');
    const dispatch = useDispatch()
    const validatePhoneNumber = (number) => {
        const re = /^\d{10}$/;
        return re.test(String(number));
    };
    const handleName = (e) => {
        const name = e.target.value
        dispatch(add({ field: 'name', value: name }));

    }
    const handlePhoneChange = (event) => {
        const value = event.target.value;
        console.log(value)
        if (Number.isInteger(value)) {
            setPhoneError(true);
            setPhoneHelperText('Please enter a valid 10-digit phone number.');
        } else {
            setPhoneError(false);
        }
        dispatch(add({ field: 'phoneNo', value: value }));
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());

    };

    const handleEmailChange = (event) => {
        const value = event.target.value;
        dispatch(add({ field: 'email', value: value }));

        if (validateEmail(value)) {
            setEmailError(false);
            // setEmailHelperText('');
        } else {
            setEmailError(true);
            setEmailHelperText('enter a valid address');
        }
    };
    return (
        <>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        id="filled-error"
                        label="Name"
                        defaultValue=""
                        variant="outlined"
                        placeholder='Enter your name'
                        onChange={handleName}
                    />

                </div>
                <div>
                    <TextField
                        error={emailError}
                        id="outlined-error-helper-text"
                        label="Email"
                        placeholder="email"

                        onChange={handleEmailChange}
                        helperText={emailHelperText}
                        required

                    />
                </div>
                <div>
                    <TextField
                        error={phoneError}
                        id="outlined-phone-number"
                        label="Phone Number"
                        placeholder="Enter phone number"
                        value={phoneNumber}
                        onChange={handlePhoneChange}
                        helperText={phoneHelperText}
                        required
                        type={'tel'}
                    />
                </div>
            </Box>
        </>
    );
};

export default Firststep;
