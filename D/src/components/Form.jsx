// Form.js

import React from 'react';

function Form() {
  return (
    <div className='w-full lg:w-auto'>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfL6RrxEF30ZKbICryPNKgmlDzDnXiP3Td02d92_ESyPzgUvg/viewform?embedded=true"
        width="100%"
        height="800"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        style={{ border: 'none', borderRadius: '8px' }}
        allowfullscreen="true"
        title="Form"
      >
        Loading…
      </iframe>
    </div>
  );
}

export default Form;
