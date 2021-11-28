import { FC } from 'react';

import { useTheme } from 'styled-components';

import { Text } from '~/components/Text';

import { Wrapper } from './styles';

type TNav = {
  title: string | JSX.Element;
};

export const Nav: FC<TNav> = ({ title }): JSX.Element => {
  const { colors, fontWeight } = useTheme();

  return (
    <Wrapper>
      <Text
        title={title}
        color={colors.secondary}
        size="1.3rem"
        weight={fontWeight.medium}
      />
    </Wrapper>
  );
};
