import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../Assets/logo2.png'
import {Link} from 'react-scroll'
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
           
                 <li>
                  <Link to='home' smooth={true} duration={500 }>
                     Home
                     </Link>
                     </li>
                 <li>

                    Contact
                    
                    </li>
                 <li>
                    <Link to='Gallery' smooth={true} duration={500}>
                    Gallery
                    </Link>
                    </li>
                </ul>
        </div>

        {/*Hamburger*/}
            <div onClick={handleClick} className=' md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
        {/*Mobile Menu*/}
            
                <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#001738] flex flex-col justify-center items-center'}>
                    <li className='py-6 text-4xl'><Link onClick={handleClick} to='home' smooth={true} duration={500 }>
                     Home
                     </Link></li>
                    <li className='py-6 text-4xl'><Link onClick={handleClick} to='contact' smooth={true} duration={500 }>
                     Contact
                     </Link></li>
                    <li className='py-6 text-4xl'><Link onClick={handleClick} to='Gallery' smooth={true} duration={500 }>
                     Gallery
                     </Link></li>
                </ul>

            
    </div>
  )
}

export default Navbar