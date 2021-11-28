import { FC } from 'react';

import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

import { useTheme } from 'styled-components';

import { useStyleTheme } from '~/hooks/theme';
import { Text } from '~/components/Text';

import { Wrapper } from './styles';

export const StyleTheme: FC = (): JSX.Element => {
  const { colors } = useTheme();
  const { theme, changeTheme } = useStyleTheme();

  const handleChangeTheme = (): void => {
    changeTheme();
  };

  return (
    <Wrapper onClick={handleChangeTheme}>
      <Text title="" size="1.3rem" color={colors.secondary}>
        {theme === 'dark' ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
      </Text>
    </Wrapper>
  );
};
