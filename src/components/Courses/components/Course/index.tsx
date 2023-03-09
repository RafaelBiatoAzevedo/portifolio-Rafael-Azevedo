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
  WrapperImage,
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
          color={colors.onBackgroundSecondary}
        />
      </WrapperTitle>
      <WrapperContent>
        <WrapperImage>
          <Image src={course.icon} alt="Course" />
        </WrapperImage>
        <WrapperInfo>
          <Text
            title={<Translator path="Courses.titleOne" />}
            color={colors.secondary}
            size="1.6rem"
            weight={fontWeight.medium}
          />
          {course.situations.map((situation) => (
            <Text
              key={situation}
              title={<Translator path={situation} />}
              color={colors.onBackgroundSecondary}
              size="1.3rem"
              paddingX="6px"
            />
          ))}
          <Text
            title={<Translator path="Courses.titleTwo" />}
            color={colors.secondary}
            size="1.6rem"
            weight={fontWeight.medium}
          />
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
                color={colors.onBackgroundSecondary}
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
