// MyFormComponent.js
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import useFormStore from '../hooks/formStore';

const validationSchema = Yup.object({
    key: Yup.string().required('Required'),
    value: Yup.string().required('Required'),
});

const MyFormComponent = () => {
    const { addForm, form, clearForm } = useFormStore();  // Destructure addItem from the store

    const formik = useFormik({
        initialValues: {
            key: '',
            value: '',
        },
        validationSchema,
        onSubmit: (values) => {
            // Use addItem from Zustand store to update the state
            addForm(values.key, values.value);
        },
    });

    return (
        <>
        <button onClick={()=> clearForm()}>Clear Form</button>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="key">Key</label>
                    <input
                        id="key"
                        name="key"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.key}
                    />
                    {formik.touched.key && formik.errors.key ? (
                        <div>{formik.errors.key}</div>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="value">Value</label>
                    <input
                        id="value"
                        name="value"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.value}
                    />
                    {formik.touched.value && formik.errors.value ? (
                        <div>{formik.errors.value}</div>
                    ) : null}
                </div>
                <button type="submit">Submit</button>
            </form>
            <h2>Form Data:</h2>
            <pre>{JSON.stringify(form, null, 2)}</pre>
        </>
    );
};

export default MyFormComponent;