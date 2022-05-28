import React from 'react'
import './addUser.css'
const AddUser = () => {
    return (
        <div className='newUser' >
            <h1 className='newUserTitle'>New User</h1>
            <form className='newUserForm'>
                <div className='newUserItem'>
                    <label>First Name</label>
                    <input type="text" placeholder='john' />
                </div>
                <div className='newUserItem'>
                    <label>Last Name</label>
                    <input type="text" placeholder='Smith' />
                </div>
                <div className='newUserItem'>
                    <label>Email</label>
                    <input type="email" placeholder='john@gmail.com' />
                </div>
                <div className='newUserItem'>
                    <label>Password</label>
                    <input type="password" placeholder='' />
                </div>
                <div className='newUserItem'>
                    <label>Department</label>
                    <select name="departments" className='newUserSelect' id="dept">
                        <option value="sales">Sales</option>
                        <option value="hr">HR</option>
                        <option value="it">IT</option>
                    </select>
                </div>
                <div className='newUserItem'>
                    <label>Role</label>
                    <input type="text"
                        placeholder='developer'
                    />
                </div>
                <div className='newUserItem'>
                    
                </div>
                <div className='newUserItem'>
                    <button className='newUserButton'>Add User</button>
                </div>
            </form>
        </div>
    )
}

export default AddUser