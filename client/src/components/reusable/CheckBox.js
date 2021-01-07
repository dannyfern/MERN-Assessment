import React from 'react'
import PropTypes from 'prop-types'
// import './../../styles/Profile.css'

const CheckBox = ({ type = "checkbox", name, checked = false, onChange }) => {
    return <input type={type} name={name} checked={checked} onChange={onChange} className="checkBox" />
}

CheckBox.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    onChange: PropTypes.func.isRequired
}

export default CheckBox