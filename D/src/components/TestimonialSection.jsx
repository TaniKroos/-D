import React from 'react';
import TestimonialCard from './TestimonialCard';
import p1 from '../assets/pexels-ollivves-1122409.jpg'
const TestimonialSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <TestimonialCard
            im={p1}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris efficitur eros at turpis interdum, id ultrices purus posuere. Proin varius vestibulum nisl id iaculis."
            author="John Doe"
          />
          {/* Testimonial 2 */}
          <TestimonialCard
          im={p1}
            text="Sed egestas turpis in dui malesuada, a consectetur lorem facilisis. Nullam vitae mauris tortor. Vivamus ullamcorper sem nec sapien hendrerit, vel sodales ligula eleifend."
            author="Jane Doe"
          />
          {/* Testimonial 3 */}
          <TestimonialCard
          im={p1}
            text="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut nec ante ac nulla vehicula egestas. Cras sollicitudin felis vel sem bibendum, in fermentum velit gravida."
            author="Sarah Smith"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
