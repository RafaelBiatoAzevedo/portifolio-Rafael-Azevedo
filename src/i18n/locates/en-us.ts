const objExport = {
  translations: {
    MenuNav: {
      navOne: 'Projects',
      navTwo: 'Formation',
      navThree: 'Courses',
      navFour: 'Certificates',
      navFive: 'Professional experiencies',
      navSix: 'About me',
      navSeven: 'Contact me',
    },
    Header: {
      salute: 'Hello',
      Im: "I'm",
      profession: 'Software developer',
    },
    AsideLeft: {
      hardSkills: {
        title: 'Hard Skills',
        hsOne: 'HTML5 and Semantic HTML',
        hsTwo: 'CSS3 and CSS Responsive',
        hsThree: 'Styled Components',
        hsFour: 'Java, JavaScript, Python and C++',
        hsFive: 'TypeScript',
        hsSix: 'React and React Native',
        hsSeven: 'Redux and Hooks',
        hsEight: 'MySql and MongoDB',
        hsNine: 'Git and GitHub',
        hsTen: 'Agile Methods',
        hsEleven: 'Jest, Mocha, RTL',
        hsTwelve: 'TDD',
      },
      softSkills: {
        title: 'Soft Skills',
        ssOne: 'Empaty',
        ssTwo: 'Patience',
        ssThree: 'Team Work',
        ssFour: 'Open Mind',
        ssFive: 'Creativity',
        ssSix: 'Adapitability',
        ssSeven: 'Comunication',
        ssEight: 'Responsability',
        ssNine: 'Solve problems',
        ssTen: 'Critical thinking',
        ssEleven: 'Emotional inteligence',
      },
    },
    Projects: {
      title: 'Projects',
      titleOne: 'Type',
      titleTwo: 'Status',
      titleThree: 'Data',
      titleFour: 'Techonologies',
      projectOne: {
        title: 'Rafa Express',
        type: 'E-Commerce',
        status: 'In Development',
        datas: {
          dataOne: 'API - mercado livre',
          dataTwo: 'API - correios',
        },
      },
      projectTwo: {
        title: 'Brothers',
        type: 'Marketing',
        status: 'Concluded',
        datas: {
          dataOne: 'Local Data',
        },
      },
      projectThree: {
        title: 'Trivia Game',
        type: 'Game',
        status: 'Concluded',
        datas: {
          dataOne: 'API - opentdb',
          dataTwo: 'API - gravatar',
        },
      },
      projectFour: {
        title: 'Movie Cards Library',
        type: 'CRUD',
        status: 'Concluded',
        datas: {
          dataOne: 'Local Data',
        },
      },
    },
    Formation: {
      title: 'Formation',
      titleOne: 'SYSTEMS ANALYSIS',
      titleTwo: 'Situation',
      situation: {
        situationOne: 'Studied until 7° semester',
        situationTwo: 'Locked from 2009',
      },
    },
    Courses: {
      title: 'Courses',
      titleOne: 'Situation',
      titleTwo: 'Content',
      courseOne: {
        title: 'Full Stack Web Development',
        situations: {
          situationOne: '1 year',
          situationTwo: 'Concluded in 2021',
        },
        contents: {
          contentOne: 'Web Development Fundamentals',
          contentTwo: 'Front-End developmenmt',
          contentThree: 'Back-End developmenmt',
          contentFour: 'Computer science',
        },
      },
      courseTwo: {
        title: 'Python 3',
        situations: {
          situationOne: '120 Hours',
          situationTwo: 'Concluded in 2020',
        },
        contents: {
          contentOne: 'Module 1 - Fundamentals',
          contentTwo: 'Module 2 - Control Structures',
          contentThree: 'Module 3 - Composite structures',
        },
      },
      courseThree: {
        title: 'Linux',
        situations: {
          situationOne: '40 Hours',
          situationTwo: 'Concluded in 2020',
        },
        contents: {
          contentOne: 'Distros installations',
          contentTwo: 'Commands terminal',
        },
      },
      courseFour: {
        title: 'Java',
        situations: {
          situationOne: '120 Hours',
          situationTwo: 'Concluded in 2018',
        },
        contents: {
          contentOne: 'Java Basic',
          contentTwo: 'Module 1 - POO',
          contentThree: 'Module 2 - POO',
        },
      },
      courseFive: {
        title: 'English',
        situations: {
          situationOne: 'Advanced',
          situationTwo: 'Concluded in 2006',
        },
        contents: {
          contentOne: 'Wrate',
          contentTwo: 'Read',
          contentThree: 'Speak',
          contentFour: 'Listen',
        },
      },
      courseSix: {
        title: 'Eletrical and Mechanical',
        situations: {
          situationOne: '600 Hours',
          situationTwo: 'Concluded in 2003',
        },
        contents: {
          contentOne: 'Electrical and mechanical fundamentals',
          contentTwo: 'Electrical and mechanical practical',
          contentThree: 'Electrical and mechanical maintenance',
        },
      },
      courseSeven: {
        title: 'Computer maintenance',
        situations: {
          situationOne: '160 Hours',
          situationTwo: 'Concluded in 2001',
        },
        contents: {
          contentOne: 'Checking for hardware and software',
          contentTwo: 'Solve problems and errors',
          contentThree: 'Update of parts and peripherals (upgrade)',
          contentFour: 'Backup and recovery of files and data',
          contentFive: 'Installation and configuration of networks',
        },
      },
      courseEight: {
        title: 'Computing',
        situations: {
          situationOne: 'Advanced',
          situationTwo: 'Concluded in 1999',
        },
        contents: {
          contentOne: 'Windowns advanced',
          contentTwo: 'Office advenced',
          contentThree: 'Draw advanced',
        },
      },
    },
    Certificates: {
      title: 'Certificates',
      titleOne: 'Content',
      view: 'View PDF',
      credentials: 'View credential',
      certificateOne: {
        title: 'Web Development Fundamentals',
        contentOne: 'Unix and Bash',
        contentTwo: 'Git, GitHub and internet',
        contentThree: 'Introduction to HTML and CSS',
        contentFour: 'JavaScript - DOM, Events and Web Storage',
        contentFive: 'Forms, Flexbox e Responsividade',
        contentSix: 'Introduction to JavaScript ES6 and unit test',
        contentSeven: 'Higher Order Functions of JavaScript ES6',
        contentEight: 'Asynchronous JavaScript and Promises',
        contentNine: 'Automated testing with Jest',
      },
      certificateTwo: {
        title: 'Front-End Development',
        contentOne: 'Introduction to React',
        contentTwo: 'Components with Status, Events and Forms with React',
        contentThree: 'Components Life Cycle and React Router',
        contentFour: 'Agile Methodologies',
        contentFive: 'Automated testing with React Testing Library',
        contentSix: 'State management with Redux',
        contentSeven: 'Context API and React Hooks',
      },
      certificateThree: {
        title: 'Back-End Development',
        contentOne: 'Introduction to SQL',
        contentTwo: 'Functions SQL and JOINs',
        contentThree: 'Database Standardization and Modeling',
        contentFour: 'Introduction to MongoDB',
        contentFive: 'MongoDB - Simple and Complex Upgrades',
        contentSix: 'MongoDB - Aggregation Framework',
        contentSeven: 'Web Development with NodeJs',
        contentEight: 'NodeJs - Architecture MSC, Rest and Restful ',
        contentNine: 'Authentication and Upload of files',
        contentTen: 'Deployment',
        contentEleven: 'Architecture SOLID and ORM',
        contentTwelve: 'Sockets',
      },
    },
    Experiences: {
      title: 'Professional experiences',
      titleOne: 'Responsibility',
      titleTwo: 'Functions',
      experienceOne: {
        title: 'RS Solutions',
        responsibility: {
          title: 'Junior developer',
          date: 'From May/2021 to currently',
        },
        functions: {
          functionOne: 'Develop React + TypeScript',
          functionTwo: 'Develop React-Native + TypeScript',
          functionThree: 'API Integration',
        },
      },
      experienceTwo: {
        title: 'Restaurante Bandeirantes',
        responsibility: {
          title: 'Manager',
          date: 'From January/2003 to May/2018',
        },
        functions: {
          functionOne: 'Coordinate and train the team',
          functionTwo: 'Place orders with suppliers',
          functionThree: 'Control the stock',
          functionFour: 'Organize food safety and hygiene standards',
          functionFive: 'Set up the calendar of days off and vacations',
        },
      },
    },
    AboutMe: {
      title: 'About me',
      textOne: 'I am very passionate about technology and innovation.',
      textTwo: 'I started studying in the TI area from a very young age.',
      textThree:
        'In 1995, when I was 9 years old, I started studying computer science.',
      textFour:
        'At the age of 15 I took a course in maintenance and installation of networks and computers.',
      textFive:
        'At the age of 19 I studied 4 years of System Analysis at Puc-Campinas.',
      textSix:
        'I worked 15 years professionally as a manager in the food industry.',
      textSeven:
        'In 2020 I decided to change and work with TI that I really love and I resumed my studies in full stack web development at Trybe.',
    },
    ContactMe: {
      title: 'Contact me',
    },
    Footer: {
      message: 'Customized solutions in Applications and Websites.',
    },
  },
};

export default objExport;
