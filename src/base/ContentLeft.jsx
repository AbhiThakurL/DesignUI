import React from 'react'

export default function ContentLeft() {
  const ShowOff = [
    {title:"20+", subtitle:"The Years of  Our Experience"},
    {title:"840+", subtitle:"The Years of  Our Experience"},
    {title:"95%", subtitle:"The Years of  Our Experience"},
  ]
  return (
    <div className='w-[50%] h-full '>
        <h1 className='text-[3.2vw] font-bold leading-[3.4vw] '>Private Mental Health Consultation from a Professional </h1>
        <p className='w-[70%] text-[1vw] py-[1.5vw] '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium amet nulla illum nam! Quia, repudiandae quod nemo cum harum fugit, quisquam, est illo blanditiis itaque sed. Consectetur praesentium dolorem animi.</p>
        <div className='flex gap-4 w-[100%]'>
            <button className='px-[3vw] py-[0.8vw] bg-green-600 text-white rounded-full font-medium text-[1vw]'>Get A Consultation <i className="ri-share-box-fill"></i> </button>
            <button className='px-[1.5vw] py-[0.8vw]  text-yellow-500 rounded-full border-2 border-yellow-500 font-medium text-[1vw]'>Lerm More <i className="ri-share-box-fill"></i>   </button>
        </div>

        <div className='flex items-center gap-[3.5vw] w-[100%] p-10 my-2 '>
            {ShowOff.map((e)=>(
              <div key={e.title} className=''>
                <span className='text-3xl text-yellow-500 font-bold'>{e.title}</span>
                <p className='py-1 text-[0.8vw] font-semibold text-gray-500 w-20'>{e.subtitle}</p>
              </div>
            ))}
        </div>    

        
    </div>
  )
}
