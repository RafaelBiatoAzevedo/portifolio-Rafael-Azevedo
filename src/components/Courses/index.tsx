import { FC } from 'react';

import { Carousel } from 'react-responsive-carousel';

import { useTheme } from 'styled-components';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { certificates } from '~/utils/paths';

import { Certificate } from '../Certificates/components/Certificate';

import { Wrapper } from './styles';

import { Translator } from '../Translator';
import { Text } from '../Text';

export const Courses: FC = (): JSX.Element => {
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
