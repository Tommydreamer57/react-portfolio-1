import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// view wrappers
import Wrapper, { DetailWrapper } from './Wrapper';
// primary views
import Home from './Home/Home';
import Skills from './Skills/Skills';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
// secondary view
import SkillDetails from './Skills/SkillDetails/SkillDetails';
import ProjectDetails from './Portfolio/ProjectDetails/ProjectDetails';
// data
import bio from '../../bio/bio';
// fixed components
import logo from '../../assets/logo.svg';
import Menu from '../components/Menu/Menu';
import Buttons from '../components/Buttons/Buttons';
import Copyright from '../components/Copyright/Copyright';
// scrollbar controller
import addEventListeners from '../event-listeners';
import jump from 'jump.js';

let i = 10;

class View extends Component {
    constructor(props) {
        super(props)
        this.scrollbar = {
            addEventListeners,
            removeEventListeners: () => this.scrollbar
        }
        this.state = {
            open: false,
            slidePosition: 0,
            slideDirection: ''
        }
        let currentView = props.match.params.view
        let allowedViews = ['skills', 'portfolio', 'details', 'contact']
        if (currentView && !allowedViews.includes(currentView)) {
            if (i > 0) {
                props.history.push("/")
                i-- // infinite loop protection
            }
        }
        // console.log(window)
    }
    componentDidMount = () => {
        setTimeout(this.componentDidUpdate, 50)
    }
    componentWillReceiveProps = ({ match: { params: { view } }, location: { pathname } }) => {
        console.log("VIEW RECEIVED PROPS")
        if (pathname === this.props.location.pathname) return;
    }
    componentDidUpdate = () => {
        console.log("VIEW UPDATED")
        this.scrollbar = this.scrollbar.removeEventListeners().addEventListeners()
        let $root = document.getElementById('root')
        if (window.innerWidth > 768) {
            let current = this.props.match.params.view
            switch (current) {
                case 'skills':
                    $root.style.background = '#FA4'
                    break;
                case 'portfolio':
                    $root.style.background = '#A4E'
                    break;
                default:
                    $root.style.background = '#F54'
                    break;
            }
        } else {
            $root.style.background = '#F54'
        }
        window.addEventListener('keydown', ({ key }) => {
            if (key === 'Escape' && this.state.open) {
                this.setState({ open: false })
            }
        })
    }
    toggleMenu = () => {
        this.setState({
            open: !this.state.open
        })
    }
    onKeyDown = ({ key }) => {
        if (this.state.open && key === 'Escape') {
            this.toggleMenu()
        }
    }
    swipe = (direction, distance) => {
        // console.log(direction, distance)
        this.setState({
            slidePosition: distance,
            slideDirection: direction
        })
    }
    render = () => {

        let open = this.state.open
        let history = this.props.history
        let current = this.props.match.params.view
        let details = this.props.match.params.details // project or skill

        let searchString = this.props.location.search.replace(/%20/g, " ")

        let search = {
            skill: [],
            tag: []
        }

        searchString.split(/[\?\&]/g).forEach(item => {
            if (!item) return
            let arr = item.split(/=/)
            let key = arr[0]
            let val = arr[1].replace(/%20/g, " ")
            if (!search[key]) search[key] = [val]
            else search[key] = [...search[key], val]
        })

        let homePosition = !current ? 'current' : 'previous'
        let skillsPosition = !current ? 'next' : current === 'skills' ? 'current' : 'previous'
        let portfolioPosition = current === 'contact' ? 'previous' : current === 'portfolio' ? 'current' : current === 'details' ? 'previous' : 'next'
        let contactPosition = current === 'contact' ? 'current' : 'next'

        let homeId = current === 'skills' ? 'previous-view' : ''
        let skillsId = !current ? 'next-view' : current === 'portfolio' ? 'previous-view' : ''
        let portfolioId = current === 'skills' ? 'next-view' : current === 'contact' || current === 'details' ? 'previous-view' : ''
        let contactId = current === 'portfolio' ? 'next-view' : ''

        let outerProps = {
            open,
            current,
            slidePosition: this.state.slidePosition,
            slideDirection: this.state.slideDirection,
            swipe: this.swipe,
            history
        }

        return (
            <div id="View" onKeyDown={this.onKeyDown} >
                {/* PRIMARY VIEWS */}
                {/* HOME */}
                <Wrapper
                    {...outerProps}
                    path="/"
                    id={homeId}
                    position={homePosition}
                    child={Home}
                    childProps={{ current }}
                />
                {/* SKILLS */}
                <Wrapper
                    {...outerProps}
                    path="/skills"
                    id={skillsId}
                    position={skillsPosition}
                    child={Skills}
                />
                {/* PORTFOLIO */}
                <Wrapper
                    {...outerProps}
                    path="/portfolio"
                    id={portfolioId}
                    position={portfolioPosition}
                    child={Portfolio}
                    childProps={{ current, search, searchString }}
                />
                {/* CONTACT */}
                <Wrapper
                    {...outerProps}
                    path="/contact"
                    id={contactId}
                    position={contactPosition}
                    child={Contact}
                    childProps={{ current }}
                />
                {/* SECONDARY VIEWS */}
                {/* PROJECT DETAILS */}
                {
                    bio.Projects.map(item => {
                        let detailPosition = details === item.title ? 'current' : 'next'
                        return (
                            <DetailWrapper
                                {...outerProps}
                                position={detailPosition}
                                key={`Project Details ${item.title}`}
                                child={ProjectDetails}
                                childProps={{ project: item.title }}
                            />
                        )
                    })
                }
                {/* LOGO */}
                {/* <Link to="/#Home" id="logo-wrapper">
                    <div id="logo-circle">
                        <img id="logo" src={logo} />
                    </div>
                </Link> */}
                {/* BUTTONS */}
                <Buttons
                    open={open}
                    history={history}
                    current={current}
                    details={details}
                    toggleMenu={this.toggleMenu}
                />
                {/* MENU  */}
                <Menu
                    open={open}
                    current={current}
                    toggleMenu={this.toggleMenu}
                />
                {/* COPYRIGHT */}
                <Copyright />
            </div >
        )
    }
}

function scrollable(Comp) {
    // if (window.innerWidth > 769) {
    //     console.log("NOT MOBILE")
    //     return Comp
    // } else
    return class extends Comp {
        componentWillReceiveProps = (newProps) => {
            console.log("RECEIVING PROPS")
            console.log(newProps)
            if (newProps.location !== this.props.location && newProps.location.hash && window.innerWidth < 769) {
                let el = document.querySelector(newProps.location.hash)
                if (el) {
                    jump(el, {
                        duration: 400,
                        offset: -window.innerWidth / 10
                    })
                }
                console.log(el)
            }
            if (super.componentWillReceiveProps) {
                super.componentWillReceiveProps()
            }
        }
    }
}

export default scrollable(View)
