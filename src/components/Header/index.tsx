import { FC } from 'react';

import picture from '~/assets/images/picture.png';
import logo from '~/assets/images/logodeveloper.png';

import { MenuNav } from './components/MenuNav';

import {
  WrapperHeader,
  WrapperCenter,
  WrapperLogo,
  WrapperText,
  WrapperImage,
  Image,
} from './styles';

export const Header: FC = () => {
  return (
    <WrapperHeader>
      <MenuNav />
      <WrapperCenter>
        <WrapperLogo>
          <Image src={logo} alt="logo" />
        </WrapperLogo>
        <WrapperText />
        <WrapperImage>
          <Image src={picture} alt="rafael" />
        </WrapperImage>
      </WrapperCenter>
    </WrapperHeader>
  );
};
