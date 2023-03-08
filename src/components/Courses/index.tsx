import { FC } from 'react';

import { Carousel } from 'react-responsive-carousel';

import { useTheme } from 'styled-components';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { courses } from '~/utils/paths';

import { Course } from './components/Course';

import { Wrapper } from './styles';

import { Translator } from '../Translator';
import { Text } from '../Text';

export const Courses: FC = (): JSX.Element => {
  const { colors } = useTheme();
  return (
    <Wrapper>
      <Text
        title={<Translator path="Courses.title" />}
        size="3rem"
        color={colors.onBackgroundPrimary}
        weight="bold"
      />
      <Carousel centerMode showStatus={false}>
        {courses.map((course) => (
          <Course course={course} />
        ))}
      </Carousel>
    </Wrapper>
  );
};
