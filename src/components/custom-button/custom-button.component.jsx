import React from 'react';
import './custom-button.styles.scss';
const CustomButton = ({ children, ...otherProps }) => {
  return (
    <button
      className='custom-button '
      style={{ backgroundColor: `${otherProps.color}` }}
    >
      {' '}
      {children}
    </button>
  );
};

export default CustomButton;
