import React from 'react'

function Whychoose() {
  return (
    <div> <div className='flex-[1.5] bg-white rounded-3xl shadow-sm p-1 md:py-4 md:px-5'>
      <h2 className='text-2xl font-bold text-gray-800 mb-6'>
        Why Choose Us?
      </h2>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
        {features.map((item) => (
          <div
            key={item.id}
            className='bg-[#f8f8fb] rounded-2xl px-3  gap-2 flex flex-col items-center text-center shadow-2xl hover:shadow-md duration-300 overflow-hidden'>
            <div className='w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-sm'>
              <img src={item.image} alt={item.title} className='w-14 h-14 object-contain' />
            </div>
            <h4 className='font-bold text-sm'>
              {item.title}
            </h4>
          </div>
        ))}
      </div>
    </div></div>
  )
}

export default Whychoose