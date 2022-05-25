import React from 'react'
import Layout from '../../../components/layout/Layout'
import Topbar from '../../../components/topbar/Topbar'
import AddUser from './AddUser'
import Sidebar from '../../../components/sidebar/Sidebar'
import {adminMenuItems} from '../../../components/sidebar/MenuItems'
import Footer from '../../../components/footer/Footer'

const AddUserBase = () => {
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
                        <AddUser />
                    </div>
                }
            />


        </>
    )
}

export default AddUserBase
