import React from 'react'
import { Field } from 'redux-form'
import { Input } from '../../../components/Input'

const UserFormGeneral = () => {
    const defaultInputProps = {
        component: Input,
        type: 'text',
        className: 'form-control',
    }
    return (
        <>
            <div className="form-group">
                <Field
                    {...defaultInputProps}
                    label="First Name"
                    name="firstName"
                    placeholder="First Name"
                />
            </div>

            <div className="form-group">
                <Field
                    {...defaultInputProps}
                    label="Last Name"
                    name="lastName"
                    placeholder="Last Name"
                />
            </div>

            <div className="form-group ">
                <Field
                    {...defaultInputProps}
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="username@mail.com"
                />
            </div>

            <div className="form-group">
                <Field
                    {...defaultInputProps}
                    label="Age"
                    name="age"
                    placeholder="25"
                />
            </div>
        </>
    )
}

export default UserFormGeneral
