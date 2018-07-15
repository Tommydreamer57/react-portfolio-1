// ASPECT RATIO FOR IMAGES === 1871 x 893
import students from '../assets/Student Info.PNG';
import cell from '../assets/Meiosis.PNG';
import conference from '../assets/North Star Bottom.jpg';
import boggle from '../assets/Boggle Copy.png';
import calendar from '../assets/Calendar Screenshot.PNG';
import colors from '../assets/Color Blender Screenshot.PNG';
import personal from '../assets/Personal Project Copy.png';
import group from '../assets/CodeWars Copy.png';
import trivia from '../assets/Trivia Trends Screenshot.PNG';
import LinkedIn from '../assets/iconmonstr-linkedin-3.svg';
import redux from '../assets/Redux.svg';
import logo from '../assets/logo.svg';



const Home = {
    greeting: "Hi, I'm Tommy Lowry",
    // intro: "I am a full-stack web-developer, linguist, and artist.",
    intro: "I am a full-stack web-developer specializing in React, Node, and PostgreSQL. Feel free to take a look at my projects on my $portfolio page$. Or reach out to me at $minilao94@yahoo.com.$",
    // info: [
    //     "My programming specialties include React, Node, and plain vanilla JavaScript. Having lived across the United States and Germany, I am fluent in both English and German.",
    //     "My love for code is largely a branch off of my love for language. I studied German in high school and college, and have also studied Italian, Spanish, Polish, and Russian. I have found code and language to be similar in both their challenge and their creative ability.",
    // ],
    // more: [
    //     "Since completing a project on information theory in 8th grade, I have always taken interest in information and how it is transmitted and received in all its different forms - audible communication, words, connotations, body-language, ink on paper, or pixels on a screen.",
    //     "This project marked the beginning of my fascination with language and communication.",
    //     "In high school I studied German and developed a greater love for language. I continued studying German through high school, then spent two years in Germany before returning to America to continue my studies.",
    //     "During my third year of college I realized that my talent for human language might be transferrable to computer language. With that realization I knew I had to learn to code.",
    //     "I decided to put off my language studies until I have the opportunity to learn each language in its native land, and devote my current efforts to this new realm of communication.",
    // ]
}

// TAGS
const FULL_CRUD = { name: "Full CRUD" }
const FULL_STACK = { name: "Full-Stack" }
const FRONT_END = { name: "Front-End" }
const BACK_END = { name: "Back-End" }
const RESPONSIVE = { name: "Responsive" }
const MOBILE = { name: "Mobile" }
const INDIVIDUAL = { name: "Individual" }
const GROUP = { name: "Group" }
const DEVMOUNTAIN = { name: "DevMountain" }
const VOLUNTEER = { name: "Volunteer" }

const Tags = [
    FULL_STACK,
    FRONT_END,
    BACK_END,
    FULL_CRUD,
    RESPONSIVE,
    MOBILE,
    INDIVIDUAL,
    GROUP,
    DEVMOUNTAIN,
    VOLUNTEER
]

// SKILLS
const HTML5 = { name: "HTML5", icon: "devicon-html5-plain" }
const CSS3 = { name: "CSS3", icon: "devicon-css3-plain " }
const ES6 = { name: "ES6", icon: "devicon-javascript-plain" }
const REACT = { name: "React", icon: "devicon-react-original" }
const REDUX = { name: "Redux", svg: redux }
const MEIOSIS = { name: "Meiosis", icon: "" }
const SCSS = { name: "Sass", icon: "devicon-sass-original" }
const ANGULARJS = { name: "AngularJS", icon: "devicon-angularjs-plain" }
const IONIC = { name: "Ionic" }
// const JQUERY = { name: "JQuery", icon: "devicon-jquery-plain" }
const NODE = { name: "Node", icon: "devicon-nodejs-plain" }
const EXPRESS = { name: 'Express', icon: "" }
const POSTGRESQL = { name: "PostgreSQL", icon: "devicon-postgresql-plain" }
const MONGODB = { name: "MongoDB", icon: "" }
const AUTH0 = { name: "Auth0", icon: "" }
const BCRYPT = { name: "Bcrypt", icon: "" }
const JSS = { name: "CSS in JS", icon: "" }
const SLATE = { name: "Slate", icon: "" }
const ACE = { name: "Ace", icon: "" }
// const IFRAME = { name: "iframe", icon: "" }
const JEST = { name: "Jest", icon: "" }
const GIT = { name: "Git", icon: "devicon-github-plain" }
const KLIPFOLIO = { name: "Klipfolio" }

