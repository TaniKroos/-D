import React from 'react'

import Nepal from '../assets/Nepal.jpg'

import Maldives from '../assets/maldives.jpg';

import Bhutan from '../assets/Bhutan.jpg'
import Dubai from '../assets/Dubai.jpg'
import thailand from '../assets/thailand.jpg'
import singapore from '../assets/singapore.jpg'
import Himachal from '../assets/Himachal.jpg'
import Rajasthan from '../assets/Rajasthan.jpg'

import Kerala from '../assets/kerala.jpg'



import SelectsCard from './SelectsCard';
const Selects = () => {
  return (
    <>
    <div className='max-w-[1240px]  mx-auto px-4 py-16 text-center bg-gray-900/15'>
      <h2>International Destinations Covered by Us</h2>
    </div>
    <div className='max-w-[1240px] bg-gray-900/15 mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      
    <SelectsCard bg={Dubai} text='Dubai'/>
    <SelectsCard bg={Maldives} text='Maldives' />
    <SelectsCard bg={Bhutan} text='Bhutan' />
    <SelectsCard bg={singapore} text='Singapore' />
    <SelectsCard bg={Nepal} text='Nepal' />
    <SelectsCard bg={thailand} text='Thailand' />
 
    </div>
    </>
  )
}

export default Selects