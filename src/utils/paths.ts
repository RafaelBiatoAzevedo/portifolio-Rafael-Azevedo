import { Fragment } from 'react';

import {
  SiHtml5,
  SiCss3,
  SiRedux,
  SiStyledcomponents,
  SiNativescript,
  SiTypescript,
  SiVuetify,
  SiMongodb,
  SiMysql,
  SiPython,
  SiJava,
  SiCplusplus,
  SiGit,
  SiGithub,
  SiJest,
  SiMocha,
  SiRtl,
  SiExpress,
  SiBitbucket,
} from 'react-icons/si';
import { RiContactsFill } from 'react-icons/ri';
import { MdOutlineWork, MdComputer } from 'react-icons/md';
import { HiOutlineCode } from 'react-icons/hi';
import { GiPapers } from 'react-icons/gi';
import { FcManager } from 'react-icons/fc';
import {
  FaUniversity,
  FaGraduationCap,
  FaJs,
  FaReact,
  FaNodeJs,
} from 'react-icons/fa';
import { BsPersonBoundingBox } from 'react-icons/bs';

import { TProject } from '~/types/TProject';
import { TNav } from '~/types/TNav';
import { TMainContent } from '~/types/TMainContent';
import { TExperience } from '~/types/TExperience';
import { TCourse } from '~/types/TCourse';
import { TCertificate } from '~/types/TCertificate';
import { themeDark as themeCurrency } from '~/styles/theme';
import { themeDark } from '~/styles/theme';
import { ISkill } from '~/interfaces/ISkill';
import { Projects } from '~/components/Projects';
import { Formation } from '~/components/Formation';
import { Experiences } from '~/components/Experiences';
import { Courses } from '~/components/Courses';
import { ContactMe } from '~/components/ContactMe';
import { Certificates } from '~/components/Certificates';
import { AboutMe } from '~/components/AboutMe';
import triviaIcon from '~/assets/images/projects/triviaGameIcon.jpg';
import rafaExpressIcon from '~/assets/images/projects/rafaExpressIcon.png';
import movieIcon from '~/assets/images/projects/movieIcon.png';
import worldStarWrasIcon from '~/assets/images/projects/darthVadenIcon.png';
import brothersIcon from '~/assets/images/projects/brothersIcon.png';
import trybeIcon from '~/assets/images/courses/trybeIcon.png';
import senaiIcon from '~/assets/images/courses/senaiIcon.png';
import pythonIcon from '~/assets/images/courses/pythonIcon.png';
import microlinsIcon from '~/assets/images/courses/microlinsIcon.png';
import linuxIcon from '~/assets/images/courses/linuxIcon.ico';
import javaIcon from '~/assets/images/courses/javaIcon.png';
import fiskIcon from '~/assets/images/courses/fiskIcon.svg';
import computingIcon from '~/assets/images/courses/computingIcon.png';
import trybeCertificateIcon from '~/assets/images/certificates/trybeCertificate.png';
import fundamentalsIcon from '~/assets/images/certificates/Fundamentos.png';
import frontEndIcon from '~/assets/images/certificates/FrontEnd.png';
import computerScienceIcon from '~/assets/images/certificates/computerScience.png';
import backEndIcon from '~/assets/images/certificates/BackEnd.png';

