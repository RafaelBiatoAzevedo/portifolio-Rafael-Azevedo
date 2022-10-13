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
import { Footer } from '~/components/Footer';

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
          pathMessage="SoftSkills.message"
          skills={softSkills}
        />
      </ElementScroll>
      <Skills
        title="Hard Skills"
        iconOne={BsTools}
        iconsTwo={IoSettingsSharp}
        pathMessage="HardSkills.message"
        skills={hardSkills}
      />
      <ElementScroll name="projects">
        <Projects />
      </ElementScroll>
      <Footer />
    </Body>
  );
};
