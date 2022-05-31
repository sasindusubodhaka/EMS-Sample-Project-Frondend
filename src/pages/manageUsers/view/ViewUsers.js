import React from 'react'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteForever } from '@material-ui/icons';
import ViewUser from './ViewAndEditUser';
import '../user.css'
import { useSelector } from 'react-redux'
import withReducer from '../../../store/WithReducer'
import reducer from '../store/reducer'
// import { DummyUserData } from './DummyUserData';



const ViewUsers = () => {
  const reducerData = useSelector(({ users }) => users.manageUsers)
  const userList = reducerData.userList;


  const columns = [
    { field: 'userId', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      // renderCell:(params)=>{
      //   return(
      //     <div className='userListUser'> 
      //       <img className='userListImg' src={params.row.avatar} alt=""/>
      //       {params.row.firstName}
      //     </div>
      //   )
      // }
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

    },
    {
      field: 'role',
      headerName: 'Role',
      width: 100,
      editable: true,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (userList) => {
        // console.log("render Cell :",userList.row)
        let userDetails = userList.row
        return (
          <>
            <ViewUser userDetails={userDetails} />
            <button> <DeleteForever className='userListDelete' /></button>

          </>
        )
      }
    },
  ];


  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={userList}
        columns={columns}
        pageSize={8}
        // checkboxSelection
        disableSelectionOnClick
        getRowId={(userList) => userList.userId}

      />
    </div>
  )
}

export default withReducer('users', reducer)(ViewUsers)
