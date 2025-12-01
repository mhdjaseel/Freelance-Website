import React from 'react'

function Footer() {
  return (
    <>
      <hr className='text-emerald-500' />
      <div className='grid justify-center lg:grid-cols-2 md:items-center mb-5 lg:p-8 '>
        <div className='p-5 '>


        <p><span className='
      text-xl
      font-semibold
      font-DynaPuff
      text-emerald-500
      '>
        CraftNest
        </span>
         © CraftNest International Ltd. 2025
        </p>

      </div>

      <div className='text-dark  flex gap-4 justify-center'>
        <div>
        <i  class="fa-brands fa-linkedin"></i>

        </div>
        <div>
        <i  class="fa-brands fa-instagram"></i>

        </div>
<div>
        <i class="fa-brands fa-facebook"></i>

</div>
      </div>
      </div>
    </>
  )
}

export default Footer