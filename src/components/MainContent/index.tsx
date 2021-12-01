import { createElement, FC } from 'react';

import { useTheme } from 'styled-components';

import { mainContent } from '~/utils/paths';
import { useMenu } from '~/hooks/menu';

import { Wrapper, WrapperTitle, HrDivisor } from './styles';

import { Translator } from '../Translator';
import { Text } from '../Text';

export const MainContent: FC = (): JSX.Element => {
  const { menuSelected } = useMenu();
  const { colors, fontWeight } = useTheme();

  return (
    <Wrapper>
      <WrapperTitle>
        <Text title="" color={colors.tertiary} size="2rem">
          {createElement(mainContent[menuSelected].icon)}
        </Text>
        <Text
          title={<Translator path={mainContent[menuSelected].title} />}
          color={colors.tertiary}
          size="2rem"
          weight={fontWeight.medium}
        />
      </WrapperTitle>
      <HrDivisor />
      {createElement(mainContent[menuSelected].component)}
    </Wrapper>
  );
};
