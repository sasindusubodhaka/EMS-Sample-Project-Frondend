import React from 'react'
import EmployeeForm from './EmployeeForm'
import PageHeader from '../../components/PageHeader'
import { PeopleOutlineTwoTone } from '@material-ui/icons'

function Employees() {
    return (
        <>
            <PageHeader 
                title = "New Employee"
                subTitle = "Form design with validation"
                icon = {<PeopleOutlineTwoTone fontSize='large'/>}
            />
            <EmployeeForm />
        </>
    )
}

export default Employees