export const hardSkills: ISkill[] = [
  {
    name: 'HardSkills.hsOne',
    icon: SiHtml5,
    href: 'https://www.w3schools.com/html/',
    colorIcon: themeDark.colors.html,
  },
  {
    name: 'HardSkills.hsTwo',
    icon: SiCss3,
    href: 'https://www.w3schools.com/css/',
    colorIcon: themeDark.colors.css,
  },
  {
    name: 'HardSkills.hsThree',
    icon: SiStyledcomponents,
    href: 'https://styled-components.com/',
    colorIcon: themeDark.colors.styled,
  },
  {
    name: 'HardSkills.hsFour',
    icon: SiCplusplus,
    href: 'https://devdocs.io/cpp/',
    colorIcon: themeDark.colors['C++'],
  },
  {
    name: 'HardSkills.hsFive',
    icon: SiJava,
    href: 'https://dev.java/learn/',
    colorIcon: themeDark.colors.java,
  },
  {
    name: 'HardSkills.hsSix',
    icon: SiPython,
    href: 'https://www.python.org/',
    colorIcon: themeDark.colors.python,
  },
  {
    name: 'HardSkills.hsSeven',
    icon: FaJs,
    href: 'https://www.javascript.com/',
    colorIcon: themeCurrency.colors.js,
  },
  {
    name: 'HardSkills.hsEight',
    icon: SiTypescript,
    href: 'https://www.typescriptlang.org/',
    colorIcon: themeDark.colors.ts,
  },
  {
    name: 'HardSkills.hsNine',
    icon: SiVuetify,
    href: 'https://vuejs.org/guide/introduction.html',
    colorIcon: themeDark.colors.vue,
  },
  {
    name: 'HardSkills.hsTen',
    icon: FaReact,
    href: 'https://pt-br.reactjs.org/',
    colorIcon: themeDark.colors.react,
  },
  {
    name: 'HardSkills.hsEleven',
    icon: SiNativescript,
    href: 'https://reactnative.dev/',
    colorIcon: themeDark.colors.react,
  },
  {
    name: 'HardSkills.hsTwelve',
    icon: SiRedux,
    href: 'https://redux.js.org/',
    colorIcon: themeDark.colors.redux,
  },
  {
    name: 'HardSkills.hsThirteen',
    icon: FaReact,
    href: 'https://legacy.reactjs.org/docs/context.html',
    colorIcon: themeDark.colors.react,
  },
  {
    name: 'HardSkills.hsFourteen',
    icon: FaNodeJs,
    href: 'https://nodejs.org/en/',
    colorIcon: themeDark.colors.node,
  },
  {
    name: 'HardSkills.hsFifteen',
    icon: SiExpress,
    href: 'https://expressjs.com/',
    colorIcon: themeDark.colors.node,
  },
  {
    name: 'HardSkills.hsSixteen',
    icon: SiMongodb,
    href: 'https://www.mongodb.com/',
    colorIcon: themeDark.colors.mongo,
  },
  {
    name: 'HardSkills.hsSeventeen',
    icon: SiMysql,
    href: 'https://www.mysql.com/',
    colorIcon: themeDark.colors.mysql,
  },
  {
    name: 'HardSkills.hsEightteen',
    icon: SiGit,
    href: 'https://git-scm.com/doc',
    colorIcon: themeCurrency.colors.git,
  },
  {
    name: 'HardSkills.hsNineteen',
    icon: SiGithub,
    href: 'https://github.com/',
    colorIcon: themeDark.colors.gitHub,
  },
  {
    name: 'HardSkills.hsTwenty',
    icon: SiBitbucket,
    href: 'https://bitbucket.org/',
    colorIcon: themeDark.colors.css,
  },
  {
    name: 'HardSkills.hsTwentyOne',
    icon: SiJest,
    href: 'https://jestjs.io/pt-BR/docs/getting-started',
    colorIcon: themeDark.colors.jest,
  },
  {
    name: 'HardSkills.hsTwentyTwo',
    icon: SiMocha,
    href: 'https://mochajs.org/',
    colorIcon: themeDark.colors.mocha,
  },
  {
    name: 'HardSkills.hsTwentyThree',
    icon: SiRtl,
    href: 'https://testing-library.com/docs/react-testing-library/intro/',
    colorIcon: '',
  },
  {
    name: 'HardSkills.hsTwentyFour',
    icon: undefined,
    href: 'https://coodesh.com/blog/candidates/metodologias/tdd-e-seu-significado-por-que-ele-ajuda-a-aumentar-a-sua-produtividade/',
    colorIcon: '',
  },
  {
    name: 'HardSkills.hsTwentyFive',
    icon: undefined,
    href: 'https://www.metodoagil.com/metodos-ageis/',
    colorIcon: '',
  },
];

