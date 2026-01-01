import React from 'react'
import { Outlet } from "react-router-dom";
import ClientNavbar from './ClientNavbar';

function ClientPageLayout() {
  return (
    <>
    <ClientNavbar/>
    <main className='min-h-screen bg-gray-50'>
        <Outlet/>
    </main>
    </>
  )
}

export default ClientPageLayout