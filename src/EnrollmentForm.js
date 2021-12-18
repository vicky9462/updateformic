import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../src/Components/FormikControl';
import './App.css'


function EnrollmentForm() {
    const dropdownOptions = [
        { key: 'Select an course', value: '' },
        { key: 'React', value: 'react' },
        { key: 'Angular', value: 'angular' },
        { key: 'Vue', value: 'vue' },
    ]
    const checkboxOptions = [
        { key: 'HTML', value: 'html' },
        { key: 'CSS', value: 'css' },
        { key: 'JavaScript', value: 'javascript' },
    ]

    const initialValues = {
        email: '',
        bio: '',
        course: '',
        skills: [],
        courseDate: null,

    }
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Required'),
        bio: Yup.string().required('Required'),
        course: Yup.string().required('Required'),
        // radioOptions : Yup.string().required('Required'),
        // checkboxOption : Yup.array().required('Required'),

        courseDate: Yup.date().required('Required').nullable()

    })
    const onSubmit = values => console.log('Form Data', values)
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {
                formik => {
                    return (
                        <Form>
                            <FormikControl
                                control='input'
                                type='text'
                                name='email'
                                label='Email'
                            />
                            <FormikControl
                                control='textarea'
                                name='bio'
                                label='Bio'
                            />
                            <FormikControl
                                control='select'
                                name='course'
                                label='Course'
                                options={dropdownOptions}
                            />
                            <FormikControl
                                control='checkbox'
                                name='skills'
                                label='Your skilSet'
                                options={checkboxOptions}
                            />
                            <FormikControl
                                control='date'
                                name='courseDate'
                                label='Course Date'
                            />
                            <button type="submit" disabled={!formik.isValid}>
                                Submit
                            </button>



                        </Form>
                    )
                }
            }
        </Formik>
    )
}

export default EnrollmentForm