const Skills = {
    main: [
        HTML5,
        CSS3,
        ES6
    ],
    front: [
        REACT,
        REDUX,
        MEIOSIS,
        SCSS,
        JSS,
        ANGULARJS,
        // JQUERY,
    ],
    back: [
        NODE,
        EXPRESS,
        AUTH0,
        BCRYPT,
        POSTGRESQL,
        MONGODB,
        // HEROKU,
    ],
    other: [
        GIT,
        JEST,
        SLATE,
        ACE,
        KLIPFOLIO,
        // IFRAME,
    ]
}

const Chase_Davis = { name: "Chase Davis", link: "https://www.linkedin.com/in/cwdvs" }
const Conner_Jensen = { name: "Conner Jensen", link: "https://www.linkedin.com/in/connerjensen" }
const Mikel_North = { name: "Mikel North", link: "https://www.linkedin.com/in/mikelnorth" }
const Josi_Moore = { name: "Josi Moore", link: "https://www.linkedin.com/in/josi-moore" }
const Scott_Abbott = { name: "Scott Abbott" }
const Tayt_Low = { name: "Tayt Low" }
const Tav_Hafner = { name: "Tav Hafner" }
const Courtenay_Eccles = { name: "Courtenay Eccles" }
const Vincent_Palmer = { name: "Vincent Palmer" }
const Doug_Maxfield = { name: "Doug Maxfield" }
const JJ_Berrett = { name: "JJ Berrett", link: "https://jjberrett.com/" }
const North_Star = { name: "North Star International", link: "https://northstarlds.org/" }

const Meiosis_Tutorial = { name: "tutorial", link: "https://github.com/Tommydreamer57/meiosis-demo" }

const StudentInfoAPI = {
    title: "Student Info API",
    subtitle: "API for Tracking Class and Student Progress",
    description: [
        ["# Collaborators",
            ["I collaborated with my co-mentors to build this server for gathering information on students and classes at DevMountain."]],
        ["# DevMountain",
            "This server is the main source for student and class statistics. It connects directly to DevMountain's PostgreSQL database to pull statistics on student progress at each week of the program and compare them against specific benchmark requirements."],
        ["# Data Structure",
            "This API provides multiple endpoints with several query options to select data on an entire campus or specific to an individual class or student. It also provides a method for updating milestones and changing the benchmarks against which the students are compared."],
        ["# Klipfolio",
            "Statistics on each current class are gathered and displayed in a klip on Klipfolio to be viewed by management. Multiple klips allow management to compare classes and campuses to each other as well as see the status of each individual student in a class."]
    ],
    img: students,
    tech: [
        KLIPFOLIO,
        NODE,
        EXPRESS,
        POSTGRESQL,
    ],
    tags: [
        BACK_END,
        GROUP,
        DEVMOUNTAIN
    ]
}

const MeiosisProject = {
    title: "Cell",
    subtitle: "Clone of Slack.com",
    description: [
        ["# Collaborators",
            "I built this project just for the sake of learning and fun, with the help of some of my former students."],
        ["# Meiosis",
            ["This is my first project using the Meiosis pattern. Meiosis is a pattern for managing state in an application, following the model-view concept. I wrote a ", Meiosis_Tutorial, " on this pattern. I found Meiosis to be much lighter than Redux as well as easier to implement."]],
        ["# CSS in JS",
            "I decided to try out CSS in JS with the library Aphrodite-JSS in this project. This project therefore has 0 CSS files and is almost 100% JavaScript (just one HTML file on the front end, and several SQL queries in the back)."],
        ["# Bcrypt",
            "For authentication I decided to try out the bcrypt library for salting and hashing passwords. Implementation was quick and easy, and it allowed me to maintain direct control of sessions in the server."]
    ],
    img: cell,
    github: "https://github.com/Tommydreamer57/cell",
    url: "http://meiosis.thomaslowry.me",
    tech: [
        REACT,
        MEIOSIS,
        JSS,
        NODE,
        EXPRESS,
        BCRYPT,
        POSTGRESQL,

    ],
    tags: [
        FULL_CRUD,
        FULL_STACK,
        FRONT_END,
        GROUP
    ]
}

