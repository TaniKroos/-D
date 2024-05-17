import React from 'react';

const TestimonialCard = ({ text, author,im }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <img src={im} alt="Author" className="w-20 h-20 rounded-full" />
      <p className="text-gray-600 mb-4">{text}</p>
      <p className="text-gray-800 font-semibold">- {author}</p>
    </div>
  );
};

export default TestimonialCard;
