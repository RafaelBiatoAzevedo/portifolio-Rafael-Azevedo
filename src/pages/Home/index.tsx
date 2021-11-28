import { FC } from 'react';

import { Header } from '~/components/Header';

import { Wrapper } from './styles';

export const Home: FC = (): JSX.Element => {
  return (
    <Wrapper>
      <Header />
    </Wrapper>
  );
};
