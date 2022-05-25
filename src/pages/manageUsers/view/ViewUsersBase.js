import React from 'react'
import Layout from '../../../components/layout/Layout'
import Topbar from '../../../components/topbar/Topbar'
import Sidebar from '../../../components/sidebar/Sidebar'
import {adminMenuItems} from '../../../components/sidebar/MenuItems'
import Footer from '../../../components/footer/Footer'
import ViewUsers from './ViewUsers'

const ViewUsersBase = () => {
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
