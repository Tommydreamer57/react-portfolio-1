import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// TOUCH
function Touch({ clientX, clientY, radiusX, radiusY, force }) {
    let style = {
        top: clientY - radiusY / 2 * 3,
        left: clientX - radiusX / 2 * 3,
        width: radiusX * 3,
        height: radiusY * 3,
    }
    return (
        [
            <div className="touch" style={style} />,
            // <div className="touch-description" style={{
            //     position: 'fixed',
            //     top: 0,
            //     left: 0
            // }}>X: {~~clientX}, Y: {~~clientY}, RADIUS: {~~radiusX} x {~~radiusY}, FORCE: {~~force}</div>,
            // <div className="touch-description" style={{
            //     position: 'fixed',
            //     top: '1.5rem',
            //     left: 0,
            //     maxWidth: '100vw',
            // }}>STYLE: {JSON.stringify(style)}</div>
        ]
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
    // onTouchStart = ({ touches }) => {
    //     touches = [...touches]
    //     // console.log(touches)
    //     let initialTouches = touches
    //     this.setState({
    //         touches,
    //         initialTouches,
    //     })
    // }
    // onTouchMove = ({ touches }) => {
    //     touches = [...touches]
    //     if (touches.length === 1 && this.state.initialTouches.length === 1) {
    //         // ACCESS INITIAL COORDINATES OF THE TOUCH
    //         let initialTouch = this.state.initialTouches[0]
    //         let currentTouch = touches[0]

    //         // CALCULATE CHANGE IN Y / CHANGE IN X = SLOPE
    //         let changeX = currentTouch.clientX - initialTouch.clientX
    //         let changeY = initialTouch.clientY - currentTouch.clientY

    //         let slope = changeY / changeX

    //         // CHECK IF INITIAL TOUCH WAS ON THE SIDE OF THE SCREEN
    //         let direction = undefined

    //         if (initialTouch.clientX < window.innerWidth / 3) direction = 'right'
    //         if (initialTouch.clientX > window.innerWidth * 2 / 3) direction = 'left'

    //         // console.log(Math.abs(slope), initialTouch.navigating, direction)

    //         // IF INITIAL CONDITIONS MET
    //         if (direction && (Math.abs(slope) < 0.66 && initialTouch.navigating !== false)) {
    //             // NAVIGATION IS SET ONCE FOR EACH TOUCH
    //             initialTouch.navigating = true
    //             // DIRECTION IS SET ONCE FOR EACH TOUCH
    //             if (!initialTouch.direction) {
    //                 // console.log('setting direction to ' + direction)
    //                 initialTouch.direction = direction
    //             }
    //         }
    //         else {
    //             initialTouch.navigating = false
    //         }

    //         // AFTER NAVIGATION HAS BEEN SET, WE CAN DO THE NAVIGATION
    //         if (initialTouch.navigating) {
    //             // update the 'left' property of the previous or next view through props
    //             let distance = Math.abs(initialTouch.clientX - currentTouch.clientX)
    //             this.props.swipe(initialTouch.direction, distance)
    //         }
    //     }
    //     this.setState({
    //         touches
    //     })
    // }
    // onTouchEnd = ({ touches }) => {
    //     touches = [...touches]
    //     let initialTouches = this.state.initialTouches.filter(touch => touches.some(otherTouch => otherTouch.id === touch.id))
    //     if (this.state.touches.length === 1) {

    //         let initialTouch = this.state.initialTouches[0]
    //         let currentTouch = this.state.touches[0]

    //         if (initialTouch.navigating) {
    //             let { history, path } = this.props
    //             let views = ['/', '/skills', '/projects', '/contact']
    //             let previousView = views[views.indexOf(path) - 1] || '/'
    //             let nextView = views[views.indexOf(path) + 1] || '/contact'
    //             // console.log('previous: "' + previousView, '", next: "' + nextView + '"')
    //             if (initialTouch.direction === 'left' && currentTouch.clientX < window.innerWidth / 2) {
    //                 // console.log('pushing to ', nextView)
    //                 history.push(nextView)
    //             }
    //             else if (initialTouch.direction === 'right' && currentTouch.clientX > window.innerWidth / 2) {
    //                 // console.log('pushing to ', previousView)
    //                 history.push(previousView)
    //             }
    //         }

    //         this.props.swipe(null, 0)
    //     }
    //     this.setState({
    //         touches,
    //         initialTouches
    //     })
    // }
    render() {
        let {
            open,
            current,
            id,
            position,
            // slidePosition,
            // slideDirection,
            child: Child,
            childProps,
            history
        } = this.props

        // let translateX = 0

        // if (id === 'next-view' && slideDirection === 'left') {
        //     translateX = -slidePosition
        // }
        // else if (id === 'previous-view' && slideDirection === 'right') {
        //     translateX = slidePosition
        // }
        // else if (id === 'next-view') {

        // }
        // else if (id === 'previous-view') {

        // }

        // else if (position === 'current' && slideDirection === 'right') {
        //     translateX = slidePosition
        // }
        // else if (position === 'current' && slideDirection === 'left') {
        //     translateX = -slidePosition
        // }

        let style = {}
        if (window.innerWidth < 769) {
            if (current === 'details') {
                style.transform = 'translateX(-175vw)'
            }
        }
        else {
            if (position !== 'current') {
                style.transition = 'transform .8s, margin-top .3s 1s'
            }
            else {
                style.transition = 'transform .8s, margin-top .3s'
            }
            if (open) {
                let scrollTop = document.getElementsByClassName('current')[0].scrollTop || 0
                style.marginTop = `calc(110vh + ${scrollTop}px)`
            }
        }


        if (position.includes('current') && current === 'details') {
            let el = document.getElementsByClassName('current')[0] || {}
            let scrollTop = el.scrollTop || 0
            style.marginTop = `calc(110vh + ${scrollTop}px)`
        }

        let outerProps = {
            id,
            className: position,
            style,
            onTouchStart: this.onTouchStart,
            onTouchMove: this.onTouchMove,
            onTouchEnd: this.onTouchEnd,
        }

        // console.log({ id, position, ...style })

        return (
            <div {...outerProps} >
                <div className="content">
                    {/* {this.state.touches.map(Touch)} */}
                    <div className="before" />
                    <Child {...childProps} history={history} />
                    <div className="bottom-padding" />
                    <div className="after" />
                    <div className="scrollbar-cover" />
                    {/* {
                        <div className="" style={{ position: 'fixed', top: 0, left: 0, display: position === 'current' ? 'static' : 'none' }} >slidePosition: {slidePosition}</div>
                    } */}
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
        let {
            open,
            position,
            child: Child,
            childProps
        } = this.props
        switch (position) {
            case "current":
                position += " current-details"
                break;
            case "next":
                position += " next-details"
                break;
        }


        let style = {}
        if (window.innerWidth < 769) {
            let views = [
                ...document.getElementsByClassName('previous'),
                ...document.getElementsByClassName('next'),
            ]
            if (position.includes('current')) {
                style.left = '0px'
                views.forEach(el => {
                    el.style.transform = 'translateX(-125vh)'
                })
            } else {
                views.forEach(el => {
                    el.style.transform = 'translateX(0)'
                })
            }
            style.transition = '0.3s'
        }
        else {
            if (!position.includes('current')) {
                style.transition = 'transform .8s, margin-top .3s 1s'
            }
            else {
                style.transition = 'transform .8s, margin-top .3s'
            }
            if (open) {
                let scrollTop = document.getElementsByClassName('current')[0].scrollTop || 0
                style.marginTop = `calc(110vh + ${scrollTop}px)`
            }
        }

        let outerProps = {
            className: position,
            style,
            // onTouchStart: this.onTouchStart,
            // onTouchMove: this.onTouchMove,
            // onTouchEnd: this.onTouchEnd
        }


        return (
            <div {...outerProps} >
                <div className="content details-content">
                    <Link to='/projects' >
                        <h4>
                            Back To Projects
                        </h4>
                    </Link>
                    <Child {...childProps} />
                    <Link to='/projects' >
                        <h4>
                            Back To Projects
                        </h4>
                    </Link>
                    <div className="bottom-padding" />
                    <div className="scrollbar-cover" />
                </div>
            </div>
        )
    }
}
