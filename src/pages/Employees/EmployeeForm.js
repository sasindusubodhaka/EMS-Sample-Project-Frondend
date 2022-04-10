import { Grid, TextField } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import { UseForm, Form } from '../../components/UseForm';


const initialFValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'male',
    department: '',
    hireDate: new Date(),
    isPermanent: false,
}

function EmployeeForm() {    

    const { values, setValues, handleInputChange } = UseForm(initialFValues);


    console.log(values.fullName);
    return (

       
            <Form>
                <Grid container>
                    <Grid item xs={6} >
                        <TextField
                            variant="outlined"
                            label="Full Name"
                            name="fullName"
                            value={values.fullName}
                            onChange={handleInputChange}
                        />
                        <TextField
                            variant="outlined"
                            label="email"
                            name="email"
                            value={values.email}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={6}></Grid>
                </Grid>
            </Form>

      

    )
}

export default EmployeeForm