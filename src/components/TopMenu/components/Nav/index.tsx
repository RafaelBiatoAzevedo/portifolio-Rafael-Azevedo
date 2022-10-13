import { FC, useState } from 'react';

import { Link } from 'react-scroll';

import { useTheme } from 'styled-components';

import { TNav } from '~/types/TNav';
import { TMenu } from '~/types/TMenu';
import { useMenu } from '~/hooks/menu';
import { Translator } from '~/components/Translator';
import { Text } from '~/components/Text';

import { Wrapper } from './styles';

type TNavProps = {
  button: TNav;
};

export const Nav: FC<TNavProps> = ({ button }): JSX.Element => {
  const { colors, fontWeight } = useTheme();
  const { menuSelected, changeMenuSelected } = useMenu();
  const [isHover, setIsHover] = useState(false);

  const handleChangeMenu = (menu: TMenu): void => {
    changeMenuSelected(menu);
  };

  return (
    <Link className={button.name} to={button.name} spy smooth duration={1000}>
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
              ? colors.secondary
              : colors.onBackgroundTopMenu
          }
          size="1.1rem"
          weight={fontWeight.bold}
        />
      </Wrapper>
    </Link>
  );
};
