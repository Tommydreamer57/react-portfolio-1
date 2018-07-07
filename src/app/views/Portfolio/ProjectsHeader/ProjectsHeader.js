import React from 'react';

export default function ProjectsHeader({ count, search, delay }) {
    return (
        <h6 id="projects-header" style={{ transitionDelay: delay }} >
            <span>Displaying </span>
            {
                !search.tag.length && !search.skill.length ?
                    <span> all </span>
                    :
                    <span> {count} </span>
            }
            {
                search.tag.length ?
                    <span>
                        {search.tag.map(tag => (
                            <label key={`No Projects Tag ${tag} - No Skills`} > {tag.toLowerCase()} </label>
                        ))}
                    </span>
                    :
                    null
            }
            <span> project{count > 1 ? "s" : ""}</span>
            {
                search.skill.length ?
                    <span>
                        <span> built with </span>
                        {
                            // search.skill.length === 2 ?
                            //     <span>both</span>
                            //     :
                            //     null
                        }
                        <span>
                            {search.skill.map((skill, i, arr) => (
                                <span key={`No Projects Skill ${skill}`} >
                                    <label> {skill}</label>
                                    <span>{i < arr.length - 2 ? ", " : i === arr.length - 2 ? arr.length > 2 ? ", and " : " and " : ""}</span>
                                </span>
                            ))}
                        </span>
                    </span>
                    :
                    null
            }
            {/* period at the end of the sentence */}
            <span>.</span>
        </h6>
    )
}
