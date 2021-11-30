import { FC } from 'react';

import { useTheme } from 'styled-components';

import { hardSkills, softSkills } from '~/utils/paths';

import { Wrapper, WrapperTitle, WrapperContent } from './styles';

import { Translator } from '../Translator';
import { Text } from '../Text';

export const AsideLeft: FC = (): JSX.Element => {
  const { colors, fontWeight } = useTheme();
  return (
    <Wrapper>
      <WrapperTitle>
        <Text
          weight={fontWeight.bold}
          color={colors.primary}
          title={<Translator path="AsideLeft.hardSkills.title" />}
          size="1.5rem"
        />
      </WrapperTitle>
      {hardSkills.map((hs) => (
        <WrapperContent key={hs}>
          <Text
            weight={fontWeight.medium}
            color={colors.secondary}
            title={<Translator path={hs} />}
            size="1.2rem"
          />
        </WrapperContent>
      ))}
      <br />
      <WrapperTitle>
        <Text
          weight={fontWeight.bold}
          color={colors.primary}
          title={<Translator path="AsideLeft.softSkills.title" />}
          size="1.5rem"
        />
      </WrapperTitle>
      {softSkills.map((hs) => (
        <WrapperContent key={hs}>
          <Text
            weight={fontWeight.medium}
            color={colors.secondary}
            title={<Translator path={hs} />}
            size="1.2rem"
          />
        </WrapperContent>
      ))}
    </Wrapper>
  );
};
