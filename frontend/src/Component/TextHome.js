import React from "react";
import '../Style/main.css'; // ✅ relatif satu folder ke atas
const TextHome = () => {
    return (
        <div className="text-home">
            <h1 className="text-home-title">RIONALDO</h1>
            <p className="text-home-subtitle">Web Developer</p>
            <p className="text-home-description">
                I am a passionate web developer with expertise in creating dynamic and responsive web applications. 
                Let's build something amazing together!
            </p>
        </div>
    );
}
export default TextHome;