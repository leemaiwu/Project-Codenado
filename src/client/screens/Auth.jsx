import React, { useState, useRef, useContext } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import GlobalState from '../state/GlobalState'

const Auth = () => {

    const initialValues = {
        username: '',
        password: ''
    }

    const [register, setRegister] = useState(false)
    const userRef = useRef()
    const passRef = useRef()
    const {state, dispatch} = useContext(GlobalState)

    const toggle = () => setRegister(!register)

    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .min(3, 'Username must be at least 3 characters')
            .required('Username is required'),
        password: Yup.string()
            .min(5, 'Password must be at least 5 characters')
            .matches(
                /^(?=.*[!@#$%^&*])/, 
                'Must contain one special character'
            )
            .required('Password is required')
    })
    
    const handleSubmit = (values, { setSubmitting }) => {
        const { username, password } = values
        const endpoint = register ? '/api/register' : '/api/login'

        axios
            .post(endpoint, { username, password })
            .then((res) => {
                dispatch({type: "LOGIN", payload: res.data})
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setSubmitting(false)
            })
    }

    return (
        <section>
            <h1 className='page-title'>Auth</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                <Form>
                    <h3 className='login-title'>
                    {register ? 'Welcome New User!' : 'Welcome Back!'}
                    </h3>
                    <div className='form-group'>
                    <Field
                        type='text'
                        name='username'
                        placeholder='Username'
                        className='form-control'
                    />
                    <ErrorMessage name='username' component='div' className='error-message' />
                    </div>
                    <div className='form-group'>
                    <Field
                        type='password'
                        name='password'
                        placeholder='Password'
                        className='form-control'
                    />
                    <ErrorMessage name='password' component='div' className='error-message' />
                    </div>
                    <button type='submit' className='button' disabled={isSubmitting}>
                    {register ? 'Register' : 'Login'}
                    </button>
                </Form>
                )}
            </Formik>
            <button className='register-button' onClick={toggle}>
                Click here to {!register ? 'Register' : 'Login'}
            </button>
        </section>
    )
}

export default Auth
