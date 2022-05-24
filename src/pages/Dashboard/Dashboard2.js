import React from 'react'
import {useNavigate} from "react-router-dom";





const Dashboard2=()=> {
  const navigate = useNavigate();

  const submit=()=>{
    navigate('/login')
  }

  return (
    <>
      <h1>Hello</h1>
      <button onClick={submit}>Click me</button>
    </>
  )
}

export default Dashboard2