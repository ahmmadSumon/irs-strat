import React from 'react'

const Steps = () => {
  return (
    <div className='bg-[#2c60ca]'>
        <div className='justify-between items-center py-8 gap-5  max-w-[90rem] mx-auto px-4 sm:px-6  grid grid-cols-1 md:grid-cols-4 text-white'>
        <div className=''>
            <p className='text-center mb-3'>Step 1</p>
            <p>Receive a free, no-obligation consultation and get pre-qualified for various tax relief programs.</p>
        </div>
        <div className=''>
            <p className='text-center mb-3'>Step 2</p>
            <p>Review your tax relief options with a tax professional and decide which one is right for you.</p>
        </div>
        <div className=''>
            <p className='text-center mb-3'>Step 3</p>
            <p>Our tax partners get to work preparing your returns and bringing you back into compliance.</p>
        </div>
        <div className=''>
            <p className='text-center mb-3'>Step 4</p>
            <p>Celebrate your freedom from tax debt and take back your life!</p>
        </div>
        </div>
      
    </div>
  )
}

export default Steps
