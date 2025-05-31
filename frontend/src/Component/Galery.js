import React from "react";

const GaleriBox = ({ Galery }) => {
    return (
        <div className="container-Galery-box">
            <div className="Galery-box">
                <div className="Galery-icon">
                    <img className="Img-icon" src={Galery.icon} alt={`${Galery.name} icon`} />
                </div>
                <p className="Galery-description">{Galery.description}</p>
            </div>
        </div>
    );
}

export default GaleriBox;