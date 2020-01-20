import React from "react";
import { reduxForm, Field, FormSection } from "redux-form";
import { Input } from '../../components/Input'
import {Select} from "../../components/Select";
import { validate } from './validate';


class UserForm extends React.Component {

    render() {
        return (
            <form onSubmit={this.props.handleSubmit} className='user-form'>
                <div className="form-group">
                        <Field
                            label='First Name'
                            name='firstName'
                            component={Input}
                            type='text'
                            placeholder='First Name'
                            className='form-control'
                            />
                </div>

                <div className='form-group'>
                    <Field
                        label='Last Name'
                        name='lastName'
                        component={Input}
                        type='text'
                        placeholder='Last Name'
                        className='form-control'
                        />
                </div>

                <div className='form-group '>
                    <Field
                        label='Email'
                        name='email'
                        component={Input}
                        type='email'
                        placeholder='username@mail.com'
                        className='form-control'
                        />
                </div>

                <div className='form-group'>
                    <Field
                        label='Age'
                        name='age'
                        component={Input}
                        type='text'
                        placeholder='25'
                        className='form-control'
                        />
                </div>

                <FormSection name='address'>
                    <h3>Address</h3>
                            <div className='form-group'>
                                <Field
                                    label='Street Address'
                                    name='street'
                                    component={Input}
                                    type='text'
                                    placeholder='your address..'
                                    className='form-control'
                                    />
                            </div>
                    <div className='row'>
                        <div className="col-md-6">
                            <div className='form-group'>
                                <Field
                                    label='City'
                                    name='city'
                                    component={Input}
                                    type='text'
                                    className='form-control'
                                    />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <Field
                                label="Province / State"
                                name='state'
                                component={Input}
                                type='text'
                                className='form-control'
                                />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <Field
                                label='Zip Code'
                                name='zipcode'
                                component={Input}
                                type='text'
                                className='form-control'
                                />
                        </div>
                        <div className='col-md-6'>
                            <Field
                                label='Country'
                                name='country'
                                component={Select}
                                className='form-control'
                                options={[
                                    { key: 'USA', value: 'USA'},
                                    { key: 'Canada', value: 'Canada' },
                                    { key: 'Australia', value: 'Australia' },
                                    { key: 'UK', value: 'UK' }
                                ]}
                                />
                        </div>
                    </div>
                </FormSection>

                <div className='mt-3 text-center'>

                    <button className='btn btn-danger mr-3' onClick={this.props.toggleEdit}>Cancel</button>
                    <button type='submit' className='btn btn-primary' >Accept</button>
                </div>

            </form>
        )
    }
}


    export default reduxForm({
        form: 'user',
       // fields,
        validate
       // initialValues: this.props.initialValues
    })(UserForm)
