import React from 'react';
import TestimonialCard from './TestimonialCard';
import p1 from '../assets/pexels-ollivves-1122409.jpg'
import arun from '../assets/arun.jpeg'
const TestimonialSection = () => {
  return (
    <div className="bg-gray-900/10 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <TestimonialCard
            im={p1}
            text="I had an amazing time in Shimla and Manali, all thanks to Rashmi from Travel Basket. She's super friendly and helpful, and she really made sure our trip was perfect. Our guide and driver were awesome too, and the places we stayed at were top-notch. If you're planning a trip to India, I highly recommend booking with Rashmi. She'll make sure you have an unforgettable experience!
            thanks 
            "
            author="Pooja Prajapati"
          />
          {/* Testimonial 2 */}
          <TestimonialCard
          im={p1}
            text="When you have to look for a weekend getaway selecting a property at a great price with a mind boggling location and awesome food, it becomes difficult to choose from so many options.
            Travel Basket got all of this sorted for us. Our trip to Jim Corbett national park was a great one. They selected the right property that we wanted and which was as per our budget and absolutely no hassles .
            Everything was streamlined and sorted out.
            Thank you Travel Basket for this first awesome experience .
            Keep up the great work.
            "
            author="Kiran Raut"
          />
          {/* Testimonial 3 */}
          {/* <TestimonialCard
          im={p1}
            text="It was a delightful tour when I placed my leisure days in the hands of Travel Basket my journey to Dubai was tailormade and as per my needs. the stay was booked in a perfect location where I shopped till I dropped. I thank Travel Basket genuinely and will definitely recommend it to my friends & family.
            "
            author="Rovers Club"
          /> */}
           <TestimonialCard
          im={arun}
            text="Exceptional Customer Service: Prompt, friendly, and efficient responses.
            Attention to Detail: Meticulous planning ensures a seamless experience.
            Reliability: Timely and accurate service instills confidence.
            Expert Guidance: Knowledgeable professionals provide tailored recommendations.
            Efficient: Streamlined processes minimize hassles for travelers.
            "
            author="Arun Saini"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
