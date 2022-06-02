import React,{useEffect} from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import Dashboard from './Dashboard'
import Layout from '../../components/layout/Layout'
import '../../App/App.css'
import Footer from '../../components/footer/Footer'
import {adminMenuItems} from '../../components/sidebar/MenuItems'
import { useDispatch } from 'react-redux'
import * as Actions from './store/action/AdminDashboardAction'

const DashboardBase = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(Actions.getDataCardDetails());
        dispatch(Actions.getRegisteredUsers());
        dispatch(Actions.getDeptWiseUserCount());
    }, [])
    
    return (
        <>
        <Layout 
            header={<Topbar/>}
            sidebar ={<Sidebar menuItems={adminMenuItems} />}
            footer={<Footer/>}
            content={
                <div style={{
                    padding:'20px',
                    minHeight:'880px',
                    backgroundColor:'#ebf5f7'
                    }} >
                    <Dashboard />
                </div>
            }
        />
         
          
        </>
    )
}

export default DashboardBase

   {/* <Topbar />
            <div className='container'>
                <Sidebar />  
                <div className='other'>  <Dashboard /></div>          
            </div> */}