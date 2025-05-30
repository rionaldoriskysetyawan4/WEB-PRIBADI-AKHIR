import React from "react";

const SkillBox = ({ skill }) => {
    return (
        <div className="container-skill-box">
            <div className="skill-box">
                <div className="skill-icon">
                    <img src={skill.icon} alt={`${skill.name} icon`} />
                </div>
                <p className="skill-description">{skill.description}</p>
            </div>
        </div>
    );
}

export default SkillBox;