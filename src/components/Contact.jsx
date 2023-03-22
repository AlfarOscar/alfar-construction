import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#272727] flex justify-center items-center py-4'>
        <form method='POST' action="https://getform.io/f/448e26fa-7288-4a40-b704-517685d665eb" className='flex flex-col max-w[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-600 text-gray-200'>Contact</p>
                <p className='text-gray-200 py-4'> //Enter your contact information below or send me an email</p>

            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name'/>
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email'/>
                <textarea className='bg-[#ccd6f6] p-2' name="message"  rows="10" placeholder='Message'></textarea>
                <button className='text-white border-2 hover:bg-[#fca03d] hover:border-[#fca03d] px-4 py-3 my-8 mx-auto flex items-center'> Let's Work Together</button>

        </form>

    </div>
  )
}

export default Contact