import personal from './components/assets/Personal Project Screenshot.PNG';
import group from './components/assets/CodeWars Create page.png';
import trivia from './components/assets/Trivia Trends Screenshot.PNG';
import LinkedIn from './components/assets/iconmonstr-linkedin-3.svg';
import redux from './components/assets/Redux.svg';

let About = {
    greeting: "Hi, I'm Tommy Lowry",
    intro: "I am a full-stack web-developer, linguist, and artist.",
    more: [
        "My programming specialties include React, Node, and plain vanilla JavaScript. Having lived across the United States and Germany, I am fluent in both English and German.",
        "My love for code is largely a branch off of my love for language. I studied German in high school and college, and have also studied Italian, Spanish, Polish, and Russian. I have found code and language to be similar in both their challenge and their creative ability.",
        "Since completing a project on information theory in 8th grade, I have always taken interest in information and how it is transmitted and received in all its different forms - audible communication, words, connotations, body-language, ink on paper, or pixels on a screen.",
        "This project marked the beginning of my fascination with language and communication.",
        "In high school I studied German and developed a greater love for language. I continued studying German through high school, then spent two years in Germany before returning to America to continue my studies.",
        "During my third year of college I realized that my talent for human language might be transferrable to computer language. With that realization I knew I had to learn to code.",
        "I decided to put off my language studies until I have the opportunity to learn each language in its native land, and devote my current efforts to this new realm of communication.",
    ]
}

let Skills = {
    main: [
        { name: "HTML5", icon: "devicon-html5-plain" },
        { name: "CSS3", icon: "devicon-css3-plain " },
        { name: "ES6", icon: "devicon-javascript-plain" }
    ],
    front: [
        { name: "React", icon: "devicon-react-original" },
        { name: "Redux", svg: redux },
        { name: "Sass", icon: "devicon-sass-original" },
        { name: "AngularJS", icon: "devicon-angularjs-plain" },
        { name: "JQuery", icon: "devicon-jquery-plain" }
    ],
    back: [
        { name: "Node", icon: "devicon-nodejs-plain" },
        { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
        { name: "Auth0", icon: "" },
        { name: "Heroku", icon: "devicon-heroku-plain" }
    ],
    other: [
        { name: "Slate", icon: "" },
        { name: "Ace", icon: "" },
        { name: "iframe", icon: "" },
        { name: "Jest", icon: "" },
        { name: "git", icon: "devicon-github-plain" }
    ]
}

let Projects = [
    {
        title: "Blog Template",
        subtitle: "DevMountain Personal Project",
        description: [
            "I built this project using React on Redux with the SlateJS text-editing library and Passport-Auth0 authentication. Users can navigate through posts and add comments, responses and favorites. Admins can login to create, edit, and publish new posts."
        ],
        img: personal,
        url: "http://personalproject.thomaslowry.me",
        tech: [
            { name: "React", icon: "devicon-react-original" },
            { name: "Redux", icon: "" },
            { name: "Sass", icon: "devicon-sass-original" },
            { name: "Slate", icon: "" },
            { name: "Node", icon: "devicon-nodejs-plain" },
            { name: "Auth0", icon: "" },
            { name: "PostgreSQL", icon: "devicon-postgresql-plain" }
        ]
    },
    {
        title: "CodeWars Clone",
        subtitle: "DevMountain Group Project",
        description: [
            "I worked together with Chase Davis and Conner Jensen to create this clone of CodeWars.com, a webapp for practicing code.",
            "This project utilizes the Ace code editor and Slate text editor as well as an iframe sandbox for security. Code input and test cases are saved as strings and sent to the iframe to be converted into their correct data types and evaluated.",
            "My responsibilities included creating the algorithms to parse the strings into the correct data types, evaluate the code input, catch any errors, and return the results.",
            "In conjunction with the testing functionality, I built the create page and the tests component."
        ],
        img: group,
        url: "http://groupproject.thomaslowry.me",
        tech: [
            { name: "React", icon: "devicon-react-original" },
            { name: "Redux", icon: "" },
            { name: "Sass", icon: "devicon-sass-original" },
            { name: "Slate", icon: "" },
            { name: "Ace", icon: "" },
            { name: "Node", icon: "devicon-nodejs-plain" },
            { name: "Auth0", icon: "" },
            { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
        ]
    },
    {
        title: "Trivia Trends",
        subtitle: "Angular Simulation",
        description: [
            "I built this project in Angular for a competition at devmountain. The styles and basic HTML were already set up, along with an API.",
            "The contest was to be the first to add all the functionality with Angular, including retreiving, filtering, and mapping through the data, handling clicks and adding correct class-names, and sending data back to the API.",
            "My group won this competition, and afterwards I built my own database and server for the project."
        ],
        img: trivia,
        url: "http://trivia.thomaslowry.me",
        tech: [
            { name: "AngularJS", icon: "devicon-angularjs-plain" },
            { name: "Node", icon: "devicon-nodejs-plain" },
            { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
        ]
    }
]

let Contact = [
    {
        name: "GitHub",
        icon: "devicon-github-plain",
        link: "http://github.com/tommydreamer57"
    },
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
    Contact
}
