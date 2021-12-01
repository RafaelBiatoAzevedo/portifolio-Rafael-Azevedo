import { FC } from 'react';

import { courses } from '~/utils/paths';

import { Course } from './components/Course';

import { Wrapper } from './styles';

export const Courses: FC = (): JSX.Element => {
  return (
    <Wrapper>
      {courses.map((course) => (
        <Course key={course.title} course={course} />
      ))}
    </Wrapper>
  );
};
