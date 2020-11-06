import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { Formik, Form, Field, ErrorMessage } from "formik";

import styles from './styles';

export default ({ fieldValues, initialValues, onSubmit, validationSchema }) => {

    const classes = styles();

    return (
        <Formik {...{ fieldValues, initialValues, onSubmit, validationSchema }}>
            {({ errors, isValid }) => ( // by default formik has a default object with all props
                <Form className="baseForm" noValidate>
                    {fieldValues.map(fieldValue => <Field
                        id={fieldValue.id}
                        name={fieldValue.name}>
                        {({
                            field
                        }) => (
                                <div>
                                    <TextField
                                        variant="outlined"
                                        label={fieldValue.label}
                                        margin="dense"
                                        autoFocus
                                        required
                                        fullWidth
                                        {...field}
                                    />
                                    {errors && <ErrorMessage name={fieldValue.name} className={classes.formError} component="div" />}
                                </div>
                            )}
                    </Field>)}
                    <Button
                        type="submit"
                        disabled={!isValid}
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