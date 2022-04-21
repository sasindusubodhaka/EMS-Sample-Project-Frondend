import React from 'react'
import SideMenu from '../../components/SideMenu'
import Header from '../../components/Header'
import Employees from '../Employees/Employees'

function Dashboard() {
    return (
        <>
            <SideMenu />
            <div className={classes.appMain}>
                <Header />
                <Employees />
            </div>
        </>
    )
}

export default Dashboard