import React from 'react'
import weth from '../assets/img/weth.png'

const ColletionCard = ({id, name, traits, image}) => {
  return (
    <div className='text-white bg-[#1a1c1e] rounded-2xl w-72 h-fit overflow-hidden mr-7'>
        <img className='' src={image} alt='' />
      <div className='pt-4 pb-20 pl-6 font-extralight '>
         <div className='text-xl font-bold font-sans'> 
            {name}
            <div className='text-[#a1a5b0] text-lg'>.#{id}</div>
         </div>
         <div className='flex items-center mt-2 object-contain'>
         <img className='h-5'  src={weth} alt=''  />
         <div className='font-semibold ml-1'>{traits[0]?.value} </div>
         </div>
      </div> 
    </div>
  )
}

export default ColletionCard