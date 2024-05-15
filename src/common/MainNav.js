import React from 'react'
import { Link } from 'react-router-dom'

import './MainNav.css'

export default function MainNav() {











    
    return (
        <nav className=" sticky-top navbar navbar-expand-lg navbar-dark  ">
            <div className="container-fluid">
               
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 p-5">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/" >INICIO</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"   href="#AboutSection">NOSOTROS</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/paquetes" >PAQUETES</Link>

                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/reservas">RESERVA</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link"  to="/buscar" >BUSCAR</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/carrito" >CARRITO</Link>

                        </li>
                       
                       
                    </ul>
                  
                </div>
            </div>
        </nav>
    )
}
