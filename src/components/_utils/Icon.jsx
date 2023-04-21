import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ name, className }) => {
  switch (name) {
    case 'add':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          height="48"
          width="48"
          className={className}
        >
          <defs />
          <title>add-circle</title>
          <circle
            cx="12"
            cy="12"
            r="11"
            fill="none"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="12"
            y1="6"
            x2="12"
            y2="18"
            fill="none"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="18"
            y1="12"
            x2="6"
            y2="12"
            fill="none"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'close':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={className}
        >
          <path
            fill="#fff"
            d="M12 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414L13.414 12l3.293 3.293a1 1 0 1 1-1.414 1.414L12 13.414l-3.293 3.293a1 1 0 0 1-1.414-1.414L10.586 12 7.293 8.707a1 1 0 0 1 1.414-1.414L12 10.586z"
          />
        </svg>
      );
    default:
      return null;
  }
};

export default Icon;

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
