import React from 'react';

export default function Wrapper({ position, children }) {
    let leftMargin, rightMargin
    switch (position) {
        case "previous":
            leftMargin = "previous-left-margin"
            rightMargin = "previous-right-margin"
            break;
        case "current":
            leftMargin = "current-left-margin"
            rightMargin = "current-right-margin"
            break;
        case "next":
            leftMargin = "next-left-margin"
            rightMargin = "next-right-margin"
            break;
    }
    return (
        <div className={position} >
            <div className="content">
                <div className={leftMargin} />
                {children}
                <div className={rightMargin} />
            </div>
        </div>
    )
}

export function DetailWrapper({ position, children }) {
    let leftLeftMargin = "details-left-left-margin"
    let leftMargin = "details-left-margin"
    let rightMargin = "details-right-margin"
    switch (position) {
        case "current":
            position += " current-details"
            leftLeftMargin += " current-left-margin"
            leftMargin += " current-left-margin"
            rightMargin += " current-right-margin"
            break;
        case "next":
            position += " next-details"
            leftLeftMargin += " next-left-margin"
            leftMargin += " next-left-margin"
            rightMargin += " next-right-margin"
            break;
    }
    return (
        <div className={position} >
            <div className="content details-content">
                <div className={leftLeftMargin} />
                <div className={leftMargin} />
                {children}
                <div className={rightMargin} />
            </div>
        </div>
    )
}
