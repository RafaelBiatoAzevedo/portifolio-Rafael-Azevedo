import { FC } from 'react';

import { Wrapper, Text } from './styles';

type TNav = {
  title: string | JSX.Element;
};

export const Nav: FC<TNav> = ({ title }): JSX.Element => {
  return (
    <Wrapper>
      <Text>{title}</Text>
    </Wrapper>
  );
};
