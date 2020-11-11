/* eslint-disable react/prop-types */
import React from 'react';

const buttonClassNames = 'p-3 my-8 rounded bg-normal-green text-white focus:outline-none focus:bg-darker-green hover:shadow-xl';

function Button({ children }) {
  return (
    <button type="button" className={buttonClassNames}>
      {children}
    </button>
  );
}

export default Button;
