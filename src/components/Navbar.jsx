import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../Assets/logo2.png'
const Navbar = () => {
        const[nav,setNav] =useState(false)
        const handleClick = () => setNav(!nav)
  return (
    <div className ='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#272727] text-gray-300'>
            <div>
                <img src={Logo} alt="logo" style={{width:'150px'}}/>
            </div>
            {/* Menu */}
            <div className='hidden md:flex'>
                <ul className=' hidden md:flex'>
           
                 <li>Home</li>
                 <li>Contact</li>
                 <li>Gallery</li>
                </ul>
        </div>

        {/*Hamburger*/}
            <div onClick={handleClick} className=' md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
        {/*Mobile Menu*/}
            
                <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#001738] flex flex-col justify-center items-center'}>
                    <li className='py-6 text-4xl'>Home</li>
                    <li className='py-6 text-4xl'>Contact</li>
                    <li className='py-6 text-4xl'>Gallery</li>
                </ul>

            
    </div>
  )
}

export default Navbar