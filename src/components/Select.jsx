import React from 'react';

export const Select = ({ input, name, label, className, options, meta: { touched, error, warning } }) => (
    <div>
        <label htmlFor={name}>{label}</label>
        <div>
            <select {...input} id={name} className={`${className} ${error ? 'is-invalid' : ''}`} >
                {options.map(option => {
                    return (
                        <option value={option.key} key={option.key}>{option.value}</option>
                    )
                })}
            </select>
            {touched && ((error && <span className='error'>{error}</span>) || (warning && <span className='warning'>{warning}</span>))}
        </div>
    </div>
);
