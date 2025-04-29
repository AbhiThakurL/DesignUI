import React from 'react'
import ContentLeft from './ContentLeft'
import ContentRight from './ContentRight'
export default function Content() {
  return (
    <div className='w-[100%] h-[85vh] flex  items-center justify-between gap-[15.5vw] py-2'>
        <ContentLeft/>
        <ContentRight/>
    </div>
  )
}