const NorthStarApp = {
    title: "Conference App",
    subtitle: "Mobile Conference App for North Star International",
    description: [
        ["# Volunteer",
            ["I helped my friend", JJ_Berrett, "to improve this app for a non-profit organisation,", North_Star, ". I refreshed the styles in each view and reformatted some of the data to display more easily."]],
        ["# Conference",
            "This application provided upward of 600 attendees at the 2018 North Star Conference with a quick way to find information on breakout sessions, receive reminders of events going on at the conference, and provide feedback regarding each attended session."]
    ],
    img: conference,
    github: "https://github.com/JJ-Berrett/North-Star-Conference-Mobile",
    url: "https://itunes.apple.com/us/app/north-star-conference/id1191362319?mt=8",
    tech: [
        ANGULARJS,
        IONIC,
    ],
    tags: [
        MOBILE,
        GROUP,
        VOLUNTEER
    ]
}

const BoggleApp = {
    title: "Boggle",
    subtitle: "Boggle Word Search",
    description: [
        ["# Features",
            "This project features an algorithm for mapping out all possible paths that can create a given word on a boggle board, and a muli-layered cache system for minimizing http requests."],
        ["# Mapping Algorithm",
            "The mapping algorithm finds all possible starting points for a given word, then loops through the starting points to recursively create all possible paths from each starting point that can create the given word."],
        ["# Oxford Dictionary API",
            "This project uses the Oxford Dictionary API to validate words. I implemented the cache system to remember the results of each request to the API and minimize the number of requests made on all levels."],
        ["# Cache System",
            "The cache system begins in the browser, which makes an initial request to get a list of all previously validated words with which to compare inputted words before making consecutive requests to the server.",
            "If a word is inputted that has not previously been validated, the browser will send a request to the server to validate the word. The server keeps a cache of all previously validated words and of all current outgoing requests to both the database and Oxford.",
            "Then the server will first check its own cache for the word. If it doesn't find the word, it will check its cache for an outgoing request for the word and subscribe to that request. Finally, the server will check my own database for the word before requesting it from Oxford.",
            "Only words that make it through all levels of the cache will be sent to Oxford, so that each word will only ever be requested from Oxford exactly one time."]
    ],
    img: boggle,
    github: "https://github.com/Tommydreamer57/boggle",
    url: "http://boggle.thomaslowry.me",
    tech: [
        REACT,
        JEST,
        NODE,
        EXPRESS,
        MONGODB
    ],
    tags: [
        FULL_STACK,
        INDIVIDUAL
    ]
}

const CalendarProject = {
    title: "Calendar",
    subtitle: "Timeshare Week Selector",
    description: [
        ["# Collaborators",
            ["I worked together with", Mikel_North, "and", Josi_Moore, "to create this calendar app for a company in Arizona that sells timeshares to a property."]],
        ["# Features",
            "Constituents can use the calendar to select the weeks they would like to buy, and admins can use the calendar to see which weeks are allocated to which customers as well as to select maintenance weeks for the property."]
    ],
    img: calendar,
    github: "https://github.com/Calendar-App/calendar",
    url: "http://calendar.thomaslowry.me",
    tech: [
        REACT,
        SCSS
    ],
    tags: [
        FRONT_END,
        GROUP,
        DEVMOUNTAIN
    ]
}

const ColorBlender = {
    title: "Color Blender",
    subtitle: "Calculator for Overlapping Colors",
    description: [
        "This is an Angular app that calculates the results of overlapping transparent colors."
    ],
    img: colors,
    github: "https://github.com/Tommydreamer57/color-blender",
    url: "http://colorblender.stream",
    tech: [
        ANGULARJS
    ],
    tags: [
        FRONT_END,
        INDIVIDUAL
    ]
}

