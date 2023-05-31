import { FC } from 'react';

import { useTheme } from 'styled-components';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

// import { Carousel } from 'react-responsive-carousel';

// import { projects } from '~/utils/paths';

// import { Project } from './components/Project';

// import { Translator } from '../Translator';

import { Wrapper } from './styles';

import { Text } from '../Text';

export const Projects: FC = (): JSX.Element => {
  const { colors } = useTheme();
  return (
    <Wrapper>
      <Text
        title="Projets comming soon"
        size="3rem"
        color={colors.onBackgroundSecondary}
        weight="bold"
      />
      {/* <Carousel centerMode showStatus={false}>
        {projects.map((project) => (
          <Project project={project} />
        ))}
      </Carousel> */}
    </Wrapper>
  );
};
