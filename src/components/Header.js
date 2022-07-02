import React from 'react'
import logo from '../assets/img/logo.png'

const Header = () => {
  return (
    <div className='flex w-full  h-24 text-white'>
      <div className=''>
         <img className='w-32' src={logo} alt='' />
      </div>
      <div className=''>
         <div className=''>
            <img/>
         </div>
      </div>
    </div>
  )
}

export default Header