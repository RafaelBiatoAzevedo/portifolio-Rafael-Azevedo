import { FC } from 'react';

import { TopMenu } from '~/components/TopMenu';
import { Start } from '~/components/Start';
import { SoftSkills } from '~/components/SoftSkills';
import { MainContent } from '~/components/MainContent';
import { Footer } from '~/components/Footer';

import { Body, Main } from './styles';

export const Home: FC = (): JSX.Element => {
  return (
    <Body>
      <TopMenu />
      <Start />
      <SoftSkills />
      <Main>
        <MainContent />
      </Main>
      <Footer />
    </Body>
  );
};
