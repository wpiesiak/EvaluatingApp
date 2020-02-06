import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Field, FieldArray } from 'redux-form'
import { Input } from '../../../components/Input.jsx'

const HobbyFields = ({ fields }) => {
    return (
        <Fragment>
            <ul className="hobbies-list">
                {fields.map((hobby, index) => (
                    <li key={index} className="hobbies-list__element">
                        <Field
                            name={`hobby[${index}]`}
                            type="text"
                            component={Input}
                            label={`Hobby #${index + 1}`}
                        />
                        <button
                            type="button"
                            title="Remove Hobby"
                            onClick={() => fields.remove(index)}
                            className="button button--remove"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
            <button
                type="button"
                title="Add hobby"
                onClick={() => fields.push()}
                className="button button--add"
            >
                Add Hobby
            </button>
        </Fragment>
    )
}

const UserFormHobby = () => (
    <>
        <h3>Hobbies</h3>
        <FieldArray name="hobby" component={HobbyFields} />
    </>
)

HobbyFields.propTypes = {
    fields: PropTypes.object,
}

export default UserFormHobby
