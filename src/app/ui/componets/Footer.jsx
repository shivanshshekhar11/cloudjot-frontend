import React from "react";

export default  function Footer() {
    const mystyle = {
        display:"flex",
        justifyContent:"space-between",
        width:"100%"
    };

    const listStyle1 = {
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

    const listStyle2 = {
        listStyle:'none',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        margin:'0',
        padding:'0',
        width:'20%',
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
                    <ul style={listStyle1}>
                        <li>
                        <a href="https://github.com/shivanshshekhar11/cloudjot-frontend"><i class="fab fa-github" style={{color:'#000000'}}></i></a>
                        </li>
                        <li>
                        <a href="https://www.linkedin.com/in/shivanshshekhar11/details/projects/"><i class="fab fa-linkedin" style={{color:'#000000'}}></i></a>
                        </li>
                    </ul>
                    <ul style={listStyle2}>

                        <li>
                            <a>About Us</a>
                        </li>
                        <li>
                            <a>Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
