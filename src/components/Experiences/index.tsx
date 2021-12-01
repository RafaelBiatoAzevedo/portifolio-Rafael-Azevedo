import { FC } from 'react';

import { experiences } from '~/utils/paths';

import { Experience } from './components/Experience';

import { Wrapper } from './styles';

export const Experiences: FC = (): JSX.Element => {
  return (
    <Wrapper>
      {experiences.map((experience) => (
        <Experience key={experience.title} experience={experience} />
      ))}
    </Wrapper>
  );
};
