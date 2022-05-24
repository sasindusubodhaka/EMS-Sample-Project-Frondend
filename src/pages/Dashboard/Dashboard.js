import React from 'react'
import SideMenu from '../../components/SideMenu'
import Header from '../../components/Header'
import Employees from '../Employees/Employees'

function Dashboard() {
    // const classes = useStyles();
    return (
        <>
            <SideMenu />
            <div>
                <Header />
                <Employees />
            </div>
        </>
    )
}

export default Dashboard