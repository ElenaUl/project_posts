import React from "react";
import "./footer.css";
import inst_icon from "../../assets/instagram.png";
import vk_icon from "../../assets/vk.png";
import telegram_icon from "../../assets/telegram.png";
import gmail_icon from "../../assets/gmail.png";

const Footer = () => {
    return (
        <div className="footer">
            <p id="contacts">2024 ООО "Рога и копыта" Тел.+7 986 785 6757</p>

                <img className="instagram" src={inst_icon} alt="" />
                <img className="vk" src={vk_icon} alt="" />
                <img className="telegram" src={telegram_icon} alt="" />
                <img className="gmail" src={gmail_icon} alt="" />
        </div>
    );
}
 
export default Footer;