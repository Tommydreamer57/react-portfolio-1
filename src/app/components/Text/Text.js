import React from 'react';

export default function Text({ text }) {
    if (text.slice(0, 2) === "# ") return (
        <h4>{text.slice(2)}</h4>
    );
    else if (typeof text === 'string') return (
        <p>{text}</p>
    );
    else if (Array.isArray(text)) return (
        <p key={JSON.stringify(text)} >
            {
                text.map(item => {
                    if (typeof item === 'string') return item;
                    else if (typeof item === 'object') return (
                        <a key={item.link} href={item.link} target="_blank" > {item.name} </a>
                    );
                })
            }
        </p>
    );
}
