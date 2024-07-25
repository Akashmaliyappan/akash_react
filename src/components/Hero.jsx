import React from 'react'

const Hero = () => {
  return (
    <div className='text-white flex  h-full items-center  ps-24 z-10 p-10 '>
        <div className='w-1/2 items-center'>
            <p className='text-xs text-start font-extralight'>WELCOME TO MY WORLD</p>
            <h2 className='text-6xl text-start  font-bold text'>Hi, I’m Akash</h2>
            <h2 className='text-6xl text-start font-bold text'>UI/UX Designer.</h2>
            <h2 className='text-6xl text-start font-bold text'>based in USA.</h2>
        </div>
        <div className='w-full h-full  flex justify-center '>
            <img src="./src/assets/Akash_5.jpg" alt="" className='w-96 h-96 object-cover rounded-xl border-2 border-gray-500 ' />
        </div>
    </div>
  )
}

export default Hero