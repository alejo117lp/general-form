import React from "react";
import '../../stylesheets/Header.css';
import fundaLogo from "../../img/funda-logo-2.png";

function Header(){
    return(
        <div className="header-container">
            <img className="header-image"
                src={fundaLogo}
                alt="Logo Header"
            />
        </div>
    );
}

export default Header;