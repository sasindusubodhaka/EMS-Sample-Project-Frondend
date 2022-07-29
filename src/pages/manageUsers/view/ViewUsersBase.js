import React, { useEffect } from 'react'
import Layout from '../../../components/layout/Layout'
import Topbar from '../../../components/topbar/Topbar'
import Sidebar from '../../../components/sidebar/Sidebar'
import { adminMenuItems } from '../../../components/sidebar/MenuItems'
import Footer from '../../../components/footer/Footer'
import ViewUsers from './ViewUsers'
import axios from 'axios'
import * as Actions from '../store/actions/UserActions'
import { useDispatch } from 'react-redux'

const ViewUsersBase = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(Actions.getUserList())
        dispatch(Actions.getdepartmentList())
        
    }, [])

    return (
        <>
            <Layout
                header={<Topbar />}
                sidebar={<Sidebar menuItems={adminMenuItems} />}
                footer={<Footer />}
                content={
                    <div style={{
                        padding: '20px',
                        minHeight: '880px',
                        backgroundColor: '#ebf5f7'
                    }} >
                        <ViewUsers />
                    </div>
                }
            />
        </>
    )
}

export default ViewUsersBase
