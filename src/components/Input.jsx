import React from 'react'
import PropTypes from 'prop-types'

export const Input = ({
    input,
    name,
    label,
    type,
    placeholder,
    className,
    meta: { touched, error, warning },
}) => (
    <div>
        <label id={input.name} className="form__label">
            {label}
        </label>
        <div>
            <input
                {...input}
                aria-labelledby={input.name}
                name={name}
                placeholder={placeholder}
                type={type}
                className={`${className} ${error ? 'is-invalid' : ''}`}
            />
            {touched &&
                ((error && <span className="invalid-feedback">{error}</span>) ||
                    (warning && <span className="warning">{warning}</span>))}
        </div>
    </div>
)

Input.propTypes = {
    input: PropTypes.object,
    name: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    meta: {
        touched: PropTypes.bool,
        error: PropTypes.bool,
        warning: PropTypes.bool,
    },
}
