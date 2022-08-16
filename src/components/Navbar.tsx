import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag} from 'react-icons/ai'
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { MdFavorite, MdHelp } from 'react-icons/md'
import { FaWallet, FaUserFriends } from 'react-icons/fa'

const Navbar = () => {

  const [showNav, setShowNav] = useState(false)

  return (
    <div className='max-w-[120rem] mx-auto flex justify-between items-center p-4'>

      {/* LEFT SIDE */}

      <div className='flex items-center'>
        <div onClick={() => setShowNav(!showNav)} className='cursor-pointer'>
            <AiOutlineMenu size={25} />
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>Best <span className='font-bold'>Eats</span></h1>
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[1rem]'>
          <p className='bg-black text-white rounded-full p-2'>Delivery</p>
          <p className='p-2'>Pickup</p>
        </div>
      </div>

      {/* SEARCH INPUT */}

      <div className='bg-gray-200 flex item-center rounded-full px-2 w-[15rem] sm:w-[20rem] lg:w-[30rem]'>
        <AiOutlineSearch  size={20} className='self-center'/>
        <input className='bg-transparent p-2 w-full focus:outline-none' type='text' placeholder='Search food...'/>
      </div>

      {/* CART BUTTON */}

      <button className='bg-black text-white hidden sm:flex items-center rounded-full py-2'>
        <BsFillCartFill size={18}  className='mr-2'/> Cart
      </button>

      {/* Mobile Menu */}
      {/* overlay */}

      { showNav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}

      {/* side drawer menu */}
      <div className={ showNav ? 'fixed top-0 left-0 w-[20rem] h-screen bg-white z-10 duration-300' : 
      'fixed top-0 left-[-100%] w-[20rem] h-screen bg-white z-10 duration-300'}>
        <AiOutlineClose onClick={() => setShowNav(!showNav)} size={20} className='absolute right-4 top-4' cursor-pointer/>
        <h2 className='text-2xl p-4'>Best <span className='font-bold'>Eats</span></h2>
        <nav>
          <ul className='flex flex-col p-4 text-gray-800'>
            <li className='text-xl py-4 flex'><TbTruckDelivery size={20} className='mr-4'/> Orders</li>
            <li className='text-xl py-4 flex'><MdFavorite size={20} className='mr-4'/> Favorite</li>
            <li className='text-xl py-4 flex'><FaWallet size={20} className='mr-4'/> Wallet</li>
            <li className='text-xl py-4 flex'><MdHelp size={20} className='mr-4'/> Help</li>
            <li className='text-xl py-4 flex'><AiFillTag size={20} className='mr-4'/> Promotions</li>
            <li className='text-xl py-4 flex'><BsFillSaveFill size={20} className='mr-4'/> Best Ones</li>
            <li className='text-xl py-4 flex'><FaUserFriends size={20} className='mr-4'/> Invite Friends</li>
          </ul>
        </nav>
      </div>

    </div>
  )
}

export default Navbar
