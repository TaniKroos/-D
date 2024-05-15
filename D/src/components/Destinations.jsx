import React from 'react'


import Himachal from '../assets/Himachal.jpg'
import Rajasthan from '../assets/Rajasthan.jpg'
import Goa from '../assets/Goa.jpg'
import Kerala from '../assets/kerala.jpg'

import Kashmir from '../assets/Kashmir.jpg'
import Uk from '../assets/Uk.jpg'

import SelectsCard from './SelectsCard';
const Selects = () => {
  return (
    <>
    <div className='max-w-[1240px]  mx-auto px-4 py-16 text-center bg-gray-900/15'>
      <h2>Domestic Destinations Covered by Us</h2>
    </div>
    <div className='max-w-[1240px] bg-gray-900/15 mx-auto px-4 py-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      

    <SelectsCard bg={Himachal} text='Himachal'/>
    <SelectsCard bg={Kerala} text='kerala'/>
    <SelectsCard bg={Rajasthan} text='Rajasthan'/>
    <SelectsCard bg={Goa} text='Goa'/>
    <SelectsCard bg={Kashmir} text='Kashmir'/>
    <SelectsCard bg={Uk} text='Uttrakhand'/>
        
    </div>
    </>
  )
}

export default Selects