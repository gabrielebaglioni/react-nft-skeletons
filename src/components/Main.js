import React from 'react'
import twitterLogo from '../assets/img/twitter.png'
import instagramLogo from '../assets/img/instagram.png'
import more from '../assets/img/more.png'
import './Main.css'
import  { useState} from "react";

const Main = (selectedSkeletons, SkeletonsListData) => {
   const [ activeSkeletons, setActiveSkeletons  ] = useState(SkeletonsListData[0])
  return (
    <div className='main max-h-[50vh] mt-3'>
       <div className='main-content flex pb-5'>
          <div className='punk-higlit flex justify-center items-center'>
             <div className='punk-container rounded-3xl overflow-hidden flex mr-5'>
                {/* <img className='' src={activeSkeletons.image_original_url}  alt=''/> */}
                <img className='selected-punk' src='https://lh3.googleusercontent.com/RfaomEs0FARQbMtC58tIFiVv6XqYG-Y9C164HlkLMq60W4DhtuzlRl3AHEY8xcRW8NsuOXRIu3s6JDOW_Pj9xEgCdL_YR6aEhL6_PNw=w350'/>
             </div>
          </div>
          <div className='punk-details text-white flex flex-col justify-center'>
               <div className='title text-8xl font-black'>
                  {/* {activeSkeletons.name} */}
                  ccccc
               </div> 
               <span className='item-number text-[#a1a5b0] items-center text-7xl'></span>
               <span className=''>#</span>
               <div className= 'owner text-white flex mt-3 justify-between'>
                  <div className='owner-img-container w-12 h-12 rounded-full overflow-hidden object-contain'>
                    <img className='' src='https://lh3.googleusercontent.com/RfaomEs0FARQbMtC58tIFiVv6XqYG-Y9C164HlkLMq60W4DhtuzlRl3AHEY8xcRW8NsuOXRIu3s6JDOW_Pj9xEgCdL_YR6aEhL6_PNw=w350' alt='' /> 
                  </div>
                  <div className='owner-details flex flex-1 items-center '>
                     <div className='owner-name-and-handele flex-1  items-end '>
                        <div>0xnc287hcunb2cbn29uhf8hc29cnb29urbv278</div>
                        <div className='owner-handle text-cyan-500'>@franky disign by udemi</div>
                     </div>
                        <div className='flex justify-end mr-6'>
                                 <div className='p-3 rounded-full h-12 w-12 ml-2 border border-cyan-500'>
                                    <img className='h-full w-full' src={twitterLogo} alt='' />
                                 </div>
                                 <div className='p-3 rounded-full h-12 w-12 ml-2 border border-cyan-500'>
                                    <img className='h-full w-full' src={instagramLogo} alt='' />
                                 </div>
                                 <div className='p-3 rounded-full h-12 w-12 ml-2 border border-cyan-500'>
                                    <img className='h-full w-full' src={more} alt='' />
                                 </div>
                        </div>
                  </div>
               </div>
          </div>
       </div>
    </div>
  )
}

export default Main