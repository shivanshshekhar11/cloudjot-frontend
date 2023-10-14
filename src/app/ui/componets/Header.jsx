import {Link} from "react-router-dom";
import React from "react";

export default  function Header() {
    const mystyle = {
        display:"flex",
        justifyContent:"flex-end"
    };
    return (
        <nav className="navbar navbar-expand-md  bg-warning" style={{
            position: 'fixed',
            top: '0',
            width: '100%'
        }}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" style={{fontFamily: "Pacifico", fontSize:"2.5vw"}}>CloudJot</Link>
                <div style={mystyle}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <Link className="nav-link" to="/save">Save Files</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to ="/download">Download Files</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
