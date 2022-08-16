import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[120rem] mx-auto p-4'>
        <div className='max-h-[35rem]  w-full relative'>
            <div className='absolute w-full h-[35rem] text-gray-200 max-h-[35rem] bg-black/50 flex items-center justify-start'>
                <h1 className='text-left px-4 text-5xl sm:text-6xl md:text-7xl  font-bold'>The <span className='text-orange-500'>Best <br/>Foods</span> Delivered</h1>
            </div>
        </div>
      <img className='w-full h-[35rem] max-h-[35rem] object-cover' src='https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=600' alt='Hero-food'/>
    </div>
  )
}
export default Hero
