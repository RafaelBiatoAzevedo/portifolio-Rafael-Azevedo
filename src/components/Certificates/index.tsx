import { FC } from 'react';

import { useTheme } from 'styled-components';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { certificates } from '~/utils/paths';

import { Certificate } from './components/Certificate';

import { Wrapper } from './styles';

import { Translator } from '../Translator';
import { Text } from '../Text';

export const Certificates: FC = (): JSX.Element => {
  const { colors } = useTheme();
  return (
    <Wrapper>
      <Text
        title={<Translator path="Certificates.title" />}
        size="3rem"
        color={colors.onBackgroundPrimary}
        weight="bold"
      />
      <Carousel centerMode showStatus={false}>
        {certificates.map((certificate) => (
          <Certificate certificate={certificate} />
        ))}
      </Carousel>
    </Wrapper>
  );
};
