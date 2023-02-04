import React from "react";
import {Link} from 'react-router-dom';

function Header(){
    return(
        <React.Fragment>
            <header className="header">
                <Link to={'#/'}>                    <a>
                        <div className="logo">
                        </div>
                    </a>
                </Link>
                <div className="menu">
                    <Link to={'#/reservacion'}><span><a>Reservación</a></span></Link>
                    <Link to={'#/menu'}><span><a>Menú</a></span></Link>
                    <Link to={'#/contactanos'}><span><a>Contáctactanos</a></span></Link>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header;