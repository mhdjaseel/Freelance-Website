import React from 'react'
import { Outlet } from 'react-router-dom'
import FreelancerNavbar from './FreelancerNavbar'

function FreelancerPageLayout() {
  return (
    <>
    <FreelancerNavbar/>
    <main className='min-h-screen bg-gray-50'>
        <Outlet/>
    </main>
    </>
  )
}

export default FreelancerPageLayout