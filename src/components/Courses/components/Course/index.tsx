import { FC } from 'react';

import { GiCheckMark } from 'react-icons/gi';

import { useTheme } from 'styled-components';

import { TCourse } from '~/types/TCourse';
import { Translator } from '~/components/Translator';
import { Text } from '~/components/Text';

import {
  Wrapper,
  WrapperTitle,
  WrapperContent,
  WrapperInfo,
  Image,
} from './styles';

type TCourseData = {
  course: TCourse;
};

export const Course: FC<TCourseData> = ({ course }): JSX.Element => {
  const { colors, fontWeight } = useTheme();
  return (
    <Wrapper>
      <WrapperTitle>
        <Text
          size="1.7rem"
          title={<Translator path={course.title} />}
          weight={fontWeight.medium}
          color={colors.tertiary}
        />
      </WrapperTitle>
      <WrapperContent>
        <Image src={course.icon} alt="Course" />
        <WrapperInfo>
          <Text
            title={<Translator path="Courses.titleOne" />}
            color={colors.secondary}
            size="1.6rem"
            weight={fontWeight.medium}
          />
          <br />
          {course.situations.map((situation) => (
            <Text
              key={situation}
              title={<Translator path={situation} />}
              color={colors.tertiary}
              size="1.3rem"
              paddingX="6px"
            />
          ))}
          <br />
          <Text
            title={<Translator path="Courses.titleTwo" />}
            color={colors.secondary}
            size="1.6rem"
            weight={fontWeight.medium}
          />
          <br />
          {course.contents.map((content) => (
            <Text
              title=""
              color={colors.secondary}
              paddingX="6px"
              padddingY="2px"
            >
              <GiCheckMark />
              <Text
                key={content}
                title={<Translator path={content} />}
                color={colors.tertiary}
                size="1.3rem"
                paddingX="6px"
              />
            </Text>
          ))}
        </WrapperInfo>
      </WrapperContent>
    </Wrapper>
  );
};
