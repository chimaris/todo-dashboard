import React from 'react'
import Sidebar from './Sidebar'
import Main from './Main'
import Header from './Header'

const Dashboard = () => {
  return (
    <div className='flex w-full'>
        <Sidebar/>
        <div className='bg-[#FCFBFC] rounded-r-lg w-full'>
            <Header/>
            <Main/>
        </div>
    </div>
  )
}

export default Dashboard