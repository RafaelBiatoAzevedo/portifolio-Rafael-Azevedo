import { RiContactsFill } from 'react-icons/ri';
import { MdOutlineWork, MdComputer } from 'react-icons/md';
import { HiOutlineCode } from 'react-icons/hi';
import { GiPapers } from 'react-icons/gi';
import { FcManager } from 'react-icons/fc';
import { FaUniversity, FaGraduationCap } from 'react-icons/fa';
import { BsPersonBoundingBox } from 'react-icons/bs';

import { TNavs } from '~/types/TNavs';
import { TMainContent } from '~/types/TMainContent';
import { TExperience } from '~/types/TExperience';
import { TCertificate } from '~/types/TCertificate';
import { Formation } from '~/components/Formation';
import { Experiences } from '~/components/Experiences';
import { ContactMe } from '~/components/ContactMe';
import { Certificates } from '~/components/Certificates';
import { AboutMe } from '~/components/AboutMe';
import fundamentalsIcon from '~/assets/images/certificates/Fundamentos.png';
import frontEndIcon from '~/assets/images/certificates/FrontEnd.png';
import backEndIcon from '~/assets/images/certificates/BackEnd.png';

export const hardSkills = [
  'AsideLeft.hardSkills.hsOne',
  'AsideLeft.hardSkills.hsTwo',
  'AsideLeft.hardSkills.hsThree',
  'AsideLeft.hardSkills.hsFour',
  'AsideLeft.hardSkills.hsFive',
  'AsideLeft.hardSkills.hsSix',
  'AsideLeft.hardSkills.hsSeven',
  'AsideLeft.hardSkills.hsEight',
  'AsideLeft.hardSkills.hsNine',
  'AsideLeft.hardSkills.hsTen',
  'AsideLeft.hardSkills.hsEleven',
  'AsideLeft.hardSkills.hsTwelve',
];

export const softSkills = [
  'AsideLeft.softSkills.ssOne',
  'AsideLeft.softSkills.ssTwo',
  'AsideLeft.softSkills.ssThree',
  'AsideLeft.softSkills.ssFour',
  'AsideLeft.softSkills.ssFive',
  'AsideLeft.softSkills.ssSix',
  'AsideLeft.softSkills.ssSeven',
  'AsideLeft.softSkills.ssEight',
  'AsideLeft.softSkills.ssNine',
  'AsideLeft.softSkills.ssTen',
  'AsideLeft.softSkills.ssEleven',
];

export const navs: TNavs[] = [
  { title: 'MenuNav.navOne', name: 'projects' },
  { title: 'MenuNav.navTwo', name: 'formation' },
  { title: 'MenuNav.navThree', name: 'courses' },
  { title: 'MenuNav.navFour', name: 'certificates' },
  { title: 'MenuNav.navFive', name: 'experiences' },
  { title: 'MenuNav.navSix', name: 'aboutMe' },
  { title: 'MenuNav.navSeven', name: 'contactMe' },
];

export const mainContent: TMainContent = {
  projects: {
    title: 'Projects.title',
    icon: HiOutlineCode,
    component: AboutMe,
  },
  formation: {
    title: 'Formation.title',
    icon: FaUniversity,
    component: Formation,
  },
  courses: {
    title: 'Courses.title',
    icon: FaGraduationCap,
    component: AboutMe,
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
      'Certificates.certificateThree.contentTwelve',
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
