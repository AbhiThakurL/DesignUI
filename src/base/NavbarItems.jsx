import React from 'react'

export default function NavbarItems() {
  return (
    <div>
        <ul className='flex gap-8 font-medium   text-[1vw]'>
            <li className='text-green-600 hover:cursor-pointer'>Home</li>
            <li className='hover:text-green-600 hover:cursor-pointer' >About</li>
            <li className='hover:text-green-600 hover:cursor-pointer'>Program</li>
            <li className='hover:text-green-600 hover:cursor-pointer'>Help</li>
            <li className='hover:text-green-600 hover:cursor-pointer'>Content</li>
        </ul>
    </div>
  )
}
