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
            let side = undefined

            if (initialTouch.clientX < window.innerWidth / 4) side = 'left'
            if (initialTouch.clientX > window.innerWidth * 3 / 4) side = 'right'

            console.log(Math.abs(slope), initialTouch.navigating, side)

            // IF INITIAL CONDITIONS MET, NAVIGATION IS SET ONCE FOR EACH TOUCH
            if (side && (Math.abs(slope) < 0.75 && initialTouch.navigating !== false)) {
                initialTouch.navigating = true
            }
            else {
                initialTouch.navigating = false
            }

            // AFTER NAVIGATION HAS BEEN SET, WE CAN DO THE NAVIGATION
            if (initialTouch.navigating) {
                // update the 'left' property of the previous or next view through props
                this.props.slide()
            }
        }
        this.setState({
            touches
        })
    }
    onTouchEnd = ({ touches }) => {
        touches = [...touches]
        let initialTouches = this.state.initialTouches.filter(touch => touches.some(otherTouch => otherTouch.id === touch.id))
        this.setState({
            touches,
            initialTouches
        })
    }
    render() {
        let { position, child: Child, childProps } = this.props
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
        console.log(this.state.initialTouches)
        return (
            <div id={this.props.id} className={position} onTouchStart={this.onTouchStart} onTouchMove={this.onTouchMove} onTouchEnd={this.onTouchEnd} >
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
