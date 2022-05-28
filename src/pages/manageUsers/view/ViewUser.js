import React, { useState } from 'react'
import Modal from 'react-modal'
import { PermIdentity, Publish, CalendarToday, AccountBalance, MailOutline, AccountCircle } from '@material-ui/icons';
import "../user.css"
Modal.setAppElement('#root')

const ViewUser = () => {
    const [modalIsopen, setmodalIsopen] = useState(false);
    return (
        <>
            <button className="userListEdit" onClick={() => setmodalIsopen(true)} style={{ height: '40px', float: 'right' }}>
                Edit
            </button>
            <Modal isOpen={modalIsopen}
                onRequestClose={() => setmodalIsopen(false)}
                style={
                    {
                        overlay: {
                            backgroundColor: 'rgba(0,0,240,0.25)',
                            top: '0px',
                            right: '0px',
                            left: '0px',
                            bottom: '0px',
                            position: 'fixed'
                        },
                        content: {
                            color: 'darkBlue',
                            top: '50px',
                            right: '400px',
                            left: '450px',
                            bottom: '250px',


                        }
                    }
                }
            >
                <div className='user'>
                    <div className='userTitleContainer'>
                        <h1 className='userTitle'>View and Edit User</h1>
                    </div>
                    <div className='userContainer'>
                        <div className='userShow'>
                            <div className='userShowTop'>
                                <img src="/images/profile.jpg" alt="" className='userShowImg' />
                                <div className='userShowTopTitle' >
                                    <span className='userShowUserName'>Anna Becker</span>
                                    <span className='userShowUserTitle'>Software Engineer</span>
                                </div>
                            </div>
                            <div className='userShowBottom'>
                                <span className='userShowTitle'>Account Details</span>
                                <div className='userShowInfo'>
                                    <AccountCircle className='userShowIcon' />
                                    <span className='userShowInfoTitle'>annabeck99</span>
                                </div>
                                <div className='userShowInfo'>
                                    <MailOutline className='userShowIcon' />
                                    <span className='userShowInfoTitle'>annabeck99gmail.com</span>
                                </div>
                                <div className='userShowInfo'>
                                    <AccountBalance className='userShowIcon' />
                                    <span className='userShowInfoTitle'>Department : Sales</span>
                                </div>
                                <div className='userShowInfo'>
                                    <CalendarToday className='userShowIcon' />
                                    <span className='userShowInfoTitle'>Created On: 2022.05.04</span>
                                </div>
                                <div className='userShowInfo'>
                                    <PermIdentity className='userShowIcon' />
                                    <span className='userShowInfoTitle'>Role : Developer</span>
                                </div>
                            </div>
                        </div>
                        <div className='userUpdate'>
                            <span className='userUpdateTitle'>Edit</span>
                            <form className='userUpdateForm'>
                                <div className='userUpdateLeft'>
                                    <div className='userUpdateItem'>
                                        <label>First Name</label>
                                        <input type="text"
                                            placeholder='annabeck99'
                                            className='userUpdateInput' />
                                    </div>
                                    <div className='userUpdateItem'>
                                        <label>Last Name</label>
                                        <input type="text"
                                            placeholder='Lannister'
                                            className='userUpdateInput' />
                                    </div>
                                    <div className='userUpdateItem'>
                                        <label>Email</label>
                                        <input type="text"
                                            placeholder='annabeck99@gmail.com'
                                            className='userUpdateInput' />
                                    </div>
                                    <div className='userUpdateItem'>
                                        <label>Department</label>                                     
                                            <select name="departments" className="userUpdateSelect" id="dept">
                                                <option value="sales">Sales</option>
                                                <option value="hr">HR</option>
                                                <option value="it">IT</option>
                                            </select>                                  
                                    </div>
                                    <div className='userUpdateItem'>
                                        <label>Role</label>
                                        <input type="text"
                                            placeholder='developer'
                                            className='userUpdateInput' />
                                    </div>
                                </div>
                                <div className='userUpdateRight'>
                                    <div className='userUpdateUpload'>
                                        <img src='/images/profile.jpg' className='userUpdateImg' alt="profile" />
                                        <label htmlFor='file'><Publish className='userUpdateIcon'/></label>
                                        <input type="file" id="file" style={{ display: 'none' }} />
                                    </div>
                                  <button className='userUpdateButton'>Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default ViewUser
