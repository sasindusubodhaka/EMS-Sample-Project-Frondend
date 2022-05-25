import React from 'react'
import Layout from '../../../components/layout/Layout'
import Topbar from '../../../components/topbar/Topbar'
import Sidebar from '../../../components/sidebar/Sidebar'
import {adminMenuItems} from '../../../components/sidebar/MenuItems'
import Footer from '../../../components/footer/Footer'
import CreateDept from './CreateDept'

const CreateDeptBase = () => {
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
                        <CreateDept />
                    </div>
                }
            />


        </>
    )
}

export default CreateDeptBase
