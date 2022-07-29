import React, { useState } from 'react'
import * as _ from 'lodash'
import validator from 'validator'
import * as Actions from '../store/actions/UserActions'
import './addUser.css'
import { useSelector, useDispatch } from 'react-redux'
import withReducer from '../../../store/WithReducer'
import reducer from '../store/reducer'


let initialFormValue = {
    firstName: '',
    lastName: '',
    password: '',
    hashedPassword: '',
    email: '',
    department: 'sales',
    role: ''
}

let initError = {
    firstNameErrors: {},
    lastNameErrors: {},
    passwordErrors: {},
    emailErrors: {},
    roleErrors: {}

}
const AddUser = () => {
    const reducerData = useSelector(({ dept }) => dept.manageUsers)
    const deptList = reducerData.deptList;
    console.log("deptList in form : ",deptList);
    const [formValues, setFormValues] = useState({ ...initialFormValue })
    const [errors, setErrors] = useState({ ...initError })


    const dispatch = useDispatch()

    const onValueChange = (v) => {
        let value = v.target.value
        let name = v.target.name
        setFormValues({ ...formValues, [name]: value })

    }

    const onSubmit = (e) => {
        e.preventDefault()
        const isValid = validation()
        if (isValid) {
            console.log('formValues before submit', formValues)
            dispatch(Actions.saveUser(formValues))
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

        //validating password and hash
        const passwordLength = formValues.password.trim()
        if (passwordLength < 1 || passwordLength > 8) {
            let passwordlengthError = Object.assign({}, { passwordLenError: 'password is missing or too long' })
            localErrors.passwordErrors = passwordlengthError
            isValid = false
        }
        else {
            localErrors.passwordErrors.passwordLenError = null
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
        <div className='newUser' >
            <h1 className='newUserTitle'>New User</h1>
            <form className='newUserForm'>

                <div className='newUserItem'>
                    <label>First Name</label>
                    <input type="text"
                        placeholder='Enter the First Name'
                        name="firstName"
                        value={formValues.firstName}
                        onChange={onValueChange}
                    />
                    {/* first Name erors */}
                    {Object.keys(errors.firstNameErrors).map((key, index) => {
                        return (
                            <div key={index} style={{ color: 'red' }}>
                                {errors.firstNameErrors[key]}
                            </div>
                        )
                    })}
                </div>

                <div className='newUserItem'>
                    <label>Last Name</label>
                    <input type="text"
                        placeholder='Enter the Last Name'
                        name="lastName"
                        value={formValues.lastName}
                        onChange={onValueChange}
                    />
                    {/* last Name erors */}
                    {Object.keys(errors.lastNameErrors).map((key, index) => {
                        return (
                            <div key={index} style={{ color: 'red' }}>
                                {errors.lastNameErrors[key]}
                            </div>
                        )
                    })}
                </div>

                <div className='newUserItem'>
                    <label>Email</label>
                    <input type="email"
                        placeholder='Enter the email'
                        name="email"
                        value={formValues.email}
                        onChange={onValueChange}
                    />
                    {/* email erors */}
                    {Object.keys(errors.emailErrors).map((key, index) => {
                        return (
                            <div key={index} style={{ color: 'red' }}>
                                {errors.emailErrors[key]}
                            </div>
                        )
                    })}
                </div>

                <div className='newUserItem'>
                    <label>Password</label>
                    <input type="password"
                        placeholder='Enter the password'
                        name="password"
                        value={formValues.password}
                        onChange={onValueChange}
                    />
                    {/* password erors */}
                    {Object.keys(errors.passwordErrors).map((key, index) => {
                        return (
                            <div key={index} style={{ color: 'red' }}>
                                {errors.passwordErrors[key]}
                            </div>
                        )
                    })}
                </div>

                <div className='newUserItem'>
                    <label>Department</label>
                    <select
                        name="department"
                        className='newUserSelect'
                        // value={formValues.department}
                        onChange={onValueChange}
                    > 
                    {                     
                        deptList.map((department)=>{    
                            return(
                                <option value={department.name.toLowerCase()}>{department.name}</option> 
                            )                    
                        })
                    }                    
                    </select>
                </div>

                <div className='newUserItem'>
                    <label>Role</label>
                    <input type="text"
                        placeholder='developer'
                        name="role"
                        value={formValues.role}
                        onChange={onValueChange}
                    />
                    {/* role erors */}
                    {Object.keys(errors.roleErrors).map((key, index) => {
                        return (
                            <div key={index} style={{ color: 'red' }}>
                                {errors.roleErrors[key]}
                            </div>
                        )
                    })}
                </div>

                <div className='newUserItem'>

                </div>

                <div className='newUserItem'>
                    <button
                        className='newUserButton'
                        onClick={onSubmit}>
                        Add User
                    </button>
                </div>
            </form>
        </div>
    )
}

export default withReducer('dept', reducer)(AddUser)