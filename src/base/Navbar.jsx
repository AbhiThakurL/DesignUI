import React from 'react'
import Logo from './Logo'
import NavbarItems from './NavbarItems'
import NavContentNumber from './NavContentNumber'
export default function Navbar() {
  return (
    <div className='w-[100%] h-[15vh] flex justify-between items-center '>
        <Logo />
        <NavbarItems/>
        <NavContentNumber />
    </div>
  )
}
