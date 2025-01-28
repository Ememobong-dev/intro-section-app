import Image from 'next/image';
import React from 'react';
import brandLogo from '../../public/images/logo.svg';
import dropdownArrow from '../../public/images/icon-arrow-down.svg';




const Navbar = () => {
  return (
    <div className='w-full bg-white font-epilogueSemiBold text-mediumGray py-8 '>
        <div className="flex items-center justify-between">
            
            <div className='flex items-center gap-10'>
                <span>Login</span>
                <span className='cursor-pointer border border-mediumGray py-2 px-6  bg-white rounded-xl'>
                    Register
                </span>


            </div>
        </div>
        
    </div>
  )
}

export default Navbar