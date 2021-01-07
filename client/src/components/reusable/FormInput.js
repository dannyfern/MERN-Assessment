import React from 'react'
import PropTypes from 'prop-types'


const FormInput = ({ type = "text", name, value, onChange, accept }) => {
    return <input type={type} name={name} value={value} onChange={onChange} accept={accept}/>
}

FormInput.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
}




export default FormInput