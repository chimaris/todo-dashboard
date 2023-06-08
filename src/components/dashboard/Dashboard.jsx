import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Main from './Main'
import Header from './Header'
import iconDashboard from '../../assets/icons/icon-dashboard.svg'


const Dashboard = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className='flex w-full'>
        <Sidebar/>
        <div className='bg-[#FCFBFC] rounded-r-xl w-full'>
          <div className='bg-[#1D1042] text-white flex justify-between lg:hidden p-5'>
              <h1>Dashboard</h1>
              <img src={iconDashboard} alt="" className='cursor-pointer' onClick={() => setToggle(!toggle)} />
          </div>
            <Header/>
            <Main/>
        </div>
    </div>
  )
}

export default Dashboard