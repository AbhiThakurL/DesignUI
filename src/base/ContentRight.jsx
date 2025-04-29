import React from 'react'

export default function ContentRight() {
  return (
    <div className='w-[50%] h-full  relative ' >
        <div className='w-[60%] h-[70%] bg-orange-200 absolute top-0 left-0 z-10 rounded-s-[5vw]'>
          <img src="https://images.unsplash.com/photo-1498746607408-1e56960e3bdd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='object-cover object-center  w-[100%] h-[100%] rounded-br-[4vw] absolute top-[20%] left-6' />
        </div>
        <div className='w-[60%] h-[70%] bg-indigo-400 absolute top-[20%] left-[10%]'></div>
      </div>
     
  )
}
