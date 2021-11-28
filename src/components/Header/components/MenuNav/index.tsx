import { FC } from 'react';

import { Translator } from '~/components/Translator';

import { Nav } from './components/Nav';

import { Wrapper } from './styles';

export const MenuNav: FC = (): JSX.Element => {
  return (
    <Wrapper>
      <Nav title={<Translator path="MenuNav.navOne" />} />
      <Nav title={<Translator path="MenuNav.navTwo" />} />
      <Nav title={<Translator path="MenuNav.navThree" />} />
      <Nav title={<Translator path="MenuNav.navFour" />} />
      <Nav title={<Translator path="MenuNav.navFive" />} />
      <Nav title={<Translator path="MenuNav.navSix" />} />
      <Nav title={<Translator path="MenuNav.navSeven" />} />
    </Wrapper>
  );
};
