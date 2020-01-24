import React from 'react'
import { Field, FormSection } from 'redux-form'
import { Input } from '../../../components/Input'

const UserFormGeneral = () => {
    return (
        <FormSection>
            <div className="form-group">
                <Field
                    label="First Name"
                    name="firstName"
                    component={Input}
                    type="text"
                    placeholder="First Name"
                    className="form-control"
                />
            </div>

            <div className="form-group">
                <Field
                    label="Last Name"
                    name="lastName"
                    component={Input}
                    type="text"
                    placeholder="Last Name"
                    className="form-control"
                />
            </div>

            <div className="form-group ">
                <Field
                    label="Email"
                    name="email"
                    component={Input}
                    type="email"
                    placeholder="username@mail.com"
                    className="form-control"
                />
            </div>

            <div className="form-group">
                <Field
                    label="Age"
                    name="age"
                    component={Input}
                    type="text"
                    placeholder="25"
                    className="form-control"
                />
            </div>
        </FormSection>
    )
}

export default UserFormGeneral
