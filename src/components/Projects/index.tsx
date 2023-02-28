import { FC } from 'react';

import { Carousel } from 'react-responsive-carousel';

import { useTheme } from 'styled-components';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import { projects } from '~/utils/paths';

import { Project } from './components/Project';

import { Wrapper } from './styles';

import { Translator } from '../Translator';
import { Text } from '../Text';

export const Projects: FC = (): JSX.Element => {
  const { colors } = useTheme();
  return (
    <Wrapper>
      <Text
        title={<Translator path="Projects.title" />}
        size="3rem"
        color={colors.onBackgroundSecondary}
        weight="bold"
      />
      <Carousel centerMode showStatus={false}>
        {projects.map((project) => (
          <Project project={project} />
        ))}
      </Carousel>
    </Wrapper>
  );
};
