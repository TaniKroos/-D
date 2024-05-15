import React from 'react';
import Carousel from './Carousel'; // Assuming you've imported the Carousel component correctly
import Crsl from './crsl';
function Search2() {
    return (
        <div className='max-w-[1240px] h-full mx-auto grid lg:grid-cols-3 gap-4 px-4 py-4'>
            {/* Carousel Component */}
            <div className="lg:col-span-2 mb-6"> {/* Added margin-bottom */}
                <Crsl />
            </div>
            {/* Form Section */}
            <div className="lg:border lg:border-gray-200 lg:rounded-md lg:p-4 lg:shadow-md lg:mr-4 lg:px-6 lg:py-4">
                <h2 className="text-xl font-semibold mb-4">Book Your Dream Vacation</h2>
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfL6RrxEF30ZKbICryPNKgmlDzDnXiP3Td02d92_ESyPzgUvg/viewform?embedded=true"
                    width="100%"
                    height="700"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                    style={{ border: 'none', maxWidth: '600px', margin: '0 auto', borderRadius: '8px' }}
                    allowFullScreen
                    title="Booking Form"
                >
                    Loading…
                </iframe>
            </div>
        </div>
    );
}

export default Search2;
