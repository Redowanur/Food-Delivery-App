import React from 'react'

const Shimmer1 = () => {
  return (
    <div className='grid grid-cols-4 gap-4 w-[1300px] my-10'>
      {Array(8).fill('').map(() => 
        <div className="max-w-85 h-[400px] rounded-xl my-4 md:my-0 bg-slate-300 p-3">
            <div className='h-[60%]'></div>
            <div className='h-7 w-full rounded-xl bg-gray-400 mt-1'></div>
            <div className='h-7 w-10 rounded-xl bg-gray-400 mt-1'></div>
            <div className='h-10 w-full rounded-xl bg-gray-400 mt-1'></div>
        </div>)}
    </div>
  )
}

export default Shimmer1
