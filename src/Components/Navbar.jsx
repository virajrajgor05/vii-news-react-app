import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <a className="nav-link active" aria-current="page"> <span className='fs-2 text-light fw-bold ' >Vii</span> <span className='badge bg-danger fs-2 fw-bold'>News</span></a>    
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
           
          </div>
        </div>
      </nav>
      
    )
}

export default Navbar
