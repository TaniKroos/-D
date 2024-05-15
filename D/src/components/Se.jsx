import React from 'react'
import { MdOutlineTravelExplore } from 'react-icons/md';
import { RiCustomerService2Fill } from 'react-icons/ri';
import Carousel from './Carousel';

function Se() {
    return (
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-4'>
           
            <div className='lg:col-span-2  flex-col justify-evenly'>
                <Carousel />
              
            </div>
        



            <div>

          <div className='pt-40'>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfL6RrxEF30ZKbICryPNKgmlDzDnXiP3Td02d92_ESyPzgUvg/viewform?embedded=true" 
             width="100%" 
             height="700" 
             frameborder="0" 
             marginheight="0" 
             marginwidth="0" 
             style={{ border: 'none', maxWidth: '600px', margin: '0 auto', borderRadius: '8px' }} 
             allowfullscreen="true">Loading…</iframe>
          </div>
      </div>

        </div>
    )
}

export default Se
