import { FC } from 'react';

import { useTheme } from 'styled-components';

import { projects } from '~/utils/paths';

import { Project } from './components/Project';

import { Wrapper } from './styles';

import { Translator } from '../Translator';
import { Text } from '../Text';
import { Caroucel } from '../ Carousel';

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
      <Caroucel
        items={projects}
        renderComponent={(item) => <Project project={item} />}
      />
      {/* {projects.map((project) => (
        <Project key={project.title} project={project} />
      ))} */}
    </Wrapper>
  );
};
