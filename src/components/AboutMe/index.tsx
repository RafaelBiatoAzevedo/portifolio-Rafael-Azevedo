import { FC } from 'react';

import { useTheme } from 'styled-components';

import { textAboutMe } from '~/utils/paths';

import { Wrapper, WrapperText } from './styles';

import { Translator } from '../Translator';
import { Text } from '../Text';

export const AboutMe: FC = (): JSX.Element => {
  const { colors, fontWeight } = useTheme();

  return (
    <Wrapper>
      <WrapperText>
        {textAboutMe.map((text) => (
          <Text
            key={text}
            title={<Translator path={text} />}
            color={colors.tertiary}
            size="1.5rem"
            weight={fontWeight.regular}
          />
        ))}
      </WrapperText>
    </Wrapper>
  );
};
