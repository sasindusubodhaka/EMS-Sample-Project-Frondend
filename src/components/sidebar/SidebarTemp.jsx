import React from 'react'
import './sidebar.css'
import { AccountBalance, People, Create, CallToAction, Mail } from '@material-ui/icons'

const SidebarTemp = () => {
    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Dashboard</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem active '>
                            <AccountBalance className='sidebarIcon' />
                            Departments
                        </li>
                        <li className='sidebarListItem'>
                            <People className='sidebarIcon' />
                            Users
                        </li>
                        <li className='sidebarListItem'>
                            <Create className='sidebarIcon' />
                            Staff Leave
                        </li>
                        <li className='sidebarListItem'>
                            <CallToAction className='sidebarIcon' />
                            Staff Notice
                        </li>
                        <li className='sidebarListItem'>
                            <Mail className='sidebarIcon' />
                            Mail
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SidebarTemp
