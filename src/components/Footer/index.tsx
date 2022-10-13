import { FC } from 'react';

import { useTheme } from 'styled-components';

import { Wrapper, WrapperTop } from './styles';

import { Translator } from '../Translator';
import { Text } from '../Text';

export const Footer: FC = (): JSX.Element => {
  const { colors, fontWeight } = useTheme();
  return (
    <Wrapper>
      <div id="footer" />
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
      </WrapperTop>
      <Text
        title="AD - AZEVEDO DIGITAL / CNPJ: 39.324.590/0001-43 / Incrição Municipal: 324439 / Rua Cleonice Ap. Cruz Thielle, 350 - Jd Alvorada - Mogi-Guaçu - SP"
        color={colors.tertiary}
      />
    </Wrapper>
  );
};
