import React, { Component } from 'react';
import bio from '../../../bio';
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
            <h3>{skill.name}</h3>
            <div className="slide" />
        </div>
    )
}

function Skill(skill) {
    return (
        <div key={i++} className="skill">
            <h3>{skill.name}</h3>
            <div className="slide" />
        </div>
    )
}

class Skills extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div className="content" id="Skills" >
                <h1>My Skills</h1>
                <div id="skills-main" className="skills-section">
                    {
                        bio.Skills.main.map(IconSkill)
                    }
                </div>
                <h2>Front End</h2>
                <div className="skills-section">
                    {
                        bio.Skills.front.map(Skill)
                    }
                </div>
                <h2>Back End</h2>
                <div className="skills-section">
                    {
                        bio.Skills.back.map(Skill)
                    }
                </div>
                <h2>Other Technologies</h2>
                <div className="skills-section">
                    {
                        bio.Skills.other.map(Skill)
                    }
                </div>
            </div>
        )
    }
}

export default Skills // AnimatedWrap(Skills)
