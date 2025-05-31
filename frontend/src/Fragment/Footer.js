import React from "react";
import '../Style/main.css'; // ✅ relatif satu folder ke atas
import Terms from "./Terms";

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer-container">
            <div className="footer-Contact">
                <h1 className="footer-Contact-Us">Contact Us</h1>
                <div className="footer-Contact-Us-Desc">
                    <h4>rionaldoriskysetyawan4@gmail.com</h4>
                    <p>Jl. Raya Aura Sri No. 123, Jakarta</p>
                    <p>See on Map</p>
                </div>
            </div>

            <div className="footer-Service">
                <h1 className="footer-Contact-Us">Service</h1>
                <div className="footer-Contact-Us-Desc">
                    <p>3D Design</p>
                    <p>Software Developer</p>
                    <p>IoT Developer</p>
                </div>
            </div>

            <div className="footer-Search">
                <div className="footer-Container-Search">
                    <span className="footer-Search-Text">Newslater</span>
                    <div className="footer-Search-Input">
                        <input
                            type="text"
                            placeholder="Search"
                            className="footer-Search-Input-Field"
                        />
                    </div>
                    <div className="footer-Search-Icon">
                        <img
                            src="/search.png"
                            alt="Search Icon"
                            className="footer-Search-Icon"
                        />
                    </div>
                </div>
                <div className="footer-Search-Img">
                    <img
                        src="/Insta.png"
                        alt="Search Icon"
                        className="footer-Search-Icon-Image"
                    />
                    <img
                        src="/linkedin.png"
                        alt="Search Icon"
                        className="footer-Search-Icon-Image"
                    />
                    <img
                        src="/twitter.png"
                        alt="Search Icon"
                        className="footer-Search-Icon-Image"
                    />
                    <img
                        src="/phone.png"
                        alt="Search Icon"
                        className="footer-Search-Icon-Image"
                    />
                    <img
                        src="/gmail.png"
                        alt="Search Icon"
                        className="footer-Search-Icon-Image"
                    />
                </div>
            </div>
        </div>
        <Terms />
        </div>
        
    )
}

export default Footer;