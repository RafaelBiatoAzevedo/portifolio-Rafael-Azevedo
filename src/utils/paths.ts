import { RiContactsFill } from 'react-icons/ri';
import { MdOutlineWork, MdOutlineDesignServices } from 'react-icons/md';
import { GiPapers } from 'react-icons/gi';
import { FaUniversity, FaGraduationCap } from 'react-icons/fa';
import { BsPersonBoundingBox } from 'react-icons/bs';

import { TNavs } from '~/types/TNavs';
import { TMainContent } from '~/types/TMainContent';
import { ContactMe } from '~/components/ContactMe';
import { AboutMe } from '~/components/AboutMe';

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
    icon: MdOutlineDesignServices,
    component: AboutMe,
  },
  formation: {
    title: 'Formation.title',
    icon: FaUniversity,
    component: AboutMe,
  },
  courses: {
    title: 'Courses.title',
    icon: FaGraduationCap,
    component: AboutMe,
  },
  certificates: {
    title: 'Certificates.title',
    icon: GiPapers,
    component: AboutMe,
  },
  experiences: {
    title: 'Experiences.title',
    icon: MdOutlineWork,
    component: AboutMe,
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
