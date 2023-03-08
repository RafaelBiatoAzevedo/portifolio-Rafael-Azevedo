import { FC } from 'react';

import { Element as ElementScroll } from 'react-scroll';
import { IoSettingsSharp } from 'react-icons/io5';
import { GiBrain } from 'react-icons/gi';
import { BsTools } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';

import { softSkills, hardSkills } from '~/utils/paths';
import { TopMenu } from '~/components/TopMenu';
import { Start } from '~/components/Start';
import { Skills } from '~/components/Skills';
import { Projects } from '~/components/Projects';
import { Formation } from '~/components/Formation';
import { Footer } from '~/components/Footer';
import { Courses } from '~/components/Courses';
import { Certificates } from '~/components/Certificates';

import { Body } from './styles';

export const Home: FC = (): JSX.Element => {
  return (
    <Body>
      <TopMenu />
      <ElementScroll name="start">
        <Start />
      </ElementScroll>
      <ElementScroll name="skills">
        <Skills
          title="Soft Skills"
          iconOne={GiBrain}
          iconsTwo={AiFillHeart}
          pathMessageOne="SoftSkills.messageOne"
          pathMessageTwo="SoftSkills.messageTwo"
          skills={softSkills}
        />
      </ElementScroll>
      <Skills
        title="Hard Skills"
        iconOne={BsTools}
        iconsTwo={IoSettingsSharp}
        pathMessageOne="HardSkills.messageOne"
        pathMessageTwo="HardSkills.messageTwo"
        skills={hardSkills}
      />
      <ElementScroll name="projects">
        <Projects />
      </ElementScroll>
      <ElementScroll name="formation">
        <Formation />
      </ElementScroll>
      <ElementScroll name="courses">
        <Courses />
      </ElementScroll>
      <ElementScroll name="certificates">
        <Certificates />
      </ElementScroll>
      <ElementScroll name="contactMe">
        <Footer />
      </ElementScroll>
    </Body>
  );
};