export const softSkills: ISkill[] = [
  {
    name: 'SoftSkills.ssOne',
    icon: undefined,
    href: undefined,
    colorIcon: undefined,
  },
  {
    name: 'SoftSkills.ssTwo',
    icon: undefined,
    href: undefined,
    colorIcon: undefined,
  },
  {
    name: 'SoftSkills.ssThree',
    icon: undefined,
    href: undefined,
    colorIcon: undefined,
  },
  {
    name: 'SoftSkills.ssFour',
    icon: undefined,
    href: undefined,
    colorIcon: undefined,
  },
  {
    name: 'SoftSkills.ssFive',
    icon: undefined,
    href: undefined,
    colorIcon: undefined,
  },
  {
    name: 'SoftSkills.ssSix',
    icon: undefined,
    href: undefined,
    colorIcon: undefined,
  },
  {
    name: 'SoftSkills.ssSix',
    icon: undefined,
    href: undefined,
    colorIcon: undefined,
  },
  {
    name: 'SoftSkills.ssSeven',
    icon: undefined,
    href: undefined,
    colorIcon: undefined,
  },
  {
    name: 'SoftSkills.ssEight',
    icon: undefined,
    href: undefined,
    colorIcon: undefined,
  },
  {
    name: 'SoftSkills.ssNine',
    icon: undefined,
    href: undefined,
    colorIcon: undefined,
  },
  {
    name: 'SoftSkills.ssTen',
    icon: undefined,
    href: undefined,
    colorIcon: undefined,
  },
  {
    name: 'SoftSkills.ssEleven',
    icon: undefined,
    href: undefined,
    colorIcon: undefined,
  },
];

export const navs: TNav[] = [
  { title: 'MenuNav.navOne', name: 'start' },
  { title: 'MenuNav.navTwo', name: 'skills' },
  { title: 'MenuNav.navThree', name: 'projects' },
  { title: 'MenuNav.navFive', name: 'formation' },
  { title: 'MenuNav.navFour', name: 'courses' },
  { title: 'MenuNav.navNine', name: 'certificates' },
  { title: 'MenuNav.navEigth', name: 'experiences' },
  { title: 'MenuNav.navSeven', name: 'contactMe' },
];

export const mainContent: TMainContent = {
  start: {
    title: 'Start.title',
    icon: HiOutlineCode,
    component: Fragment,
  },
  skills: {
    title: 'Skills.title',
    icon: HiOutlineCode,
    component: Fragment,
  },
  projects: {
    title: 'Projects.title',
    icon: HiOutlineCode,
    component: Projects,
  },
  formation: {
    title: 'Formation.title',
    icon: FaUniversity,
    component: Formation,
  },
  courses: {
    title: 'Courses.title',
    icon: FaGraduationCap,
    component: Courses,
  },
  certificates: {
    title: 'Certificates.title',
    icon: GiPapers,
    component: Certificates,
  },
  experiences: {
    title: 'Experiences.title',
    icon: MdOutlineWork,
    component: Experiences,
  },
  aboutMe: {
    title: 'AboutMe.title',
    icon: BsPersonBoundingBox,
    component: AboutMe,
  },
  contactMe: {
    title: 'ContactMe.title',
    icon: RiContactsFill,
    component: ContactMe,
  },
};

