import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';
import { RiCopyrightFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <div className='w-full bg-gray-100 py-16'>
      <div className='max-w-[1240px] mx-auto flex items-center flex-col px-4'>
        
          <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
            <FaInstagram className='icon' />
          </div>
        
        

          <div className='flex items-center justify-center pt-8 pd-0'>
            <RiCopyrightFill className='icon' />
            <p className='ml-2'>Kroos</p>
          </div>




      </div>
       
    </div>
  );
};

export default Footer;