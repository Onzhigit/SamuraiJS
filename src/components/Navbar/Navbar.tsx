import React from 'react'
import {NavLink} from "react-router-dom"


const Navbar: React.FC = () => {
    return (
      <nav className="nav flex-column  navbar-dark bg-dark ">
                <NavLink to="/profile" className="nav-link active" aria-current="page">Profile</NavLink>
                <NavLink to="/dialogs" className="nav-link active" aria-current="page">Messages</NavLink>
                <NavLink to="/users" className="nav-link active" aria-current="page">Users</NavLink>
                <NavLink to="/news" className="nav-link active" aria-current="page">News</NavLink>
                <NavLink to="/music" className="nav-link active" aria-current="page">Music</NavLink>
                <NavLink to="/settings" className="nav-link active" aria-current="page">Settings</NavLink>
        </nav>
    )
}

export default Navbar
