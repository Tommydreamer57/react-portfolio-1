import React from 'react';

export default function NoProjectsHeader({ search }) {
    return (
        <h4 id="no-projects">
            {
                search.tag.length && !search.skill.length ?
                    <span>
                        <span>There are no</span>
                        {search.tag.map(tag => (
                            <label key={`No Projects Tag ${tag} - No Skills`} > {tag.toLowerCase()} </label>
                        ))}
                        <span>projects</span>
                    </span>
                    :
                    <span>
                        <span>No</span>
                        {search.tag.map(tag => (
                            <label key={`No Projects Tag ${tag}`} > {tag.toLowerCase()} </label>
                        ))}
                        <span>project uses</span>
                        <span>{search.skill.length === 2 ? " both " : " "}</span>
                        {search.skill.map((skill, i, arr) => (
                            <span key={`No Projects Skill ${skill}`} >
                                <label>{skill}</label>
                                <span>{i < arr.length - 2 ? ", " : i === arr.length - 2 ? " and " : ""}</span>
                            </span>
                        ))}
                    </span>
            }
            {/* period at the end of the sentence */}
            <span>.</span>
        </h4>
    )
}
