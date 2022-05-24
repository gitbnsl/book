import React from 'react'
import '../css/info.css'
import save from "../images/save.mp4"
import sol from "../images/sol.svg"

const Info = () => {
    return (
        <>

            <div className="container-fluid">
                <div className="row">
                    <div className='bg fs-3 pt-5'>
                        <div className="row">
                            <div className="col-md-6 left">
                                <div className="d-flex">
                                    <h1 className='font1'>THE SOULTION</h1>
                                    <img className='img-fluid set' src={sol} alt="" width={170} />
                                </div>

                                <hr />
                                <h3>BRING BACK ATLEAST 3-5% ORGANIC CONTENT IN THE SOIL</h3>
                            </div>

                        </div>
                        <div className="col-md-6"></div>
                        <div className="col-md-12 text-center" id='live'>
                            <h1 className='font2'>LIVING SOIL</h1>
                            <h3>Thriving, living soil vital of life</h3>
                        </div>
                    </div>
                </div>
            </div>
           
            
        </>
    )
}

export default Info