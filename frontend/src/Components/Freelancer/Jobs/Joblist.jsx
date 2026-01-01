import React from 'react'

function Joblist() {
  return (
    <>
     <div className='space-y-4 flex flex-col justify-center items-center'>
        <div  className='w-full max-w-5xl mt-3  bg-white rounded-lg shadow hover:shadow-md transition p-6'>
           <div className='flex justify-between'>
            <h1 className='text-lg font-semibold '>Full Stack Web Developer</h1>
            <h1 className=' bg-blue-100 text-blue-800 text-xs font-medium rounded-full p-1'> Web Development</h1>

           </div>
            <p className='text-gray-500'>Posted 2 hours ago</p>
            <p className='text-gray-700'>Looking for an experienced developer to build a modern e-commerce platform with React and Node.js.</p>
            <div className='flex gap-3  pt-2 border-b border-gray-300 pb-3'>
                <p className='border border-gray-100 px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full'>Node Js</p>
                <p className='border border-gray-100 px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full'>Mongo db</p>
                <p className='border border-gray-100 px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full'>React</p>
            </div>
            <div className='sm:flex justify-between'>
                <div className='flex justify-start gap-4  pt-2'>
                <p className='text-gray-600 font-semibold'>
                   $ $300-$500
                </p>
                <p className='text-gray-600'>
                    DeadLine: 12/12/2023
                </p>
                <p className='text-gray-600'>
                    Entry Level
                </p>
                </div>
                <div className='sm:flex items-center mt-2 sm:space-x-3 space-y-2 '>
                    <p className='text-gray-500'>6 proposals</p>

                    <button className='bg-blue-600 p-1 rounded-xl text-amber-50 cursor-pointer'>Apply</button>
                </div>
            </div>
        </div>

        <div  className=' w-full max-w-5xl bg-white rounded-lg shadow hover:shadow-md transition p-6'>
                       <div className='flex justify-between'>
            <h1 className='text-lg font-semibold '>Full Stack Web Developer</h1>
            <h1 className=' bg-blue-100 text-blue-800 text-xs font-medium rounded-full p-1'> Web Development</h1>

           </div>
            <p className='text-gray-500'>Posted 2 hours ago</p>
            <p className='text-gray-700'>Looking for an experienced developer to build a modern e-commerce platform with React and Node.js.</p>
            <div className='flex gap-3  pt-2 border-b border-gray-300 pb-3'>
                <p className='border border-gray-100 px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full'>Node Js</p>
                <p className='border border-gray-100 px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full'>Mongo db</p>
                <p className='border border-gray-100 px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full'>React</p>
            </div>
            <div className='sm:flex justify-between'>
                <div className='flex justify-start gap-4  pt-2'>
                <p className='text-gray-600 font-semibold'>
                   $ $300-$500
                </p>
                <p className='text-gray-600'>
                    DeadLine: 12/12/2023
                </p>
                <p className='text-gray-600'>
                    Entry Level
                </p>
                </div>
                <div className='sm:flex items-center mt-2 sm:space-x-3 space-y-2'>
                    <p className='text-gray-500'>6 proposals</p>
                    <button className='bg-blue-600 p-1 rounded-xl text-amber-50 cursor-pointer '>Apply</button>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default Joblist