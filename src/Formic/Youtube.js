import { Formik, Form, Field, ErrorMessage, FieldArray, FastField } from 'formik'
import React from 'react'
import '../App.css'
import * as Yup from 'yup';
import Texterror from './Texterror';
const initialValues = {
    name: '',
    email: '',
    channel: '',
    comments: '',
    address: '',
    social: {
        facebook: '',
        instagram: '',
    },
    phoneNumber: ['', ''],
    phNumbers: ['']

}
const onSubmit = val => {
    console.log(val);
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid Email Address')
        .required('Required'),
    channel: Yup.string().required('required'),

})
const validateComments = value => {
    let error
    if (!value) {
        error = "Required"
    }
    return error
}
function Youtube() {
    return (
        <Formik initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {
                formik => {
                    return (<>
                        <Form className='form'>
                            <div className='form-control'>
                                <label htmlFor='name'>Name</label>
                                <Field type='text' id="name" name='name' />
                                <ErrorMessage name='name' component={Texterror} /> </div>
                            <div className='form-control'><label htmlFor='email'>Email</label>
                                <Field type='email' id="email" name='email' />
                                <ErrorMessage name='email' >
                                    {
                                        errorMsg =>
                                            <div className='error'>{errorMsg}</div>

                                    }
                                </ErrorMessage>
                            </div>
                            <div className='form-control'> <label htmlFor='channel'>Channel</label>
                                <Field type='text' id="channel" name='channel' />
                                <ErrorMessage name='channel' />
                            </div>
                            <div className='form-conrol'>
                                <label htmlFor='comments'>Comments</label>
                                <Field as='textarea' id='comments' name='comments' validate={validateComments} />
                                
                                                                <ErrorMessage name='comments' component={Texterror} />
                            </div>
                            <div className='form-conrol'>
                                <label htmlFor='address'>Address</label>
                                <FastField name='address'>
                                    {props => {
                                        const { field, form, meta } = props;
                                        {/* console.log(props) */ }
                                        return (
                                            <div>
                                                <input type='text' id='address' {...field} />
                                                {meta.touched && meta.errors ? <div>{meta.errors}</div> : null}
                                            </div>
                                        )
                                    }
                                    }
                                </FastField>
                            </div>
                            <div className='form-conrol'>
                                <label htmlFor='facebook'>Facebook</label>
                                <Field type='text' id='facebook' name='social.facebook'></Field>
                                <ErrorMessage name='social.facebook' component={Texterror} />
                            </div>
                            <div className='form-conrol'>
                                <label htmlFor='instagram'>Instagram</label>
                                <Field type='text' id='instagram' name='social.instagram'></Field>
                                <ErrorMessage name='social.instagram' component={Texterror} />
                            </div>
                            <div className='form-conrol'>
                                <label htmlFor='firNumb'>First Phone Number</label>
                                <Field type='text' id='firNumb' name='phoneNumber[0]'></Field>
                            </div>
                            <div className='form-conrol'>
                                <label htmlFor='secNumb'>Second Phone Number</label>
                                <Field type='text' id='secNumb' name='phoneNumber[1]'></Field>
                            </div>
                            <div className='form-conrol'>
                                <label>List Of Phone Numbers</label>
                                <FieldArray name='phNumbers'>
                                    {fieldArrayProps => {
                                        const { push, remove, form } = fieldArrayProps
                                        const { values } = form
                                        const { phNumbers } = values
                                        return (
                                            <div>
                                                {phNumbers.map((phNumber, index) => (
                                                    <div key={index}>
                                                        <Field name={`phNumbers[${index}]`} />
                                                        {index > 0 && (
                                                            <button type='button' onClick={() => remove(index)}>
                                                                {''}
                                                                -{''}
                                                            </button>

                                                        )}
                                                        <button type='button' onClick={() => push('')}>
                                                            {''}
                                                            +{''}
                                                        </button>
                                                    </div>

                                                ))}
                                            </div>
                                        )
                                    }
                                    }

                                </FieldArray>
                            </div>


                           
                        </Form>
                        <div className='form'>
                        <button type='submit' >Submit Now</button>
                        {/* <button type='button' onClick={()=>formik.validateField('comments')}>Validate Comments
                        </button>
                        <button type='button' onClick={()=>formik.validateForm()}> Validate All</button> */}
                        {/* <button type='button' onClick={()=>formik.setFieldTouched()}> Visit Field</button>
                        <button type='button' onClick={()=>formik.setTouched()}> </button>
                         */}
                         </div>
                    </>
                    )

                }
            }


        </Formik>
    )
}

export default Youtube;
