import React from 'react'
import { DataGrid } from '@material-ui/data-grid';
import {DeleteForever} from '@material-ui/icons';
import ViewUser from './ViewUser';
import '../user.css'
const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,  
    renderCell:(params)=>{
      return(
        <div className='userListUser'> 
          <img className='userListImg' src={params.row.avatar} alt=""/>
          {params.row.firstName}
        </div>
      )
    }
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'department',
    headerName: 'Department',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',   
    width: 300,
    editable: true,
  },
  {
    field: 'createdOn',
    headerName: 'Created On',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    // valueGetter: (params) =>
    //   `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''
    //   }`,
  },
  {
    field: 'role',
    headerName: 'Role',   
    width: 100,
    editable: true,
  },
  {
    field:'action',
    headerName:'Action',
    width:150,
    renderCell:(params)=>{
      return(
        <>    
        <ViewUser />
        <button> <DeleteForever className='userListDelete'/></button>
       
        </>
      )
    }
  },
];

const rows = [
  { id: 1, lastName: 'Snow', avatar:'/images/profile.jpg',firstName: 'Jon', email: 'Jon@gmail.com' ,createdOn:'2022.05.26',role:'cleark'},
  { id: 2, lastName: 'Lannister',avatar:'/images/profile.jpg', firstName: 'Cersei', email: "Cersei@gmail.com" ,createdOn:'2022.05.26',role:'cleark'},
  { id: 3, lastName: 'Lannister',avatar:'/images/profile.jpg', firstName: 'Jaime', email: 'Jaime@gmail.com',createdOn:'2022.05.26',role:'cleark' },
  { id: 4, lastName: 'Stark',avatar:'/images/profile.jpg', firstName: 'Arya', email: "Arya@gmail.com" ,createdOn:'2022.05.26',role:'cleark'},
  { id: 5, lastName: 'Targaryen',avatar:'/images/profile.jpg', firstName: 'Daenerys', email: 'Daenerys@gmail.com',createdOn:'2022.05.26',role:'cleark' },
  { id: 6, lastName: 'Melisandre',avatar:'/images/profile.jpg', firstName: null, email: 'Melisandre@gmail.com',createdOn:'2022.05.26',role:'cleark' },
  { id: 7, lastName: 'Clifford', avatar:'/images/profile.jpg',firstName: 'Ferrara', email: 'Ferrara@gmail.com',createdOn:'2022.05.26',role:'cleark' },
  { id: 8, lastName: 'Frances', avatar:'/images/profile.jpg',firstName: 'Rossini', email: 'Rossini@gmail.com',createdOn:'2022.05.26',role:'cleark' },
  { id: 9, lastName: 'Roxie',avatar:'/images/profile.jpg', firstName: 'Harvey', email: 'Harvey@gmail.com',createdOn:'2022.05.26',role:'cleark' },
];
const ViewUsers = () => {
  return (
    <div style={{ height: 600, width: '100%'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={8}
        // checkboxSelection
        disableSelectionOnClick
          
      
      />
    </div>
  )
}

export default ViewUsers
