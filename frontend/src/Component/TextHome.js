import React from "react";
import '../Style/main.css'; // ✅ relatif satu folder ke atas
const TextHome = () => {
    return (
        <div className="text-home-container">
            <h2 className="text-home-line">
                Hi I Am <span className="separator">|</span> <span className="highlight">Rionaldo</span>
            </h2>
            <h2 className="text-home-name">Rizky Setyawan</h2>
            <p className="text-home-description">
                I am a Software Developer <br /> and IoT enthusiast
            </p>
        </div>
    );
}
export default TextHome;