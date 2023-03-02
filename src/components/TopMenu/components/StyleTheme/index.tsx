import { FC } from 'react';

import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

import { useTheme } from 'styled-components';

import { useStyleTheme } from '~/hooks/theme';
import { Text } from '~/components/Text';

import { Wrapper, Button, WrapperIcon } from './styles';

export const StyleTheme: FC = (): JSX.Element => {
  const { colors } = useTheme();
  const { theme } = useStyleTheme();

  // const handleChangeTheme = (): void => {
  //   changeTheme();
  // };

  return (
    <Wrapper>
      <Button isOrder={theme === 'dark'} />
      <WrapperIcon>
        <Text
          title=""
          size="1.3rem"
          color={theme === 'dark' ? colors.sun : colors.moon}
        >
          {theme === 'dark' ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
        </Text>
      </WrapperIcon>
    </Wrapper>
  );
};
