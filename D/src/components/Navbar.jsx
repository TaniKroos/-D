import React, { useRef, useState } from 'react'
import { BsPerson } from 'react-icons/bs'
import  { BiSearch } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

function Navbar() {
    const [nav, setNav] = useState(false)
    const [logo, setLogo] = useState(false)
    const handleNav = () =>{
        setNav(!nav)
        setLogo(!logo)
    }
    const [b,setB] = useState(false)
    const handleB = () =>{
        setB(!b)
        

    }
  
    const cb = () => {
        setB(!b)
    }
    
   
     return (
        <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
            <div>
                <h1 onClick={handleNav}  className={logo ? 'hidden' : "block"}>Travel Basket</h1>
            </div>
            <ul className='hidden md:flex pr-16 '>
                <li>Home</li>
                <li>Domestic</li>
                <li className="mr-6">
                  Plan 
                </li>
                <li>International</li>
               
                <li>Testimonials</li>
            </ul>
            <div className='hidden md:flex'>
                <div className='bg-blur-lg pr-8' >
                    <BsPerson onMouseEnter={handleB} className={b? 'hidden ' : 'mx-4'} size={20}/>
                    <div onMouseLeave={handleB} className={b? ' mx-auto bg-blur-20 ' : 'hidden'} >
                    <p className='pt-8 bg-blur-lg '>Contact:</p>
                    <p>+91 8447951790</p>
                    <p>Email</p>
                    <p>tanishsaini26@gmail.com</p>
                    </div>
                    </div>
                
            </div>











            {/*  */}
            <div onClick={handleNav} className=' block md:hidden z-10'>
                 {nav ? <AiOutlineClose size={20} /> : <HiOutlineMenuAlt4 size={20} />}
                 
            </div>
            <div onClick={handleNav} className={nav ? ' text-black absolute left-0 top-0 w-full opacity-90 bg-gray-300 px-4 py-4 flex flex-col' : 'absolute left-[-100%]'} >
                <ul>
                    <h1>Travel Basket</h1>
                    {/* <li className='border-b'>Home</li>
                    <li className='border-b'>Destinations</li>
                    <li className='border-b'>Travel</li>
                    <li className='border-b'>Views</li>
                    <div className='flex flex-col '>
                        <button className='my-6'>Search</button>
                        <button>Book</button>
                    </div> */}
                    <ul className='text-left justify-left'>
                        <li className='text-left'>Contact</li>
                        <li>+91 8447951790</li>
                        <li>Email</li>
                        <li>tanishsaini26@gmail.com</li>
                        <li><a className='italic text-red-500' href="https://forms.gle/sUsYP2RafznSAsEcA">Inquire</a></li>
                    </ul>
                    <div className='flex justify-between my-6'>
                <FaFacebook className='icon' />
                <FaTwitter className='icon'/>
                <FaInstagram className='icon'/>
                <FaYoutube className='icon'/>
            </div>

                </ul>
            </div>
            



        </div>
    )
}

export default Navbar
