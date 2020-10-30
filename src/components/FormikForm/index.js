import React, { useState } from 'react';
import {TextField, Button } from '@material-ui/core';
import { Formik, Form, Field } from "formik";

export default ({initialValues, onSubmit}) => {

    return (
            <Formik {...{ initialValues, onSubmit }}>
                {() => (
                    <Form className="baseForm" noValidate>
                        <Field
                            id="name"
                            name="name"
                        >
                            {({
                                field, // { name, value, onChange, onBlur }
                                //form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                                meta,
                            }) => (
                                    <TextField
                                        variant="outlined"
                                        label="Button Name"
                                        margin="dense"
                                        autoFocus
                                        required
                                        fullWidth
                                        {...field}
                                    />
                                )}
                        </Field>
                        <Field
                            id="songurl"
                            name="songurl"
                        >
                            {({
                                field, // { name, value, onChange, onBlur }
                                //form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                                meta,
                            }) => (
                                    <TextField
                                        variant="outlined"
                                        label="Song URL"
                                        margin="dense"
                                        autoFocus
                                        required
                                        fullWidth
                                        {...field}
                                    />
                                )}
                        </Field>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                        >
                            Sign In
						</Button>
                    </Form>
                )}
            </Formik>
    )
}