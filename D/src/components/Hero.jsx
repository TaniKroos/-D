import React from 'react'
import vid from '../assets/8418270-uhd_4096_2160_25fps.mp4'
import vid1 from '../assets/beachVid.mp4'
import {AiOutlineSearch} from'react-icons/ai'
import { BiColor } from 'react-icons/bi'
function Hero () {
    return (
        <div className='w-full h-screen relative '>
            <video className='w-full h-full object-cover  ' src={vid1} autoPlay loop muted/>
            <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'>
            
            </div>
            <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
                <h1>TravelBasket</h1>
                <h2 className='py-4'>Top 1% Locations worldwide</h2>
                {/* <form action="" className='flex justify-between max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90'>
                    <div>
                        <input className=' py-2 bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none' type="text" name="" id="" placeholder='Search Destinations'/>
                    </div>
                    <div>
                        <button><AiOutlineSearch size={20} className='icon' style={{color: '#ffffff'}}/></button>
                    </div>
                </form> */}
                <div>
                    <h4>Unlock boundless adventures with Travel Basket. Explore, book, and embark on your dream getaway today!</h4>
                </div>
            </div>
        </div>
    )
}

export default Hero 
