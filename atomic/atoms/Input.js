import React from 'react'
import PropTypes from 'prop-types';
import './input.css';

export const Input = ({ type, id, placeholder, name}) => {
    return (
        <input 
        type={type} 
        id={id}
        name={name} 
        className="storybook-input" 
        placeholder={placeholder}>
        </input> 
    );
  };

  Input.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    // label: PropTypes.string.isRequired,
    inputType: PropTypes.oneOf(['text', 'email', 'tel', 'password']),
    // type: PropTypes.oneOf(['text', 'email', 'tel', 'password', 'xl']), 
    // id: PropTypes.oneOf(['10-rounded', '100-rounded']),
    // name: PropTypes.oneOf(['10-rounded', '100-rounded']),
    // placeholder: PropTypes.oneOf(['10-rounded', '100-rounded']),
  };
  
  Input.defaultProps = {
    type: 'text',
  };