import React, { useState } from 'react'
import * as _ from 'lodash'
import validator from 'validator'
import { useDispatch } from 'react-redux'
import * as Actions from '../store/actions/DepartmentActions'
import '../department.css'

let initialFormValue = {
    name: '',
    description: '',
}

let initError = {
    nameErrors: {},
    descriptionErrors: {}
}

const CreateDept = () => {
    const [formValues, setFormValues] = useState({ ...initialFormValue })
    const [errors, setErrors] = useState({ ...initError })

    const dispatch = useDispatch()

    const onValueChange = (v) => {
        let value = v.target.value
        let name = v.target.name
        setFormValues({ ...formValues, [name]: value })

    }


    const validation = () => {
        let localErrors = _.cloneDeep(errors)
        let isValid = true

        //validating department name
        const nameLength = formValues.name.trim();
        if (nameLength < 1 || nameLength > 50) {
            let deptNameMissingOrTooLong = Object.assign({}, { missingOrTooLong: 'department name is missing or too long' }) //make a local object 'name Missing' and add the error
            localErrors.nameErrors = deptNameMissingOrTooLong //push the error to localErrors
            isValid = false

        } else {
            localErrors.nameErrors.missingOrTooLong = null
        }

        //validating description
        const descriptionLength = formValues.description.trim();
        if (descriptionLength < 1 || descriptionLength > 250) {
            let descriptionMissingOrTooLong = Object.assign({}, { missingOrTooLong: 'description is missing or too long' }) //make a local object 'name Missing' and add the error
            localErrors.descriptionErrors = descriptionMissingOrTooLong //push the error to localErrors
            isValid = false

        } else {
            localErrors.descriptionErrors.missingOrTooLong = null
        }

        setErrors({ ...localErrors }) //push all errors to errors object
        return isValid
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const isValid = validation()
        if (isValid) {
            console.log('formValues before submit', formValues)
            dispatch(Actions.saveDepartment(formValues))
        } else {
            console.log('fail')
        }
    }
    return (
        <div className='newDepartment' >
            <h1 className='newDepartmentTitle'>New Department</h1>
            <form className='newDepartmentForm'>
                <div className='newDepartmentItem'>
                    <label>Department Name</label>
                    <input type="text"
                        placeholder='IT'
                        name='name'
                        value={formValues.name}
                        onChange={onValueChange}
                    />
                    {/* Dept Name erors */}
                    {Object.keys(errors.nameErrors).map((key, index) => {
                        return (
                            <div key={index} style={{ color: 'red' }}>
                                {errors.nameErrors[key]}
                            </div>
                        )
                    })}
                </div>
                <div className='newDepartmentItem'>
                    <label>Description</label>
                    <textarea
                        className='text'
                        type="text"
                        placeholder='Enter the description'
                        name='description'
                        value={formValues.description}
                        onChange={onValueChange}
                    />
                    {/* Description  erors */}
                    {Object.keys(errors.descriptionErrors).map((key, index) => {
                        return (
                            <div key={index} style={{ color: 'red' }}>
                                {errors.descriptionErrors[key]}
                            </div>
                        )
                    })}
                </div>
                <div className='newDepartmentItem'>

                </div>
                <div className='newDepartmentItem'>
                    <button
                        className='addDeptButton'
                        onClick={onSubmit}
                    >Add Department</button>
                </div>
            </form>
        </div>
    )
}

export default CreateDept
