import React from 'react'
import PropTypes from 'prop-types'
import { FormSection, Field, FieldArray } from 'redux-form'
import { Input } from '../../../components/Input.jsx'

const HobbyFields = ({ fields }) => {
    return (
        <ul className="hobbies-list">
            {fields.map((hobby, index) => (
                <li key={index} className="hobbies-list__element">
                    <Field
                        name={`hobby[${index}]`}
                        type="text"
                        component={Input}
                        label={`Hobby #${index + 1}`}
                    />
                </li>
            ))}
        </ul>
    )
}

const UserFormHobby = () => (
    <FormSection>
        <h3>Hobbies</h3>
        <FieldArray name="hobby" component={HobbyFields} />
    </FormSection>
)

HobbyFields.propTypes = {
    fields: PropTypes.array,
}

export default UserFormHobby
