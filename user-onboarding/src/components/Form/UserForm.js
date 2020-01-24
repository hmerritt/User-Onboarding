import React from 'react';
import { Form, Field, withFormik } from 'formik';

function UserForm()
{
    return (
        <Form>
            <label for='fullname'> Name: </label>
            <Field type='text'     name='fullname' />

            <label for='email'> Email: </label>
            <Field type='text'     name='email'    />

            <label for='password'> Password: </label>
            <Field type='password' name='password' />

            <label for='terms'> Terms of Service: </label>
            <Field type='checkbox' name='terms'    />
            
            <Field type='submit'   name='submit'   />
        </Form>
    )
}

const FormikUserForm = withFormik({})(UserForm);

export default FormikUserForm;
