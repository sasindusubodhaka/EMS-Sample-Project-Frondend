import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import Dashboard from './Dashboard'
import '../../App/App.css'
const DashboardBase = () => {
    return (
        <>
            <Topbar />
            <div className='container'>
                <Sidebar />  
                <div className='other'>  <Dashboard /></div>          
            </div>
          
        </>
    )
}

export default DashboardBase