export const projects: TProject[] = [
  {
    icon: worldStarWrasIcon,
    linkHomepage: 'https://worldstarwars.netlify.app/',
    linkGihub: 'https://github.com/RafaelBiatoAzevedo/world-starwars',
    title: 'Projects.projectOne.title',
    type: 'Projects.projectOne.type',
    status: 'Projects.projectOne.status',
    datas: ['Projects.projectOne.datas.dataOne'],
    technologies: [
      { name: 'HTML 5', icon: SiHtml5, color: themeCurrency.colors.html },
      { name: 'CSS 3', icon: SiCss3, color: themeCurrency.colors.css },
      {
        name: 'typeScript',
        icon: SiTypescript,
        color: themeCurrency.colors.ts,
      },
      { name: 'react', icon: FaReact, color: themeCurrency.colors.react },
      {
        name: 'styled-components',
        icon: SiStyledcomponents,
        color: themeCurrency.colors.styled,
      },
    ],
  },
  {
    icon: rafaExpressIcon,
    linkHomepage: 'https://rafaelbiatoazevedo.github.io/Site-Rafa-Express/',
    linkGihub: '',
    title: 'Projects.projectTwo.title',
    type: 'Projects.projectTwo.type',
    status: 'Projects.projectTwo.status',
    datas: [
      'Projects.projectTwo.datas.dataOne',
      'Projects.projectTwo.datas.dataTwo',
    ],
    technologies: [
      { name: 'HTML 5', icon: SiHtml5, color: themeCurrency.colors.html },
      { name: 'CSS 3', icon: SiCss3, color: themeCurrency.colors.css },
      { name: 'javaScript', icon: FaJs, color: themeCurrency.colors.js },
      { name: 'react', icon: FaReact, color: themeCurrency.colors.react },
      { name: 'redux', icon: SiRedux, color: themeCurrency.colors.redux },
    ],
  },
  {
    icon: brothersIcon,
    linkHomepage: 'https://brothersreparosgeral.netlify.app/',
    linkGihub: 'https://github.com/RafaelBiatoAzevedo/brothers',
    title: 'Projects.projectThree.title',
    type: 'Projects.projectThree.type',
    status: 'Projects.projectThree.status',
    datas: ['Projects.projectThree.datas.dataOne'],
    technologies: [
      { name: 'HTML 5', icon: SiHtml5, color: themeCurrency.colors.html },
      { name: 'CSS 3', icon: SiCss3, color: themeCurrency.colors.css },
      { name: 'javaScript', icon: FaJs, color: themeCurrency.colors.js },
    ],
  },
  {
    icon: triviaIcon,
    linkHomepage: 'https://playtriviagame.netlify.app/',
    linkGihub: 'https://github.com/RafaelBiatoAzevedo/trivia-game',
    title: 'Projects.projectFour.title',
    type: 'Projects.projectFour.type',
    status: 'Projects.projectFour.status',
    datas: [
      'Projects.projectFour.datas.dataOne',
      'Projects.projectFour.datas.dataTwo',
    ],
    technologies: [
      { name: 'HTML 5', icon: SiHtml5, color: themeCurrency.colors.html },
      { name: 'CSS 3', icon: SiCss3, color: themeCurrency.colors.css },
      { name: 'javaScript', icon: FaJs, color: themeCurrency.colors.js },
      { name: 'react', icon: FaReact, color: themeCurrency.colors.react },
      { name: 'redux', icon: SiRedux, color: themeCurrency.colors.redux },
    ],
  },
  {
    icon: movieIcon,
    linkHomepage: 'https://rafaelbiatoazevedo.github.io/movie-cards-library/',
    linkGihub: 'https://github.com/RafaelBiatoAzevedo/moviesApp',
    title: 'Projects.projectFive.title',
    type: 'Projects.projectFive.type',
    status: 'Projects.projectFive.status',
    datas: ['Projects.projectFive.datas.dataOne'],
    technologies: [
      { name: 'HTML 5', icon: SiHtml5, color: themeCurrency.colors.html },
      { name: 'CSS 3', icon: SiCss3, color: themeCurrency.colors.css },
      { name: 'javaScript', icon: FaJs, color: themeCurrency.colors.js },
      { name: 'react', icon: FaReact, color: themeCurrency.colors.react },
    ],
  },
];

