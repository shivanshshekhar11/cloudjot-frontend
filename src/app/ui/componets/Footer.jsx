import React from "react";
import {Link} from "react-router-dom";

export default  function Footer() {
    const mystyle = {
        display:"flex",
        justifyContent:"space-between",
        width:"100%",
        zIndex:'2'
    };

    const listStyle = {
        listStyle:'none',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        margin:'0',
        padding:'0',
        width:'7.5%',
        height:'4vw'
    }
    return (
        <nav className="navbar navbar-expand-md  bg-warning" style={{
            position: 'fixed',
            bottom: '0',
            width: '100%'
        }}>
            <div className="container-fluid">
                <div style={mystyle}>
                    <ul style={listStyle}>
                        <li>
                        <a href="https://github.com/shivanshshekhar11/cloudjot-frontend" target="_blank"><i class="fab fa-github" style={{color:'#000000'}}></i></a>
                        </li>
                    </ul>
                    <ul style={listStyle}>

                        <li>
                            <Link className="nav-link" to="/About">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
