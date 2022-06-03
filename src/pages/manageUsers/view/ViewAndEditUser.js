import React, { useState } from 'react'
import Modal from 'react-modal'
import { PermIdentity, Publish, CalendarToday, AccountBalance, MailOutline, AccountCircle } from '@material-ui/icons';
import "../user.css"
import * as _ from 'lodash'
import validator from 'validator'
import { useDispatch } from 'react-redux'
import * as Actions from '../store/actions/UserActions'
Modal.setAppElement('#root')


const ViewAndEditUser = ({ userDetails }) => {
    const dispatch = useDispatch()
    const [modalIsopen, setmodalIsopen] = useState(false);

    let initFormValues = {
        userId: `${userDetails.userId}`,
        firstName: `${userDetails.firstName}`,
        lastName: `${userDetails.lastName}`,
        password: `${userDetails.password}`,
        createdOn: `${userDetails.createdOn}`,
        email: `${userDetails.email}`,
        department: `${userDetails.department}`,
        role: `${userDetails.role}`
    }

    const [formValues, setFormValues] = useState({ ...initFormValues })

    let initError = {
        firstNameErrors: {},
        lastNameErrors: {},
        emailErrors: {},
        roleErrors: {}
    }
    const [errors, setErrors] = useState({ ...initError })


    const onValueChange = (v) => {
        let value = v.target.value
        let name = v.target.name
        console.log("value :", value, "name :", name)
        setFormValues({ ...formValues, [name]: value })

    }


    const onSubmit = (e) => {
        e.preventDefault()
        const isValid = validation()
        if (isValid) {
            console.log('formValues before submit', formValues)
            dispatch(Actions.updateUser(formValues))
        } else {
            console.log('fail')
        }
    }


    const validation = () => {
        let localErrors = _.cloneDeep(errors)
        let isValid = true

        //validating firstName
        const firstNameLength = formValues.firstName.trim();
        if (firstNameLength < 1 || firstNameLength > 100) {
            let firstNameMissingOrTooLong = Object.assign({}, { missingOrTooLong: 'first name is missing or too long' }) //make a local object 'name Missing' and add the error
            localErrors.firstNameErrors = firstNameMissingOrTooLong //push the error to localErrors
            isValid = false

        } else {
            localErrors.firstNameErrors.missingOrTooLong = null
        }

        //validating lastName
        const lastNameLength = formValues.lastName.trim();
        if (lastNameLength < 1 || lastNameLength > 100) {
            let lastNameMissingOrTooLong = Object.assign({}, { missingOrTooLong: 'last name is missing or too long' }) //make a local object 'name Missing' and add the error
            localErrors.lastNameErrors = lastNameMissingOrTooLong //push the error to localErrors
            isValid = false

        } else {
            localErrors.lastNameErrors.missingOrTooLong = null
        }

        //validating email
        if (!validator.isEmail(formValues.email)) {
            let invalidEmail = Object.assign({}, { invalidEmailType: 'invalid email or missing ' })
            localErrors.emailErrors = invalidEmail
            isValid = false
        }
        else {
            localErrors.emailErrors.invalidEmailType = null
        }

        //validating roll error
        const roleLength = formValues.role.trim()
        if (roleLength < 1 || roleLength > 20) {
            let rolelengthError = Object.assign({}, { roleLenError: 'role is missing or too long' })
            localErrors.roleErrors = rolelengthError
            isValid = false
        }
        else {
            localErrors.roleErrors.roleLenError = null
        }
        setErrors({ ...localErrors }) //push all errors to errors object
        return isValid
    }

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
                                <img src="/images/profile3.jpg" alt="" className='userShowImg' />
                                <div className='userShowTopTitle' >
                                    <span className='userShowUserName'>{userDetails.firstName + " " + userDetails.lastName}</span>
                                    <span className='userShowUserTitle'>{userDetails.role}</span>
                                </div>
                            </div>
                            <div className='userShowBottom'>
                                <span className='userShowTitle'>Account Details</span>
                                <div className='userShowInfo'>
                                    <AccountCircle className='userShowIcon' />
                                    <span className='userShowInfoTitle'>{userDetails.firstName + " " + userDetails.lastName}</span>
                                </div>
                                <div className='userShowInfo'>
                                    <MailOutline className='userShowIcon' />
                                    <span className='userShowInfoTitle'>{userDetails.email}</span>
                                </div>
                                <div className='userShowInfo'>
                                    <AccountBalance className='userShowIcon' />
                                    <span className='userShowInfoTitle'>Department : {userDetails.department}</span>
                                </div>
                                <div className='userShowInfo'>
                                    <CalendarToday className='userShowIcon' />
                                    <span className='userShowInfoTitle'>Created On: {userDetails.createdOn}</span>
                                </div>
                                <div className='userShowInfo'>
                                    <PermIdentity className='userShowIcon' />
                                    <span className='userShowInfoTitle'>Role : {userDetails.role}</span>
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
                                            placeholder={formValues.firstName}
                                            className='userUpdateInput'
                                            value={formValues.firstName}
                                            onChange={onValueChange}
                                            name="firstName"
                                        />
                                        {/* first Name errors */}
                                        {Object.keys(errors.firstNameErrors).map((key, index) => {
                                            return (
                                                <div key={index} style={{ color: 'red' }}>
                                                    {errors.firstNameErrors[key]}
                                                </div>
                                            )
                                        })}
                                    </div>

                                    <div className='userUpdateItem'>
                                        <label>Last Name</label>
                                        <input type="text"
                                            placeholder={formValues.lastName}
                                            className='userUpdateInput'
                                            value={formValues.lastName}
                                            onChange={onValueChange}
                                            name="lastName"
                                        />
                                        {/* last Name errors */}
                                        {Object.keys(errors.lastNameErrors).map((key, index) => {
                                            return (
                                                <div key={index} style={{ color: 'red' }}>
                                                    {errors.lastNameErrors[key]}
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className='userUpdateItem'>
                                        <label>Email</label>
                                        <input type="text"
                                            placeholder={formValues.email}
                                            className='userUpdateInput'
                                            value={formValues.email}
                                            onChange={onValueChange}
                                            name="email"
                                        />
                                        {/* email errors */}
                                        {Object.keys(errors.emailErrors).map((key, index) => {
                                            return (
                                                <div key={index} style={{ color: 'red' }}>
                                                    {errors.emailErrors[key]}
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className='userUpdateItem'>
                                        <label>Department</label>
                                        <select name="departments"
                                            className="userUpdateSelect"
                                            id="department"
                                            value={formValues.department}
                                            onChange={onValueChange}
                                            name="department"
                                        >
                                            <option selected value="sales">Sales</option>
                                            <option value="hr">HR</option>
                                            <option value="it">IT</option>
                                        </select>
                                    </div>
                                    <div className='userUpdateItem'>
                                        <label>Role</label>
                                        <input type="text"
                                            placeholder={formValues.role}
                                            className='userUpdateInput'
                                            value={formValues.role}
                                            onChange={onValueChange}
                                            name="role"
                                        />
                                        {/* role errors */}
                                        {Object.keys(errors.roleErrors).map((key, index) => {
                                            return (
                                                <div key={index} style={{ color: 'red' }}>
                                                    {errors.roleErrors[key]}
                                                </div>
                                            )
                                        })}
                                    </div>

                                </div>
                                <div className='userUpdateRight'>
                                    <div className='userUpdateUpload'>
                                        <img src='/images/profile3.jpg' className='userUpdateImg' alt="profile" />
                                        <label htmlFor='file'><Publish className='userUpdateIcon' /></label>
                                        <input type="file" id="file" style={{ display: 'none' }} />
                                    </div>
                                    <button className='userUpdateButton' onClick={onSubmit}>Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default ViewAndEditUser
