import { FC } from 'react';

import { IoSettingsSharp } from 'react-icons/io5';
import { GiBrain } from 'react-icons/gi';
import { BsTools } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';

import { softSkills, hardSkills } from '~/utils/paths';
import { TopMenu } from '~/components/TopMenu';
import { Start } from '~/components/Start';
import { Skills } from '~/components/Skills';
import { MainContent } from '~/components/MainContent';
import { Footer } from '~/components/Footer';

import { Body, Main } from './styles';

export const Home: FC = (): JSX.Element => {
  return (
    <Body>
      <TopMenu />
      <Start />
      <Skills
        title="Soft Skills"
        iconOne={GiBrain}
        iconsTwo={AiFillHeart}
        message="Habilidades pessoais adquiridas ao longo da vida social e profissional, aperfeiçoadas no curso da TRYBE e praticadas diariamente."
        skills={softSkills}
      />
      <Skills
        title="Hard Skills"
        iconOne={BsTools}
        iconsTwo={IoSettingsSharp}
        message="Habilidades pessoais adquiridas ao longo da vida social e profissional, aperfeiçoadas no curso da TRYBE e praticadas diariamente."
        skills={hardSkills}
      />
      <Main>
        <MainContent />
      </Main>
      <Footer />
    </Body>
  );
};