const PersonalProject = {
    title: "Blog Template",
    subtitle: "DevMountain Personal Project",
    description: [
        ["# My First Full-stack, Full-CRUD Project",
            "This is my personal project I built as a part of DevMountain's web development program. It was my first experience building a full-stack, full-CRUD application.",
            "It is a simple blogging site where users can log in and navigate through posts and add comments, responses and favorites. Admins can login to create, edit, and publish new posts.",
            "I implemented Passport's Auth0 Strategy to handle authentication and sessions, and the SlateJS rich text editing library for creating dynamic blog posts directly in the browser."]
    ],
    img: personal,
    github: "https://github.com/Tommydreamer57/personal-project",
    url: "http://personalproject.thomaslowry.me",
    tech: [
        REACT,
        REDUX,
        SCSS,
        SLATE,
        NODE,
        EXPRESS,
        AUTH0,
        POSTGRESQL
    ],
    tags: [
        FULL_CRUD,
        FULL_STACK,
        FRONT_END,
        // BACK_END,
        INDIVIDUAL,
        DEVMOUNTAIN,
        RESPONSIVE
    ]
}

const GroupProject = {
    title: "CodeWars Clone",
    subtitle: "DevMountain Group Project",
    description: [
        ["# Collaborators",
            ["This is my group project that I built together with", Chase_Davis, "and", Conner_Jensen, "as a part of DevMountain's web development program. It is a clone of CodeWars.com, a web application for practicing code."]],
        ["# Features",
            "This project utilizes the Ace library for editing code in the browser and the Slate library for editing text as well as an iframe sandbox for security when running a user's code input. Code input and test cases are saved as strings in state and then sent to the iframe to be converted into their correct data types and evaluated."],
        ["# Parsing Algorithms",
            "My responsibilities included creating the algorithms to parse the strings into the correct data types, evaluate the code input, catch any errors, and return the results. In conjunction with the testing functionality, I built the create page and the tests component."]
    ],
    img: group,
    github: "https://github.com/DevMtn-CodeWars/Group-Project",
    url: "http://groupproject.thomaslowry.me",
    tech: [
        REACT,
        REDUX,
        JEST,
        SCSS,
        SLATE,
        ACE,
        NODE,
        EXPRESS,
        AUTH0,
        POSTGRESQL
    ],
    tags: [
        FULL_CRUD,
        FULL_STACK,
        FRONT_END,
        // BACK_END,
        GROUP,
        DEVMOUNTAIN
    ]
}

const TriviaTrends = {
    title: "Trivia Trends",
    subtitle: "Angular Simulation",
    description: [
        ["# Coding Competition",
            "I built this project in AngularJS for a competition during the latter half of DevMountain's web development course. The styles and basic HTML were already set up, along with a full back-end.",
            "The contest was to be the first to add all the functionality with Angular, including retreiving, filtering, and mapping through the data, handling events, and sending data back to the API.",
        ], ["# Winners",
            "My group won this competition, and afterwards I built my own database and server for the project."]
    ],
    img: trivia,
    url: "http://trivia.thomaslowry.me",
    github: "https://github.com/Tommydreamer57/simulation-four",
    tech: [
        ANGULARJS,
        NODE,
        EXPRESS,
        POSTGRESQL
    ],
    tags: [
        FULL_CRUD,
        FULL_STACK,
        FRONT_END,
        // BACK_END,
        GROUP,
        DEVMOUNTAIN
    ]
}

const Projects = [
    StudentInfoAPI,
    MeiosisProject,
    NorthStarApp,
    BoggleApp,
    CalendarProject,
    // ColorBlender,
    PersonalProject,
    GroupProject,
    TriviaTrends,
]

const Contact = {
    text: "Feel free to reach out to me through LinkedIn, or send me an email at $$$minilao94@yahoo.com.$",
    links: [
        {
            name: "GitHub",
            icon: "devicon-github-plain",
            link: "https://github.com/tommydreamer57"
        },
        // {
        //     name: "minilao94@yahoo.com",
        //     svg: logo,
        //     link: "minilao94@yahoo.com"
        // },
        {
            name: "LinkedIn",
            svg: LinkedIn,
            link: "http://linkedin.com/in/thomasglowry"
        }
    ]
}


export default {
    Home,
    Skills,
    Projects,
    Tags,
    Contact
}
