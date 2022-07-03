import React from 'react'
import ColletionCard from './ColletionCard'

const SkeletonsList = ({SkeletonsListData, setSelectedSkeletons  }) => {
  return (
    <div className='flex overflow-x-scroll scrollbar-hide cursor-pointer border-y-2 border-cyan-700 py-7'> 
      {SkeletonsListData.map(skeletons => (
         <div className='pr-4' onClick={() => setSelectedSkeletons(skeletons.token_id)}>
            <ColletionCard
            key={skeletons.id}
            id={skeletons.token_id}
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