import React from 'react'
export const FormTextArea = ({ label = '', placeholder = '', value = '', name = '', onChange = () => { } }) => {
    return (<div className="form-group">
        <label htmlFor={label}>{label}</label>
        <textarea
            type="text"
            name={name}
            className="form-control"
            id={label}
            aria-describedby="emailHelp"
            value={value}
            placeholder={placeholder}
            onChange={(e) => { onChange({ name: e.target.name, value: e.target.value }) }} />
    </div>)
}