import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'
import '../App.css'


function FormikContainer() {
    const dropdownOptions = [
        { key: 'Select an option', value: '' },
        { key: 'option 1', value: 'option1' },
        { key: 'option 2', value: 'option2' },
        { key: 'option 3', value: 'option3' },
    ]
    const radioOptions = [
        { key: 'option 1', value: 'roption1' },
        { key: 'option 2', value: 'roption2' },
        { key: 'option 3', value: 'roption3' },
    ]
    const checkboxOptions = [
        { key: 'option 1', value: 'coption1' },
        { key: 'option 2', value: 'coption2' },
        { key: 'option 3', value: 'coption3' },
    ]
    const initialValues = {
        fullName: '',
        description: '',
        selectOption: '',
        radioButtons: '',
        checkboxOption: [],
        birthDate: null,

    }
    const validationSchema = Yup.object({
        fullName: Yup.string().required('Required'),
        description: Yup.string().required('Required'),
        selectOption: Yup.string().required('Required'),
        radioOptions: Yup.string().required('Required'),
        checkboxOption: Yup.array().required('Required'),

        birthDate: Yup.date().required('Required').nullable()

    })
    const onSubmit = values => console.log('Form Data', values)
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {
                formik => (
                    <Form>
                        <FormikControl control='input' type='text' name='fullName' label='fullName' />
                        <FormikControl control='textarea' label='description' name='description' />
                        <FormikControl control='select' name='selectOption' label='select an Option'


                            options={dropdownOptions}
                        />
                        <FormikControl control='radio' label='Radio Topic'
                            options={radioOptions}
                            name='radioOptions' />
                        <FormikControl control='checkbox' label='Checkbox Topic'
                            options={checkboxOptions}
                            name='checkboxOption' />
                        <FormikControl control='date' label='Pick a date'

                            name='birthDate' />

                        <button type='submit'>Submit</button>
                    </Form>
                )
            }
        </Formik>
    )
}

export default FormikContainer;
