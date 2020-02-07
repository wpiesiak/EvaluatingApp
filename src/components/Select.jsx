import PropTypes from 'prop-types'
import React from 'react'

export const Select = ({
    input,
    name,
    label,
    className,
    options,
    meta: { touched, error, warning },
}) => (
    <div>
        <label htmlFor={name} className="form__label">
            {label}
        </label>
        <div>
            <select
                {...input}
                id={name}
                className={`${className} ${error ? 'is-invalid' : ''}`}
            >
                {options.map(option => {
                    return (
                        <option value={option.key} key={option.key}>
                            {option.value}
                        </option>
                    )
                })}
            </select>
            {touched &&
                ((error && <span className="error">{error}</span>) ||
                    (warning && <span className="warning">{warning}</span>))}
        </div>
    </div>
)

Select.propTypes = {
    input: PropTypes.object,
    name: PropTypes.string,
    label: PropTypes.string,
    className: PropTypes.string,
    options: PropTypes.array,
}
