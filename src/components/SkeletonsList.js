import React from 'react'
import ColletionCard from './ColletionCard'

const SkeletonsList = ({SkeletonsListData}) => {
  return (
    <div className=''> 
      {SkeletonsListData.map(skeletons => (
         <div className=''>
            <ColletionCard
            key={skeletons.id}
            id={skeletons.id}
            name={skeletons.name}
            traits={skeletons.traits}
            image={skeletons.image_original_url}
            />
         </div>
      ))}
    </div>
  )
}

export default SkeletonsList