import React from "react";

function Header(){
    return(
        <React.Fragment>
            <header class="header">
                <div class="logo">
                    <img src="#" alt="logo"/>
                </div>
                <div class="menu">
                    <span><a href="#">Reservación</a></span>
                    <span><a href="#">Menú</a></span>
                    <span><a href="#">Contáctactanos</a></span>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header;