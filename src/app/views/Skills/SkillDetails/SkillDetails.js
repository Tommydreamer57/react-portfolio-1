import React from 'react';
import bio from '../../../../bio/bio';
// import './SkillDetails.css';

function SkillDetails({ skill }) {
    let { main, front, back, other } = bio.Skills
    let allSkills = [...main, ...front, ...back, ...other]

    skill = allSkills.find(item => item.title === skill)

    if (!skill) return null
    return (
        <div className="skill-details">
            SKILL PAGE
            <h1>{skill.name}</h1>
            <h3>{skill.icon}</h3>
            <div className="description">
                <p>Click <a href={skill.github} target="_blank" >here</a> to see this skill on GitHub</p>
                <p>Click the image to view the hosted skill</p>
            </div>
            <div className="image">
                <a href={skill.url} target="_blank" >
                    <img src={skill.img} />
                </a>
            </div>
        </div>
    )
}

export default SkillDetails
