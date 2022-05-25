import React from 'react'
import './topbar.css'
import { NotificationsNone, Language, Settings ,ExitToApp} from '@material-ui/icons'
import { useNavigate } from 'react-router-dom'

const Topbar = () => {
    const navigate = useNavigate();
    const exit=()=>{
        navigate('/login')
    }
    return (
        <div className='topbar'>
            <div className='topbarWrapper'>
                <div className='topLeft'>
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
                    <img src="/images/profile.jpg" className='topAvator' alt="profile" />
                    <div className='topbarIconContainer'>
                        <ExitToApp onClick={exit}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Topbar