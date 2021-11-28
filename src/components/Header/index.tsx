import { FC } from 'react';

import { useTheme } from 'styled-components';

import picture from '~/assets/images/picture.png';
import logo from '~/assets/images/logoAzevedoDigital.png';

import { MenuNav } from './components/MenuNav';

import {
  WrapperHeader,
  WrapperCenter,
  WrapperLogo,
  WrapperText,
  WrapperPicture,
  Image,
} from './styles';

import { Translator } from '../Translator';
import { Text } from '../Text';

export const Header: FC = () => {
  const { colors, fontWeight } = useTheme();
  return (
    <WrapperHeader>
      <MenuNav />
      <WrapperCenter>
        <WrapperLogo>
          <Image src={logo} alt="logo" />
        </WrapperLogo>
        <WrapperText>
          <Text
            title={<Translator path="Header.salute" />}
            color={colors.secondary}
            size="2rem"
            weight={fontWeight.medium}
          >
            ,
          </Text>
          <Text
            title={<Translator path="Header.Im" />}
            color={colors.secondary}
            size="2rem"
            weight={fontWeight.medium}
          >
            <Text
              title="Rafael Azevedo"
              color={colors.text}
              size="2rem"
              weight={fontWeight.bold}
              mLeft="10px"
            />
            ,
          </Text>
          <Text
            title={<Translator path="Header.profession" />}
            color={colors.secondary}
            size="2rem"
            weight={fontWeight.medium}
          />
        </WrapperText>
        <WrapperPicture>
          <Image src={picture} alt="rafael" isBorderRadius />
        </WrapperPicture>
      </WrapperCenter>
    </WrapperHeader>
  );
};
