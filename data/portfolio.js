const about = {
  // all the properties are optional - can be left empty or deleted
  // each element in the description array is a paragraph
  name: 'Ian Tapply',
  role: 'Proficient Developer',
  company: '',
  description: [
    'I have LOTS of developer experience! I am experienced with backend, front-end, and other frameworks. I am experience with Java, C++, C#, JavaScript, Golang, Rust, and various other languages. I hope to expand my knowledge with coding and always try new things.',
  ],
  //resume: 'https://example.com',
  social: {
    github: 'https://github.com/IanTapply22',
  },
  greetingEmoji: '👨‍💻',
}

const projects = [
  // projects can be added and removed
  // if there are no projects, Projects section won't show up
  // each element in the description array is a paragraph
  {
    thumbnail: 'images/simbotics.png',
    name: '1114 Rest API',
    description: [
      'Used to track stats, create stats, make teams, and more!',
    ],
    stack: ['Java', 'Firebase', 'Lombok'],
    sourceCode: 'https://github.com/IanTapply22/1114-Stats-API',
    livePreview: 'https://github.com',
  },
  {
    thumbnail: 'images/react.png',
    name: 'Stats React Web Application',
    description: [
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    ],
    stack: ['JavaScript', 'React', 'CSS', 'Typescript'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
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
  'Golang',
  'Rust',
  'C#',
  'C++',
  'Git',
  'Java',
  'Python',
  'Ruby',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'contact@ian-tapply.me',
}

export { about, projects, skills, contact }
