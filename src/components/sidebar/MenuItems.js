import React from 'react'
import DashboardIcon from '@material-ui/icons/Dashboard'
// import PeopleIcon from '@material-ui/icons/People'
// import AssignmentIndIcon from '@material-ui/icons/AssignmentInd'
// import AssignmentIcon from '@material-ui/icons/Assignment'
// import BarChartIcon from '@material-ui/icons/BarChart'
import PersonIcon from '@material-ui/icons/Person'
// import ScheduleIcon from '@material-ui/icons/Schedule'
// import SendIcon from '@material-ui/icons/Send'
// import HistoryIcon from '@material-ui/icons/History'
// import ListAltIcon from '@material-ui/icons/ListAlt'

export const adminMenuItems = [
    {
      icon: <DashboardIcon style={{ color: '#fff' }} />,
      name: 'Dashboard',
      url: '/admin/dashboard',
    },
    {
      icon: <PersonIcon style={{ color: '#fff' }} />,
      name: 'Manage Doctors',
      children: [
        {
          name: 'View Doctors',
          url: '/admin/viewdoctors',
        },
        {
          name: 'Register Doctors',
          url: '/admin/registerdoctors',
        },
      ],
    },
    {
      icon: <PersonIcon style={{ color: '#fff' }} />,
      name: 'Manage Nurses',
      url: '',
      children: [
        {
          name: 'View Nurses',
          url: '/admin/viewnurse',
        },
        {
          name: 'Register Nurse',
          url: '/admin/registernurse',
        },
      ],
    }
]