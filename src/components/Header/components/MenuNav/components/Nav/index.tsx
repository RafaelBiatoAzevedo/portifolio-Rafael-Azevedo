import { FC, useState } from 'react';

import { useTheme } from 'styled-components';

import { TNavs } from '~/types/TNavs';
import { TMenu } from '~/types/TMenu';
import { useMenu } from '~/hooks/menu';
import { Translator } from '~/components/Translator';
import { Text } from '~/components/Text';

import { Wrapper } from './styles';

type TNav = {
  button: TNavs;
};

export const Nav: FC<TNav> = ({ button }): JSX.Element => {
  const { colors, fontWeight } = useTheme();
  const { menuSelected, changeMenuSelected } = useMenu();
  const [isHover, setIsHover] = useState(false);

  const handleChangeMenu = (menu: TMenu): void => {
    changeMenuSelected(menu);
  };

  return (
    <Wrapper
      onClick={() => handleChangeMenu(button.name)}
      isBorderBottom={button.name === menuSelected}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      <Text
        title={<Translator path={button.title} />}
        color={
          isHover
            ? colors.primary
            : button.name === menuSelected
            ? colors.tertiary
            : colors.secondary
        }
        size="1.3rem"
        weight={fontWeight.medium}
      />
    </Wrapper>
  );
};
