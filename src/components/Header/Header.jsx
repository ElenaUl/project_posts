import React from "react";
import "./header.css"
import logo from "../../assets/logo.jpg"

const Header = () => {
    return ( 
        <div className="header">
            <img src={logo} alt="" className="logo" />

            <ul>
                <li><a href="/">Главная</a></li>
                <li><a href="#aboutus">О нас</a></li>
                <li><a href="#contacts">Контакты</a></li>
            </ul>

        </div>
     );
}
 
export default Header;