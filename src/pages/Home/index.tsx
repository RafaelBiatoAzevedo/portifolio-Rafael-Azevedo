import { FC } from 'react';

import { MainContent } from '~/components/MainContent';
import { Header } from '~/components/Header';
import { Footer } from '~/components/Footer';
import { AsideLeft } from '~/components/AsideLeft';

import { Body, Main } from './styles';

export const Home: FC = (): JSX.Element => {
  return (
    <Body>
      <Header />
      <Main>
        <AsideLeft />
        <MainContent />
      </Main>
      <Footer />
    </Body>
  );
};
