import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import './UserForm.css';

function UserForm({ values, errors })
{
    return (
        <Form>
            <label>
                Name {<small className='error'>{errors.fullname}</small>}
                <Field type='text' name='fullname' placeholder='Name...' value={values.fullname} />
            </label>
            <label>
                Email {<small className='error'>{errors.email}</small>}
                <Field type='text' name='email' placeholder='Email...' value={values.email} />
            </label>
            <label>
                Password {<small className='error'>{errors.password}</small>}
                <Field type='password' name='password' placeholder='Password...' value={values.password} />
            </label>
            <label>
                Terms of Service
                <Field type='checkbox' name='terms' value={values.terms} />
            </label>

            <Field type='submit' name='submit' />
        </Form>
    )
}

const FormikUserForm = withFormik({
    mapPropsToValues()
    {
        return {
            fullname: "",
            email: "",
            password: "",
            terms: false
        };
    },

    validationSchema: Yup.object().shape({
        fullname: Yup.string().required("Please fill this in!"),
        email:    Yup.string().required("Please fill this in!"),
        password: Yup.string().required("Please fill this in!"),
        terms:    Yup.bool()
    })
})(UserForm);

export default FormikUserForm;
