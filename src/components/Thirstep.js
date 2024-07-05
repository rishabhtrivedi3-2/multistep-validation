import { Box, TextField, Grid } from '@mui/material';
import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { add, update } from '../statemanagemnet/slice';

function Thirstep() {
    const dispatch = useDispatch()
    const formdata = JSON.parse(localStorage.getItem("data"));
    const handleChange = (e, key) => {
        const value = e.target.value;
        dispatch(add({ field: key, value }));
    }
    return (
        <>
            <div>
                <Grid container spacing={3} style={{ sm: '10px', alignItems: 'center', margin: '1rem', justifyContent: 'center' }}>
                    {Object.keys(formdata).map((key) => (
                        <Grid item xs={12} sm={10} key={key} style={{ display: 'grid', justifyContent: 'center', width: 'auto' }}>
                            <TextField
                                id={`outlined-${key}`}
                                label={key}
                                defaultValue={formdata[key]}
                                variant="outlined"
                                placeholder={`Enter your ${key}`}
                                onChange={(e) => handleChange(e, key)}
                                fullWidth
                                style={{ fontSize: '2rem', width: '90%', }}
                            />
                        </Grid>
                    ))}
                </Grid>
            </div >
        </>
    )
}

export default Thirstep
