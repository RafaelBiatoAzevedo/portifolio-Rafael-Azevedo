import { FC } from 'react';

import { useTheme } from 'styled-components';

import { certificates } from '~/utils/paths';

import { Certificate } from './components/Certificate';

import { Wrapper } from './styles';

import { Translator } from '../Translator';
import { Text } from '../Text';
import { Caroucel } from '../ Carousel';

export const Certificates: FC = (): JSX.Element => {
  const { colors } = useTheme();
  return (
    <Wrapper>
      <Text
        title={<Translator path="Certificates.title" />}
        size="3rem"
        color={colors.onBackgroundSecondary}
        weight="bold"
      />
      <Caroucel
        items={certificates}
        renderComponent={(item) => <Certificate certificate={item} />}
        numberElements={2}
      />
    </Wrapper>
  );
};
