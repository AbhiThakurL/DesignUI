import React from 'react'
import "remixicon/fonts/remixicon.css";
export default function NavContentNumber() {
  return (
    <div className=' flex gap-2 items-center ' >
        <div className='w-[2vw] h-[2vw] bg-green-600 rounded-full flex gap-2 items-center justify-center'>
            <i className="ri-phone-fill flex justify-center items-center text-white text-[1vw]"></i>
        </div>
        <span className='text-[1vw] font-medium'>+91 9149343236</span>
    </div>
  )
}
