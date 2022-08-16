import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-w-[120rem] mx-auto py-12 grid sm:grid-cols-3 gap-6 p-4'>
        {/* Card */}
        <div className='rounded-xl relative'>
            {/* overlay */}
            <div className='absolute max-h-[16rem] md:max-h-[20rem]  sm:w-full md:max-w-[38rem] w-full h-full bg-black/50 rounded-xl text-white text-left'>
                <p className='font-bold text-3xl px-2 pt-14'>Sun's Out, BOGO's Out</p>
                <p className='text-2xl pt-2 px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-6'>Order Now</button>
            </div>
            <img 
            className='max-h-[16rem] md:max-h-[20rem] md:max-w-[38rem] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=600' alt='Bogo-image'/>
        </div>
        {/* Card */}
        <div className='rounded-xl relative'>
            {/* overlay */}
            <div className='absolute max-h-[16rem] md:max-h-[20rem] md:max-w-[38rem] w-full h-full bg-black/50 rounded-xl text-white text-left'>
                <p className='font-bold text-3xl px-2 pt-14'>New restaurants</p>
                <p className='text-2xl pt-2 px-2'>Added Daily</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-6'>Order Now</button>
            </div>
            <img 
            className='max-h-[16rem] md:max-h-[20rem] md:max-w-[38rem] w-full h-full object-cover rounded-xl' src='https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=600' alt='Bogo-image'/>
            
        </div>
        {/* Card */}
        <div className='rounded-xl relative'>
            {/* overlay */}
            <div className='absolute max-h-[16rem] md:max-h-[20rem] md:max-w-[38rem] w-full h-full bg-black/50 rounded-xl text-white text-left'>
                <p className='font-bold text-3xl px-2 pt-14'>We Deliver Desserts Too</p>
                <p className='text-2xl pt-2 px-2'>Tasty Treats</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-6'>Order Now</button>
            </div>
            <img 
            className='max-h-[16rem] md:max-h-[20rem] md:max-w-[38rem] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/6210876/pexels-photo-6210876.jpeg?auto=compress&cs=tinysrgb&w=600' alt='Bogo-image'/>
        </div>
    </div>
  )
}

export default HeadlineCards
