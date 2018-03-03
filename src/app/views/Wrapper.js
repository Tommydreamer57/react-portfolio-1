import React from 'react';

export default function Wrapper(props) {
    let { position } = props
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
                {props.children}
                <div className={rightMargin} />
            </div>
        </div>
    )
}

export function DetailWrapper(props) {
    let { position } = props
    let leftLeftMargin = "details-left-left-margin"
    let leftMargin = "details-left-margin"
    let rightMargin = "details-right-margin"
    switch (position) {
        case "current":
            leftLeftMargin += " current-left-margin"
            leftMargin += " current-left-margin"
            rightMargin += " current-right-margin"
            break;
        case "next":
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
                {props.children}
                <div className={rightMargin} />
            </div>
        </div>
    )
}
