import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className='green'>
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo">Chat</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Sign Up</a></li>
                        <li><a href="#">Logout</a></li>
                    </ul>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-demo">
                <li><a href="#">Login</a></li>
                <li><a href="#">Sign Up</a></li>
                <li><a href="#">Logout</a></li>
            </ul>
        </>
    )
}

export default Navbar