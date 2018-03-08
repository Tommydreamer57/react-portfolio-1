import React, { Component } from 'react';

// TOUCH
function Touch(touch) {
    let style = {
        top: touch.clientY - touch.radiusY * 1.5 * (touch.force || 1),
        left: touch.clientX - touch.radiusX * 1.5 * (touch.force || 1),
        width: touch.radiusX * 3 * (touch.force || 1),
        height: touch.radiusY * 3 * (touch.force || 1),
    }
    return (
        <div className="touch" style={style} />
    )
}

// PRIMARY VIEW WRAPPER
export default class Wrapper extends Component {
    constructor() {
        super()
        this.state = {
            touches: [],
            initialTouches: []
        }
    }
    onTouchStart = ({ touches }) => {
        touches = [...touches]
        console.log(touches)
        let initialTouches = touches
        this.setState({
            touches,
            initialTouches,
        })
    }
    onTouchMove = ({ touches }) => {
        touches = [...touches]
        if (touches.length === 1 && this.state.initialTouches.length === 1) {
            // ACCESS INITIAL COORDINATES OF THE TOUCH
            let initialTouch = this.state.initialTouches[0]
            let currentTouch = touches[0]

            // CALCULATE CHANGE IN Y / CHANGE IN X = SLOPE
            let changeX = currentTouch.clientX - initialTouch.clientX
            let changeY = initialTouch.clientY - currentTouch.clientY

            let slope = changeY / changeX

            // CHECK IF INITIAL TOUCH WAS ON THE SIDE OF THE SCREEN
            let direction = undefined

            if (initialTouch.clientX < window.innerWidth / 4) direction = 'right'
            if (initialTouch.clientX > window.innerWidth * 3 / 4) direction = 'left'

            // console.log(Math.abs(slope), initialTouch.navigating, direction)

            // IF INITIAL CONDITIONS MET, NAVIGATION IS SET ONCE FOR EACH TOUCH
            if (direction && (Math.abs(slope) < 0.75 && initialTouch.navigating !== false)) {
                initialTouch.navigating = true
            }
            else {
                initialTouch.navigating = false
            }

            // AFTER NAVIGATION HAS BEEN SET, WE CAN DO THE NAVIGATION
            if (initialTouch.navigating) {
                // update the 'left' property of the previous or next view through props
                let distance = Math.abs(initialTouch.clientX - currentTouch.clientX)
                this.props.swipe(direction, distance)
            }
        }
        this.setState({
            touches
        })
    }
    onTouchEnd = ({ touches }) => {
        touches = [...touches]
        let initialTouches = this.state.initialTouches.filter(touch => touches.some(otherTouch => otherTouch.id === touch.id))
        if (this.state.touches.length === 1) {
            this.props.swipe(this.props.slideDirection, 0)
        }
        this.setState({
            touches,
            initialTouches
        })
    }
    render() {
        let { id, position, slidePosition, slideDirection, child: Child, childProps } = this.props
        let leftMargin, rightMargin
        switch (position) {
            case "previous":
                leftMargin = "previous-left-margin"
                rightMargin = "previous-right-margin"
                break;
            case "current":
            case "current current-beneath":
                leftMargin = "current-left-margin"
                rightMargin = "current-right-margin"
                break;
            case "next":
                leftMargin = "next-left-margin"
                rightMargin = "next-right-margin"
                break;
        }

        let left = undefined
        let right = undefined

        if (id === 'next-view' && slideDirection === 'left') {
            left = slidePosition
        }
        else if (id === 'previous-view' && slideDirection === 'right') {
            right = slidePosition
        }
        else if (id === 'next-view') {
            left = '100vw'
        }
        else if (id === 'previous-view') {
            right = '100vw'
        }

        let style = {
            position: 'fixed',
            top: 0,
            left,
            right
        }
        // console.log(this.state.initialTouches)
        return (
            <div id={id} className={position} style={style} onTouchStart={this.onTouchStart} onTouchMove={this.onTouchMove} onTouchEnd={this.onTouchEnd} >
                <div className="content">
                    <div className={leftMargin} />
                    {this.state.touches.map(Touch)}
                    <Child {...childProps} />
                    <div className={rightMargin} />
                </div>
            </div>
        )
    }
}

// SECONDARY VIEW WRAPPER
export class DetailWrapper extends Wrapper {
    constructor() {
        super()
        this.state = {
            touches: []
        }
    }
    render() {
        let { position, children } = this.props
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
            <div className={position} onTouchStart={this.onTouchStart} onTouchMove={this.onTouchMove} onTouchEnd={this.onTouchEnd} >
                <div className="content details-content">
                    <div className={leftLeftMargin} />
                    <div className={leftMargin} />
                    {this.state.touches.map(Touch)}
                    {children}
                    <div className={rightMargin} />
                </div>
            </div>
        )
    }
}
