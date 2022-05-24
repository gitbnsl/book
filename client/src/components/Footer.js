import React from 'react'
import logo from '../images/logo.png'
import "../css/footer.css"

const Footer = () => {
    return (


        <>

            <div className="container">
                <div className="row">
                    <div className="col">

                    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                        <div className="img col d-flex align-items-center">
                            <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                                <img src={logo} width={40} alt="" />
                            </a>
                            <span className="tx1 mb-3 mb-md-0 text-muted">© 2022 Company, Save Soil</span>
                        </div>

                        <ul className="tx2 nav col-md-4 justify-content-end list-unstyled d-flex">
                            {/* <ii className="ms-3"><a className="text-muted" href="#"><i className="bi bi-twitter"></i></a></ii> */}
                            <li className="ms-3"><a className="text-muted" href="#"><i className="bi bi-instagram"></i></a></li>
                            <li className="ms-3"><a className="text-muted" href="#"><i className="bi bi-facebook"></i></a></li>
                        </ul>
                    </footer>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer