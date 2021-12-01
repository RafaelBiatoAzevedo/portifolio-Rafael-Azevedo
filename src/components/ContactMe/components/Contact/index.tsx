import { createElement, FC } from 'react';

import { useTheme } from 'styled-components';

import { Text } from '~/components/Text';

import { Wrapper, WrapperText } from './styles';

type TContact = {
  icon: any;
  text: string[];
};

export const Contact: FC<TContact> = ({ icon, text }): JSX.Element => {
  const { colors } = useTheme();
  return (
    <Wrapper>
      <Text title="" color={colors.secondary} size="3rem">
        {createElement(icon)}
      </Text>
      <WrapperText>
        {text.map((item) => (
          <Text key={item} title={item} color={colors.tertiary} size="1.3rem" />
        ))}
      </WrapperText>
    </Wrapper>
  );
};
