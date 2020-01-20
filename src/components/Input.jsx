import React from 'react';

export const Input = ({ input, name, label, type, placeholder, className, meta: { touched, error, warning } }) => (
    <div>
        <label id={input.name}>{label}</label>
        <div>
            <input
                {...input}
                aria-labelledby={input.name}
                name={name}
                placeholder={placeholder}
                type={type}
                className={`${className} ${error ? 'is-invalid' : ''}`}
            />
            {touched && ((error && <span className='invalid-feedback'>{error}</span>) || (warning && <span className='warning'>{warning}</span>))}
        </div>
    </div>
);
