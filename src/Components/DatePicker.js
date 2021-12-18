import React from 'react'
import Dateview from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import { Field, ErrorMessage } from 'formik';
import TextError from './TextError'


function DatePicker(props) {
    const { label, name, ...rest } = props
    return (
        <div className='form-control'>
            <label>{label}</label>
            <Field name={name} {...rest}>
                {
                    ({ form, field }) => {
                        const { setFieldValue } = form
                        const { value } = field
                        return (<Dateview id={name}{...field}
                            selected={value}
                            onChange={val => setFieldValue(name, val)} />
                        )
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />

        </div>

    )
}
export default DatePicker;