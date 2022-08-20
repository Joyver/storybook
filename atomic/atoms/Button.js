import React from 'react'
import PropTypes from 'prop-types';
import './button.css';
import { BeakerIcon } from '@heroicons/react/solid'

/**
 * Primary UI component for user interaction
 */
export const Button = ({ buttonType, size, label, onClick, border }) => {
  const mode = `storybook-button--${buttonType}`;
  return (
    <button
      onClick={onClick}
      type="button"
      className={['storybook-button', `storybook-button--${size}`, `storybook-button--${border}`, mode].join(' ')}
    >
      {buttonType === 'leftIcon' && <BeakerIcon className="icon1"/>} 
      {label}
      {buttonType === 'rightIcon' && <BeakerIcon className="icon2"/>} 
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  buttonType: PropTypes.oneOf(['primary', 'secondary', 'white', 'rightIcon', 'leftIcon', 'round', 'circular']),
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['xs', 'small', 'medium', 'large', 'xl']),
  /**
   * optional border
   */
  border: PropTypes.oneOf(['10-rounded', '100-rounded']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  buttonType: 'primary',
  size: 'medium',
};


