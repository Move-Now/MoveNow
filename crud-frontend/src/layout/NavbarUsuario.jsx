import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


export default function NavbarUsuario() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <div className="container-fluid">
                    <a className="navbar-brand" href="/">MoveNow</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to={"/homeusuario"}>Usuario</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/homemotorista"}>Motorista</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/homeajudante"}>Ajudante</Link>
                            </li>
                        </ul>
                    </div>
                    <Link className="btn btn-outline-light" to={"/addusuario"}>+ Usuario</Link>
                </div>
            </nav>
        </div>
    );
};