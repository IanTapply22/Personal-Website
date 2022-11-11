const about = {
  // all the properties are optional - can be left empty or deleted
  // each element in the description array is a paragraph
  name: 'Ian Tapply',
  role: 'Full-Stack Developer',
  company: '',
  description: [
    `Hey! My name is Ian and I'm a proficient and inspired developer. I enjoy coding in Java, JavaScript, Golang, and even Assembly, check out my Github to see some of my awesome projects I've made along with my socials.`,
  ],
  resume: '',
  social: {
    github: 'https://github.com/IanTapply22',
    instagram: 'https://www.instagram.com/iantapply/',
  },
  greetingEmoji: '👋',
}

const projects = [
  // projects can be added and removed
  // if there are no projects, Projects section won't show up
  // each element in the description array is a paragraph
  {
    thumbnail: 'images/portfolio.png',
    name: 'Personal Website',
    description: [
      'This website! It will be periodically updated throughout my life.',
    ],
    stack: ['React', 'Next.js', 'JavaScript', 'MUI'],
    sourceCode: 'https://github.com/IanTapply22/Personal-Website',
    livePreview: 'https://www.ian-tapply.me',
  },
  {
    thumbnail: 'images/simbotics.png',
    name: '1114 Stats API',
    description: [
      'A stats API made with Spring Boot that tracks stats for the blue alliance team #1114.',
    ],
    stack: ['Java', 'Spring', 'Maven', 'Lombok'],
    sourceCode: 'https://github.com/IanTapply22/1114-Stats-API',
    livePreview: 'https://api.ian-tapply.me',
  },
  {
    thumbnail: 'images/react.png',
    name: '1114 React Web App',
    description: [
      'The react web app that you can create, update, and delete teams as well as change and track stats for specific teams.',
    ],
    stack: ['Axios', 'JavaScript', 'React'],
    sourceCode: 'https://github.com/IanTapply22/1114-Stats-React',
    livePreview: 'https://stats-dev.ian-tapply.me',
  },
  {
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'ScoutingPlatformAPI',
    description: [
      'An API used for ease of use when creating scouting data for FRC competitions. Commonly integrated in a vuejs or react app.',
    ],
    stack: ['Spring', 'Java', 'Maven', 'Lombok'],
    sourceCode: 'https://github.com/IanTapply22/ScoutingPlatformAPI',
    livePreview: 'https://scouting.ian-tapply.me',
  },
  {
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'ScoutingPlatform',
    description: [
      'The front-end code for the implementation of the ScoutingPlatformAPI. Implemented with Vue and ViteJS.',
    ],
    stack: ['ViteJS', 'VueJS'],
    sourceCode: 'https://github.com/IanTapply22/ScoutingPlatform',
    livePreview: 'https://scouting-platform.ian-tapply.me',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Java',
  'Python',
  'Assembly',
  'Git',
  'Spring-Boot',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'contact@ian-tapply.me',
}

export { about, projects, skills, contact }
