import { FC } from 'react';

import { Translator } from '~/components/Translator';

import { StyleTheme } from './components/StyleTheme';
import { Nav } from './components/Nav';
import { Language } from './components/Language';

import { Wrapper, WrapperNavs } from './styles';

export const MenuNav: FC = (): JSX.Element => {
  return (
    <Wrapper>
      <WrapperNavs>
        <Nav title={<Translator path="MenuNav.navOne" />} />
        <Nav title={<Translator path="MenuNav.navTwo" />} />
        <Nav title={<Translator path="MenuNav.navThree" />} />
        <Nav title={<Translator path="MenuNav.navFour" />} />
        <Nav title={<Translator path="MenuNav.navFive" />} />
        <Nav title={<Translator path="MenuNav.navSix" />} />
        <Nav title={<Translator path="MenuNav.navSeven" />} />
      </WrapperNavs>
      <Language />
      <StyleTheme />
    </Wrapper>
  );
};
