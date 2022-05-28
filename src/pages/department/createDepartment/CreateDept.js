import React from 'react'
import '../department.css'

const CreateDept = () => {
  return (
    <div className='newDepartment' >
    <h1 className='newDepartmentTitle'>New Department</h1>
    <form className='newDepartmentForm'>
        <div className='newDepartmentItem'>
            <label>Department Name</label>
            <input type="text" placeholder='IT' />
        </div>
        <div className='newDepartmentItem'>
            <label>Description</label>
            <input type="text" placeholder='Enter the description' />
        </div>     
        <div className='newDepartmentItem'>
            
        </div>
        <div className='newDepartmentItem'>
            <button className='addDeptButton'>Add Department</button>
        </div>
    </form>
</div>
  )
}

export default CreateDept
