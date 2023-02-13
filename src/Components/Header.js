import React from "react";
import {Link} from 'react-router-dom';

function Header(){
    return(
        <React.Fragment>
            <header className="header">
                <Link to={'/Restaurant-App'}>                    
                        <div className="logo"></div>
                </Link>
                <div className="menu">
                    <Link to={'/Restaurant-App/reservacion'}><span id="navegacion">Reservación</span></Link>
                    <Link to={'/Restaurant-App/menu'}><span id="navegacion">Menú</span></Link>
                    <Link to={'/Restaurant-App/contactanos'}><span id="navegacion">Contáctactanos</span></Link>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header;