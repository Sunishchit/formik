import React from 'react';
import {Form, Formik} from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';



export const Signup=()=>{
    const validate=Yup.object({
        firstName:Yup.string().max(15,'must be 15 characters or less').required('Required'),
        lastName:Yup.string().max(15,'must be 15 characters or less').required('Required'),
        email:Yup.string().email("Email is invalid").required('Email is Required'),
        password:Yup.string().min(6,'At least 6 characters').required('Password is Required'),
        confirmPassword:Yup.string().oneOf([Yup.ref('password'),null],'Password must match').required('Confirm Password is Required'),
    })
    return(
        <Formik
        initialValues={{
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            confirmPassword:''
        }}
        validationSchema={validate}
        onSubmit={values=>{
            console.log(values);
        }}
        >
            {
                formik=>(
                    <div>
                        <h1>Sign-Up</h1>
                        <Form>
                            <TextField label="First Name" name="firstName" type="text"/>
                            <TextField label="Last Name" name="lastName" type="text"/>
                            <TextField label="Email" name="email" type="email"/>
                            <TextField label="password" name="password" type="password"/>
                            <TextField label="Confirm Password" name="confirmPassword" type="passowrd"/>
                            <button type='submit'>Register</button>
                            <button>Reset</button>
                        </Form>
                    </div>
                )
            }

        </Formik>
    )
}