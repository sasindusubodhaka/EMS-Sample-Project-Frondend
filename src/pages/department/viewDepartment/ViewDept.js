import React from 'react'
import { DataGrid } from '@material-ui/data-grid';
import { useSelector } from 'react-redux'
import withReducer from '../../../store/WithReducer'
import reducer from '../store/reducer'

const ViewDept = () => {
  const reducerData = useSelector(({ depts }) => depts.manageDepts)
  const deptList = reducerData.deptList;

  const columns = [
    { field: 'departmentId', headerName: 'ID', width: 90 },
    {
      field: 'name',
      headerName: 'Department',
      width: 200, 
    },
    {
      field: 'description',
      headerName: 'Description',
      width: 300, 
    },
  
  ];
  return (
    <div style={{ height: 600, width: '100%'}}>
    <DataGrid
      rows={deptList}
      columns={columns}
      pageSize={8}
      // checkboxSelection
      disableSelectionOnClick
      getRowId={(deptList) => deptList.departmentId}
        
    
    />
  </div>
  )
}

export default withReducer('depts', reducer)(ViewDept)