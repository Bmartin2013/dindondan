import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { Formik, Form, Field } from "formik";

export default ({ fieldValues, initialValues, onSubmit }) => {

    return (
        <Formik {...{ fieldValues, initialValues, onSubmit }}>
            {() => (
                <Form className="baseForm" noValidate>
                    {fieldValues.map(fieldValue => <Field
                        id={fieldValue.id}
                        name={fieldValue.name}>
                        {({
                            field
                        }) => (
                                <TextField
                                    variant="outlined"
                                    label={fieldValue.label}
                                    margin="dense"
                                    autoFocus
                                    required
                                    fullWidth
                                    {...field}
                                />
                            )}
                    </Field>)}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="secondary">
                        Create Button
						</Button>
                </Form>
            )}
        </Formik>
    )
}