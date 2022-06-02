import React from 'react'
import Login from './Login'
import './login.css'

const LoginPage = () => {
    return (
        <>
            <section className='slider'>
                <img src={'/images/LoginPicture2.jpg'} alt="slide" />
            </section>
            <section className='slide-form'>
                <Login />
            </section>
        </>
    )
}

export default LoginPage
