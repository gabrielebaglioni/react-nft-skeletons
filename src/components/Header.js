import React from 'react'
import logo from '../assets/img/logo.png'
import searchIcon from '../assets/img/search.png'
import switchTheme from '../assets/img/theme-switch.png'

const Header = () => {
  return (
    <div className='flex w-full justify-between items-center h-12 text-white mr-4'>
      <div className='mx-4'>
         <img className='w-32 cursor-pointer' src={logo} alt='' />
      </div>
      <div className='bg-[#1c1c1e] flex flex-1 h-12 items-center rounded-3xl '>
         <div className='m-4 '>
            <img className='w-4' src={searchIcon} alt='' />
         </div>
         <input className='bg-transparent w-full outline-none text-[#eee] text-base '
          placeholder='Search collection,  items  or  user  ' />
      </div>
      <div className='text-[#a1a5b0] cursor-pointer'>
         <span className='mx-2'>Drops</span>
         <span className='mx-2'>Marketplace</span>
         <span className='mx-2'>Create</span>
      </div>
      <div className='flex items-center cursor-pointer'>
        <div className='mx-6  flex bg-[#1c1c1e] rounded-full p-3 justify-center items-center object-contain' >
          <img className='w-6' src={switchTheme} alt='' />
        </div>
      </div>
      <div className='flex bg-gradient-to-r from-cyan-500 to-cyan-800 text-black  h-12 w-18 rounded-3xl justify-center items-center p-6 ont-light text-sm '>
        <button>SING-IN</button>
      </div> 
    </div>
  )
}

export default Header