export const courses: TCourse[] = [
  {
    icon: trybeIcon,
    title: 'Courses.courseOne.title',
    situations: [
      'Courses.courseOne.situations.situationOne',
      'Courses.courseOne.situations.situationTwo',
    ],
    contents: [
      'Courses.courseOne.contents.contentOne',
      'Courses.courseOne.contents.contentTwo',
      'Courses.courseOne.contents.contentThree',
      'Courses.courseOne.contents.contentFour',
      'Courses.courseOne.contents.contentFive',
    ],
  },
  {
    icon: pythonIcon,
    title: 'Courses.courseTwo.title',
    situations: [
      'Courses.courseTwo.situations.situationOne',
      'Courses.courseTwo.situations.situationTwo',
    ],
    contents: [
      'Courses.courseTwo.contents.contentOne',
      'Courses.courseTwo.contents.contentTwo',
      'Courses.courseTwo.contents.contentThree',
    ],
  },
  {
    icon: linuxIcon,
    title: 'Courses.courseThree.title',
    situations: [
      'Courses.courseThree.situations.situationOne',
      'Courses.courseThree.situations.situationTwo',
    ],
    contents: [
      'Courses.courseThree.contents.contentOne',
      'Courses.courseThree.contents.contentTwo',
    ],
  },
  {
    icon: javaIcon,
    title: 'Courses.courseFour.title',
    situations: [
      'Courses.courseFour.situations.situationOne',
      'Courses.courseFour.situations.situationTwo',
    ],
    contents: [
      'Courses.courseFour.contents.contentOne',
      'Courses.courseFour.contents.contentTwo',
      'Courses.courseFour.contents.contentThree',
    ],
  },
  {
    icon: fiskIcon,
    title: 'Courses.courseFive.title',
    situations: [
      'Courses.courseFive.situations.situationOne',
      'Courses.courseFive.situations.situationTwo',
    ],
    contents: [
      'Courses.courseFive.contents.contentOne',
      'Courses.courseFive.contents.contentTwo',
      'Courses.courseFive.contents.contentThree',
      'Courses.courseFive.contents.contentFour',
    ],
  },
  {
    icon: senaiIcon,
    title: 'Courses.courseSix.title',
    situations: [
      'Courses.courseSix.situations.situationOne',
      'Courses.courseSix.situations.situationTwo',
    ],
    contents: [
      'Courses.courseSix.contents.contentOne',
      'Courses.courseSix.contents.contentTwo',
      'Courses.courseSix.contents.contentThree',
    ],
  },
  {
    icon: microlinsIcon,
    title: 'Courses.courseSeven.title',
    situations: [
      'Courses.courseSeven.situations.situationOne',
      'Courses.courseSeven.situations.situationTwo',
    ],
    contents: [
      'Courses.courseSeven.contents.contentOne',
      'Courses.courseSeven.contents.contentTwo',
      'Courses.courseSeven.contents.contentThree',
      'Courses.courseSeven.contents.contentFour',
      'Courses.courseSeven.contents.contentFive',
    ],
  },
  {
    icon: computingIcon,
    title: 'Courses.courseEight.title',
    situations: [
      'Courses.courseEight.situations.situationOne',
      'Courses.courseEight.situations.situationTwo',
    ],
    contents: [
      'Courses.courseEight.contents.contentOne',
      'Courses.courseEight.contents.contentTwo',
      'Courses.courseEight.contents.contentThree',
    ],
  },
];

export const textAboutMe = [
  'AboutMe.textOne',
  'AboutMe.textTwo',
  'AboutMe.textThree',
  'AboutMe.textFour',
  'AboutMe.textFive',
  'AboutMe.textSix',
  'AboutMe.textSeven',
];

export const experiences: TExperience[] = [
  {
    icon: MdComputer,
    title: 'Experiences.experienceOne.title',
    responsibility: [
      'Experiences.experienceOne.responsibility.title',
      'Experiences.experienceOne.responsibility.date',
    ],
    functions: [
      'Experiences.experienceOne.functions.functionOne',
      'Experiences.experienceOne.functions.functionTwo',
      'Experiences.experienceOne.functions.functionThree',
    ],
  },
  {
    icon: FcManager,
    title: 'Experiences.experienceTwo.title',
    responsibility: [
      'Experiences.experienceTwo.responsibility.title',
      'Experiences.experienceTwo.responsibility.date',
    ],
    functions: [
      'Experiences.experienceTwo.functions.functionOne',
      'Experiences.experienceTwo.functions.functionTwo',
      'Experiences.experienceTwo.functions.functionThree',
      'Experiences.experienceTwo.functions.functionFour',
      'Experiences.experienceTwo.functions.functionFive',
    ],
  },
];

