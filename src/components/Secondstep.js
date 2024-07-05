import { TextField, Box } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../statemanagemnet/slice';

function Secondstep() {
    const dispatch = useDispatch();
    const handleAddress_1 = (e) => {
        const a = e.target.value;
        dispatch(add({ field: 'address_1', value: a }));

    }
    const handleAddress_2 = (e) => {
        const a = e.target.value;
        dispatch(add({ field: 'address_2', value: a }));

    }
    const handleCity = (e) => {
        const a = e.target.value;
        dispatch(add({ field: 'city', value: a }));

    }
    const handleState = (e) => {
        const a = e.target.value;
        dispatch(add({ field: 'state', value: a }));

    }
    const handleZipcode = (e) => {
        const a = e.target.value;
        dispatch(add({ field: 'zipcode', value: a }));

    }
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

                        id="outlined"
                        label="Address line 1"
                        placeholder="Address line 1"
                        // value={phoneNumber}
                        onChange={handleAddress_1}
                        // helperText={phoneHelperText}
                        type='text'
                    />
                </div>

                <div>
                    <TextField

                        id="outlined"
                        label="Address line 2"
                        placeholder="Address line 2"
                        // value={phoneNumber}
                        onChange={handleAddress_2}
                        // helperText={phoneHelperText}
                        type='text'
                    />
                </div>
                <div>
                    <TextField

                        id="outlined"
                        label="city"
                        placeholder="city"
                        // value={phoneNumber}
                        onChange={handleCity}
                        // helperText={phoneHelperText}
                        type='text'
                    />
                </div>
                <div>
                    <TextField

                        id="outlined"
                        label="state"
                        placeholder="state"
                        // value={phoneNumber}
                        onChange={handleState}
                        // helperText={phoneHelperText}
                        type='text'
                    />
                </div>
                <div>
                    <TextField

                        id="outlined"
                        label="zipcode"
                        placeholder=""
                        // value={phoneNumber}
                        onChange={handleZipcode}
                        // helperText={phoneHelperText}
                        type='text'
                    />
                </div>

            </Box >
        </>
    )
}

export default Secondstep;
