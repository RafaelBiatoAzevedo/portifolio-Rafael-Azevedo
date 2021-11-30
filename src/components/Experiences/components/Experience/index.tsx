import { createElement, FC } from 'react';

import { useTheme } from 'styled-components';

import { TExperience } from '~/types/TExperience';
import { Translator } from '~/components/Translator';
import { Text } from '~/components/Text';

import { Wrapper, WrapperTitle, WrapperContent, WrapperInfo } from './styles';

type TExperienceData = {
  experience: TExperience;
};

export const Experience: FC<TExperienceData> = ({
  experience,
}): JSX.Element => {
  const { colors, fontWeight } = useTheme();
  return (
    <Wrapper>
      <WrapperTitle>
        <Text
          size="1.7rem"
          title={<Translator path={experience.title} />}
          weight={fontWeight.medium}
          color={colors.tertiary}
        />
      </WrapperTitle>
      <WrapperContent>
        <Text size="10rem" color={colors.tertiary} title="">
          {createElement(experience.icon)}
        </Text>
        <WrapperInfo>
          <Text
            title={<Translator path="Experiences.titleOne" />}
            color={colors.secondary}
            size="1.6rem"
            weight={fontWeight.medium}
          />
          <br />
          {experience.responsibility.map((resp) => (
            <Text
              key={resp}
              title={<Translator path={resp} />}
              color={colors.tertiary}
              size="1.3rem"
              paddingX="6px"
            />
          ))}
          <br />
          <Text
            title={<Translator path="Experiences.titleTwo" />}
            color={colors.secondary}
            size="1.6rem"
            weight={fontWeight.medium}
          />
          <br />
          {experience.functions.map((func) => (
            <Text
              key={func}
              title={<Translator path={func} />}
              color={colors.tertiary}
              size="1.3rem"
              paddingX="6px"
            />
          ))}
        </WrapperInfo>
      </WrapperContent>
    </Wrapper>
  );
};
