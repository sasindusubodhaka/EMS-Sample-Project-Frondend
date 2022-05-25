import React from 'react'
import DashboardIcon from '@material-ui/icons/Dashboard'
import { AccountBalance, People, Create, CallToAction, Mail, ViewList, PersonAdd } from '@material-ui/icons'


export const adminMenuItems = [
  {
    icon: <DashboardIcon style={{ color: '#fff' }} />,
    name: 'Dashboard',
    url: '/admin/dashboard',
  },
  {
    icon: <AccountBalance style={{ color: '#fff' }} />,
    name: 'Departments',
    children: [
      {
        icon: <Create style={{ color: '#fff' }} />,
        name: 'Create',
        url: '/admin/createdepartments',
      },
      {
        icon: <ViewList style={{ color: '#fff' }} />,
        name: 'View',
        url: '/admin/viewdepartments',
      },
    ],
  },
  {
    icon: <People style={{ color: '#fff' }} />,
    name: 'Manage Users',
    url: '',
    children: [
      {
        icon: <PersonAdd style={{ color: '#fff' }} />,
        name: 'Add Users',
        url: '/admin/registerusers',
      },
      {
        icon: <ViewList style={{ color: '#fff' }} />,
        name: 'View',
        url: '/admin/viewusers',
      },
    ],
  },
  {
    icon: <CallToAction style={{ color: '#fff' }} />,
    name: 'Staff Notice',
    url: '',
  },
  {
    icon: <Mail style={{ color: '#fff' }} />,
    name: 'Mail',
    url: ''
  }

]