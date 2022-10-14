import { FC } from 'react';

import { useTheme } from 'styled-components';

import { courses } from '~/utils/paths';

import { Course } from './components/Course';

import { Wrapper } from './styles';

import { Translator } from '../Translator';
import { Text } from '../Text';
import { Caroucel } from '../ Carousel';

export const Courses: FC = (): JSX.Element => {
  const { colors } = useTheme();
  return (
    <Wrapper>
      <Text
        title={<Translator path="Courses.title" />}
        size="3rem"
        color={colors.onBackgroundSecondary}
        weight="bold"
      />
      <Caroucel
        items={courses}
        renderComponent={(item) => <Course course={item} />}
        numberElements={2}
        backgroundButton="primary"
      />
    </Wrapper>
  );
};