export const certificates: TCertificate[] = [
  {
    icon: trybeCertificateIcon,
    linkPdf: 'https://pdf.credential.net/szcmvf3o_1639172967011.pdf',
    linkCredentials:
      'https://www.credential.net/b41dae45-7403-476c-93a6-f11209ef4474#gs.iinvc3',
    title: 'Certificates.certificateFive.title',
    contents: [
      'Certificates.certificateFive.contentOne',
      'Certificates.certificateFive.contentTwo',
      'Certificates.certificateFive.contentThree',
      'Certificates.certificateFive.contentFour',
      'Certificates.certificateFive.contentFive',
    ],
  },
  {
    icon: computerScienceIcon,
    linkPdf: 'https://pdf.credential.net/dxnb9vel_1639171634335.pdf',
    linkCredentials:
      'https://www.credential.net/2c4b6b78-67b2-4a93-b11a-f7a09e0104d4#gs.iina37',
    title: 'Certificates.certificateFour.title',
    contents: [
      'Certificates.certificateFour.contentOne',
      'Certificates.certificateFour.contentTwo',
      'Certificates.certificateFour.contentThree',
      'Certificates.certificateFour.contentFour',
      'Certificates.certificateFour.contentFive',
      'Certificates.certificateFour.contentSix',
    ],
  },
  {
    icon: backEndIcon,
    linkPdf: 'https://pdf.credential.net/y08cw7hr_1638262792880.pdf',
    linkCredentials:
      'https://www.credential.net/fd1a5519-756f-48da-9d64-d449f0eaf0f7#gs.i1el8c',
    title: 'Certificates.certificateThree.title',
    contents: [
      'Certificates.certificateThree.contentOne',
      'Certificates.certificateThree.contentTwo',
      'Certificates.certificateThree.contentThree',
      'Certificates.certificateThree.contentFour',
      'Certificates.certificateThree.contentFive',
      'Certificates.certificateThree.contentSix',
      'Certificates.certificateThree.contentSeven',
      'Certificates.certificateThree.contentEight',
      'Certificates.certificateThree.contentNine',
      'Certificates.certificateThree.contentTen',
      'Certificates.certificateThree.contentEleven',
    ],
  },
  {
    icon: frontEndIcon,
    linkPdf: 'https://pdf.credential.net/ph0up1wh_1638262647732.pdf',
    linkCredentials:
      'https://www.credential.net/ac89d79b-ddd2-484a-87b0-4697f37ff20a#gs.i1ew0o',
    title: 'Certificates.certificateTwo.title',
    contents: [
      'Certificates.certificateTwo.contentOne',
      'Certificates.certificateTwo.contentTwo',
      'Certificates.certificateTwo.contentThree',
      'Certificates.certificateTwo.contentFour',
      'Certificates.certificateTwo.contentFive',
      'Certificates.certificateTwo.contentSix',
      'Certificates.certificateTwo.contentSeven',
    ],
  },
  {
    icon: fundamentalsIcon,
    linkPdf: 'https://pdf.credential.net/p8olee3w_1638262990129.pdf',
    linkCredentials:
      'https://www.credential.net/93d37420-a5d5-4525-9597-f9d4dce703f0#gs.i1ez6c',
    title: 'Certificates.certificateOne.title',
    contents: [
      'Certificates.certificateOne.contentOne',
      'Certificates.certificateOne.contentTwo',
      'Certificates.certificateOne.contentThree',
      'Certificates.certificateOne.contentFour',
      'Certificates.certificateOne.contentFive',
      'Certificates.certificateOne.contentSix',
      'Certificates.certificateOne.contentSeven',
      'Certificates.certificateOne.contentEight',
      'Certificates.certificateOne.contentNine',
    ],
  },
];
