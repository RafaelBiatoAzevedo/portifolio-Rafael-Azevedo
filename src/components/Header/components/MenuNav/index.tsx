import { FC } from 'react';

import { navs } from '~/utils/paths';

import { StyleTheme } from './components/StyleTheme';
import { Nav } from './components/Nav';
import { Language } from './components/Language';

import { Wrapper, WrapperNavs } from './styles';

import { MenuHumburguer } from '../MenuHumburguer';

export const MenuNav: FC = (): JSX.Element => {
  return (
    <Wrapper>
      <WrapperNavs>
        {navs.map((nav) => (
          <Nav key={nav.title} button={nav} />
        ))}
      </WrapperNavs>
      <MenuHumburguer />
      <Language />
      <StyleTheme />
    </Wrapper>
  );
};
