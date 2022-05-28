import React from 'react'
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'department',
    headerName: 'Department',
    width: 200, 
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 300, 
  },

];

const rows = [
  { id: 1, department: 'Sales', description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"},
  { id: 2, department: 'IT', description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"},
  { id: 3, department: 'HR', description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"},
 
];

const ViewDept = () => {
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

export default ViewDept
