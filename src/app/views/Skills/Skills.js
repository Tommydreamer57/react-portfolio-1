import React from 'react';
import { Link } from 'react-router-dom';
import bio from '../../../bio/bio';
import './Skills.css';

let i = 100

function IconSkill(skill) {
    return (
        <div key={i++} className="icon-skill">
            {
                skill.icon ?
                    <i className={skill.icon} />
                    :
                    <i>&nbsp;</i>
            }
            <h4>{skill.name}</h4>
            <div className="slide" />
        </div>
    )
}

function Skill(skill) {
    return (
        <Link to={`/projects?skill=${skill.name}`} key={i++} className="skill">
            <h4>{skill.name}</h4>
            <div className="slide" />
        </Link>
    )
}

function Skills() {
    return (
        <div id="Skills" >
            <div id="skills-main" className="skills-section">
                <h1>My Skills</h1>
                <div className="skills-wrapper">
                    {
                        bio.Skills.main.map(IconSkill)
                    }
                </div>
            </div>
            <div className="skills-section">
                <h2>Front End</h2>
                <div className="skills-wrapper">
                    {
                        bio.Skills.front.map(Skill)
                    }
                </div>
            </div>
            <div className="skills-section">
                <h2>Back End</h2>
                <div className="skills-wrapper">
                    {
                        bio.Skills.back.map(Skill)
                    }
                </div>
            </div>
            <div className="skills-section">
                <h2>Other Technologies</h2>
                <div className="skills-wrapper">
                    {
                        bio.Skills.other.map(Skill)
                    }
                </div>
            </div>
        </div>
    )
}

export default Skills
