import React from 'react'
import '../css/navbar.css'

const Navbar = () => {
    return (
        <>

            <div className="container">
                <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                        <a href=""><i className="bi bi-tree fs-3 px-2 text-success"></i></a>
                        <span className="fs-3 font6">Save Soil</span>
                    </a>

                    <ul className="nav nav-pills">
                        <li className="nav-item"><a href="/" className="nav-link text-dark" aria-current="page"><i className="bi bi-house px-2"></i>Home</a></li>
                        <li className="nav-item"><a href="/about" className="nav-link text-dark"><i className="bi bi-person px-2"></i>About us</a></li>
                    </ul>
                </header>
            </div>


        </>
    )
}

export default Navbar