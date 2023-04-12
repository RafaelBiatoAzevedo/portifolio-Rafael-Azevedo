import { FC } from 'react';

import { useTheme } from 'styled-components';

import { WarpperBottom, Wrapper, WrapperTop } from './styles';

import { Translator } from '../Translator';
import { Text } from '../Text';
import { LinksSocial } from '../LinksSocial';

export const Footer: FC = (): JSX.Element => {
  const { colors, fontWeight } = useTheme();
  return (
    <Wrapper>
      <WrapperTop>
        <Text
          title="AZEVEDO DIGITAL"
          color={colors.secondary}
          size="2rem"
          weight={fontWeight.bold}
        />
        <Text
          title={<Translator path="Footer.message" />}
          color={colors.tertiary}
          size="1.4rem"
        />
        <LinksSocial />
      </WrapperTop>
      <WarpperBottom>
        <Text
          title="AZEVEDO DIGITAL / CNPJ: 39.324.590/0001-43 / Incrição Municipal: 324439 / Rua Cleonice Ap. Cruz Thielle, 350 - Jd Alvorada - Mogi-Guaçu - SP"
          color={colors.tertiary}
        />
        <Text
          title="E-mail: rafaelazevedo321@gmail.com - azevedodigital321@gmail.com / Cel: (19) 99742-6983"
          color={colors.tertiary}
        />
      </WarpperBottom>
    </Wrapper>
  );
};
