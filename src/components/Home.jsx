import React, { useState } from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
const Home = () => { 
  const [nav,setNav] = useState(false);
const handleClick=() => setNav(!nav);
  return (
    
    <div name='home' className='w -full h-screen  bg-[#272727] background-image:url(../Assets/src/background.jpg)'>
        {/* Container*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          
                <p className='text-[#ffffff]'>Welcome to,</p>
                <h1 className=' text-4xl sm:text-7xl font-bold text-[#fca03d]'> ALFARO CONSTRUCTION.</h1>
                <h2 className='text-[#8c8c8c]'> My name is Jose Alfaro. This is page is to showcase some of the work i provide and a way for you to contact me.</h2>
                <h4 className='text-[#8c8c8c]'>Some of the services i provide are :
                            
                            <ul  className='text-[#fca03d] p-2 mx-auto flex flex-col justify-center list-disc'>
                              
                            <li> Remodeling and Construction</li>
                            <li> Basement Finishes</li>
                            <li> Costum Kitchen Cabinets</li>
                            <li> Granite Countertops</li>
                            <li> Bathroom Remodel</li>
                            <li> Interior & Exterior House Painting</li>
                            <li> Tape and Mudding</li>
                            
                            </ul>
                            
                           

                             </h4>
                    <div>
                        <Link to='Gallery'smooth={true} duration={500}>
                        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#fca03d] hover:border-[#fca03d]'>
                           
                          View Gallery
                        <span className ='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3' />
                        </span>
                        
                        </button>
                          </Link>
                         </div>
                         
                         <div>


                         </div>
                
        </div>
    </div>
  )
}

export default Home