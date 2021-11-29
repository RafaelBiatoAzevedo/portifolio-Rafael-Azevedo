import { createElement, FC } from 'react';

import { Text } from '~/components/Text';

import { Wrapper } from './styles';

type TLink = {
  title: string;
  color: string;
  icon: any;
  href: string;
};

export const LinkContact: FC<TLink> = ({
  title,
  color,
  icon,
  href,
}): JSX.Element => {
  return (
    <Wrapper href={href} target="_blank">
      <Text title="" color={color} size="2.3rem">
        {createElement(icon)}
      </Text>
      <Text title={title} color={color} size="2rem" />
    </Wrapper>
  );
};
