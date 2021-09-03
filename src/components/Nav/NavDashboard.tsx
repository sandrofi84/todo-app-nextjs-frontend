import React from 'react'
import NavDashboardLoggedIn from './NavDashboardLoggedIn'
import NavDashboardLoggedOut from './NavDashboardLoggedOut'

const NavDashboard = ({isLoggedIn}) => {

    return (
        <>
        {
            isLoggedIn ? 
            <NavDashboardLoggedIn/> 
            : <NavDashboardLoggedOut />
        } 
        </>
    )
}

export default NavDashboard
