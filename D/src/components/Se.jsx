// Se.js

import React from 'react';
import Carousel from './Carousel';
import Form from './Form';

function Se() {
  return (
    <div className='max-w-[1240px] mx-auto grid grid-cols-1 gap-4 px-4 py-4'>
      {/* First row: Carousel */}
      <div>
        <Carousel />
      </div>
      {/* Second row: Form */}
      <div>
        <Form />
      </div>
    </div>
  );
}

export default Se;
