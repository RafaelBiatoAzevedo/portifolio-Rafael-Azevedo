import { FC } from 'react';

import { projects } from '~/utils/paths';

import { Project } from './components/Project';

import { Wrapper } from './styles';

export const Projects: FC = (): JSX.Element => {
  return (
    <Wrapper>
      {projects.map((project) => (
        <Project key={project.title} project={project} />
      ))}
    </Wrapper>
  );
};
