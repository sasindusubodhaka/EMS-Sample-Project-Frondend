import React from 'react'
import './topbar.css'
import { NotificationsNone, Language, Settings } from '@material-ui/icons'


const Topbar = () => {
    return (
        <div className='topbar'>
            <div className='topbarWrapper'>
                <div className='topLeft'>
                    <div className='logoContainer'>
                        <img className='logo' src="/images/ems_logo.png" alt="logo" />
                    </div>
                    <div className='logoContainer'>
                        <span className='system'>EMS</span>
                    </div>
                </div>
                <div className='topRight'>
                    <div className='topbarIconContainer'>
                        <NotificationsNone />
                        <span className='topIconBadge'>2</span>
                    </div>
                    <div className='topbarIconContainer'>
                        <Language />
                    </div>
                    <div className='topbarIconContainer'>
                        <Settings />
                    </div>
                    <img src="/images/profile.jpg" className='topAvator'  alt="profile"/>
                </div>
            </div>
        </div>
    )
}
export default Topbar