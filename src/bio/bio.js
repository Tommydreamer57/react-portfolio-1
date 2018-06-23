// ASPECT RATIO FOR IMAGES === 1871 x 893
import cell from '../assets/Meiosis Screenshot.PNG';
import boggle from '../assets/Boggle Copy.png';
import calendar from '../assets/Calendar Screenshot.PNG';
import colors from '../assets/Color Blender Screenshot.PNG';
import personal from '../assets/Personal Project Copy.png';
import group from '../assets/CodeWars Copy.png';
import trivia from '../assets/Trivia Trends Screenshot.PNG';
import LinkedIn from '../assets/iconmonstr-linkedin-3.svg';
import redux from '../assets/Redux.svg';
import logo from '../assets/logo.svg';

let About = {
    greeting: "Hi, I'm Tommy Lowry",
    // intro: "I am a full-stack web-developer, linguist, and artist.",
    intro: "I am a full-stack web-developer, linguist, and artist. My programming specialties include React, Node, and plain vanilla JavaScript. Having lived across the United States and Germany, I am fluent in both English and German",
    info: [
        "My programming specialties include React, Node, and plain vanilla JavaScript. Having lived across the United States and Germany, I am fluent in both English and German.",
        "My love for code is largely a branch off of my love for language. I studied German in high school and college, and have also studied Italian, Spanish, Polish, and Russian. I have found code and language to be similar in both their challenge and their creative ability.",
    ],
    more: [
        "Since completing a project on information theory in 8th grade, I have always taken interest in information and how it is transmitted and received in all its different forms - audible communication, words, connotations, body-language, ink on paper, or pixels on a screen.",
        "This project marked the beginning of my fascination with language and communication.",
        "In high school I studied German and developed a greater love for language. I continued studying German through high school, then spent two years in Germany before returning to America to continue my studies.",
        "During my third year of college I realized that my talent for human language might be transferrable to computer language. With that realization I knew I had to learn to code.",
        "I decided to put off my language studies until I have the opportunity to learn each language in its native land, and devote my current efforts to this new realm of communication.",
    ]
}

// TAGS
const FULL_CRUD = { name: "Full CRUD" }
const FULL_STACK = { name: "Full-Stack" }
const FRONT_END = { name: "Front End" }
const BACK_END = { name: "Back End" }
const RESPONSIVE = { name: "Responsive" }
const INDIVIDUAL = { name: "Individual" }
const GROUP = { name: "Group" }
const DEVMOUNTAIN = { name: "DevMountain" }

let Tags = [
    FULL_CRUD,
    FULL_STACK,
    FRONT_END,
    // BACK_END,
    RESPONSIVE,
    INDIVIDUAL,
    GROUP,
    DEVMOUNTAIN
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
const JQUERY = { name: "JQuery", icon: "devicon-jquery-plain" }
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
const GIT = { name: "git", icon: "devicon-github-plain" }

let Skills = {
    main: [
        HTML5,
        CSS3,
        ES6
    ],
    front: [
        REACT,
        REDUX,
        MEIOSIS,
        ANGULARJS,
        JQUERY,
        SCSS,
        JSS
    ],
    back: [
        NODE,
        EXPRESS,
        AUTH0,
        BCRYPT,
        POSTGRESQL,
        MONGODB,
        // HEROKU
    ],
    other: [
        SLATE,
        ACE,
        // IFRAME,
        JEST,
        GIT
    ]
}

const Chase_Davis = { name: "Chase Davis", link: "https://www.linkedin.com/in/cwdvs" }
const Conner_Jensen = { name: "Conner Jensen", link: "https://www.linkedin.com/in/connerjensen" }
const Mikel_North = { name: "Mikel North", link: "https://www.linkedin.com/in/mikelnorth" }
const Josi_Moore = { name: "Josi Moore", link: "https://www.linkedin.com/in/josi-moore" }
const Scott_Abbott = { name: "Scott Abbott" }
const Tayt_Low = { name: "Tayt Low" }
const Tav_Hafner = { name: "Tav Hafner" }

const Meiosis_Tutorial = { name: "here", link: "https://github.com/Tommydreamer57/meiosis-demo" }

let Projects = [
    {
        title: "Cell",
        subtitle: "Clone of Slack.com",
        description: [
            ["# Collaborators",
                ["I worked together with", Scott_Abbott, Tayt_Low, "and", Tav_Hafner, "on this project."]],
            ["# Meiosis",
                ["This is my first project using the JavaScript pattern, Meiosis. Meiosis is a pattern for managing state in an application following the model view concept. I built a tutorial on this pattern", Meiosis_Tutorial, ". I found this pattern to be much lighter than Redux as well as easier to implement."]],
            ["# CSS in JS",
                "I decided to try out CSS in JS with the library Aphrodite-JSS in this project. This project therefore has 0 CSS files and is almost 100% JavaScript."],
            ["# Bcrypt",
                "For authentication I decided to try out the bcrypt library for salting and hashing passwords. Implementation was quick and easy with bcrypt, and it allowed me to control sessions directly in the server."]
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
    },
    {
        title: "Boggle",
        subtitle: "Boggle Word Search",
        description: [
            ["# Features",
                "This project features an algorithm to map out all paths to create a given word on a boggle board and a muli-layered cache system for minimizing http requests."],
            ["# Mapping Algorithm",
                "The mapping algorithm finds all possible starting points for a given word, then loops through the starting points to recursively create all possible paths from each starting point that can create the given word."],
            ["# Oxford Dictionary API",
                "This project uses the Oxford Dictionary API to validate words. I implemented the cache system to remember the results of each request to the API and minimize the number of requests made on all levels."],
            ["# Cache System",
                "The cache system begins in the browser, which makes an initial request to get a list of all previously validated words with which to compare inputted words before making a request to the server.",
                "If a word is inputted that has not previously been validated, the browser will send a request to the server to validate the word. The server keeps a cache of all previously validated words and of all current outgoing requests to both the database and Oxford.",
                "First, the server will check its own cache for the word. If it doesn't find the word, it will check its cache for an outgoing request for the word and subscribe to that request. If it still hasn't found the word, it will send a request to th  e database for the word"]
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
    },
    {
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
    },
    {
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
    },
    {
        title: "Blog Template",
        subtitle: "DevMountain Personal Project",
        description: [
            "I built this project using React on Redux with the SlateJS text-editing library and Passport-Auth0 authentication. Users can navigate through posts and add comments, responses and favorites. Admins can login to create, edit, and publish new posts."
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
    },
    {
        title: "CodeWars Clone",
        subtitle: "DevMountain Group Project",
        description: [
            ["# Collaborators",
                ["I worked together with", Chase_Davis, "and", Conner_Jensen, "to create this clone of CodeWars.com, a webapp for practicing code."]],
            ["# Features",
                "This project utilizes the Ace code editor and Slate text editor as well as an iframe sandbox for security. Code input and test cases are saved as strings and sent to the iframe to be converted into their correct data types and evaluated."],
            ["# Responsibilities",
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
    },
    {
        title: "Trivia Trends",
        subtitle: "Angular Simulation",
        description: [
            ["# ",
                "I built this project in Angular for a competition at devmountain. The styles and basic HTML were already set up, along with an API.",
                "The contest was to be the first to add all the functionality with Angular, including retreiving, filtering, and mapping through the data, handling clicks and adding correct class-names, and sending data back to the API.",
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
]

let Contact = [
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


export default {
    About,
    Skills,
    Projects,
    Tags,
    Contact
}
