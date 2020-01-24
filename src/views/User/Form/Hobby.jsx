import React from 'react'
import PropTypes from 'prop-types'
import { FormSection, Field, FieldArray } from 'redux-form'
import { Input } from '../../../components/Input.jsx'

const renderHobby = ({ fields }) => {
    fields = [{}, {}, {}]
    return (
        <ul className="hobbies-list">
            {fields.map((hobby, index) => {
                console.log(hobby)
                return (
                    <li key={index}>
                        <Field
                            name={`hobby[${index}]`}
                            type="text"
                            component={Input}
                            label={`Hobby #${index + 1}`}
                        />
                    </li>
                )
            })}
        </ul>
    )
}

const UserFormHobby = () => {
    return (
        <FormSection>
            <h3>Hobbies</h3>
            <FieldArray name="hobby" component={renderHobby} />
        </FormSection>
    )
}

renderHobby.propTypes = {
    fields: PropTypes.array,
}

export default UserFormHobby
