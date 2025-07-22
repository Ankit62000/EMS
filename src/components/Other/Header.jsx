import React from 'react'

const Header = (props) => {
    const logOutUser = () => {
        localStorage.setItem('loggedInUser','') 
        props.changeUser('')
    }
     const firstName = props?.data?.firstName 
     
    return (
        <div className='flex items-end justify-between '>
            <h1 className='text-2xl'>
                Hello<br /> <span className='text-3xl font-semibold'>{firstName}👋</span>
            </h1>
            <button onClick={logOutUser} className='bg-red-600 text-white text-lg px-5 py-2 rounded-small'>Log Out</button>
        </div>
    )
}

export default Header
