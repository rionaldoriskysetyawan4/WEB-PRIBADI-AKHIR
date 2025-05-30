import React from 'react';

const MyButton = ({ onClick, label, className }) => {
  return (
    <button onClick={onClick} className={`myButton ${className}`}>
      {label}
    </button>
  );
};

export default MyButton;
