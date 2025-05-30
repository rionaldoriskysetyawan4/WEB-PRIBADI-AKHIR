import React from "react";
import '../Style/main.css'; // ✅ relatif satu folder ke atas
const TextProf = () => {
    return (
        <div className="text-prof-container">
            <h2 className="text-prof-line">
                About Me
            </h2>
            <p className="text-prof-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
    );
}
export default TextProf;