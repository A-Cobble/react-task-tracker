import PropTypes from 'prop-types'
import React from 'react'

const Button = ({ color, text, onClick }) => {
   
    return (
    <button 
    onClick={onClick} 
    style={{ backgroundColor: color}} 
    className='btn'
    >
        {text}
    </button>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

//the first propTyps is lower case the second one is capital 
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}
export default Button