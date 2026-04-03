import React from 'react';
import type InputFieldProps from '~/screens/components/elements/types/InputFieldProps';

export default function InputField(props: InputFieldProps) {
    return (
        <>
            <label className={`form-label ${props.required ? 'font-bold' : ''}`} htmlFor={props.id}>
                {props.label}
                {props.required ? <span className="required-asterisk">*</span> : null}
            </label>
            <input
                className={`form-input-field ${
                    props.hasInputFieldTyped && props.hasError && props.error && props.required
                        ? 'form-input-field-error'
                        : 'form-input-field-correct'
                }`}
                id={props.id}
                name={props.name}
                placeholder={props.placeholder}
                required={props.required}
                type={props.type}
                onChange={props.onChange}
            />
            {props.hasInputFieldTyped && props.hasError && props.error && props.required ? (
                <p id="email-name-error" className="form-input-field-error-text">
                    {props.error}
                </p>
            ) : null}
        </>
    );
}
