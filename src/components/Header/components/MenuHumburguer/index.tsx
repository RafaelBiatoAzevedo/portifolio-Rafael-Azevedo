import { FC, useState } from 'react';

import { MdKeyboardArrowRight } from 'react-icons/md';
import { HiOutlineViewList } from 'react-icons/hi';

import { useTheme } from 'styled-components';

import { navs } from '~/utils/paths';
import { TMenu } from '~/types/TMenu';
import { useMenu } from '~/hooks/menu';
import { Translator } from '~/components/Translator';
import { Text } from '~/components/Text';

import { Wrapper, Icon, WrapperDropDown, Option } from './styles';

export const MenuHumburguer: FC = (): JSX.Element => {
  const [isActive, setIsActive] = useState(false);
  const { menuSelected, changeMenuSelected } = useMenu();
  const { colors } = useTheme();

  const handleChangeMenu = (menu: TMenu): void => {
    changeMenuSelected(menu);
    setIsActive(false);
  };

  const handleChangeActive = (): void => {
    setIsActive((prev) => !prev);
  };

  return (
    <Wrapper>
      <Icon
        onClick={handleChangeActive}
        isActive={isActive}
        isButton
        color={colors.secondary}
        size="3rem"
      >
        <HiOutlineViewList />
      </Icon>
      <Icon color={colors.secondary} size="2rem">
        <MdKeyboardArrowRight />
      </Icon>
      <Text
        title={
          <Translator
            path={navs.find((nav) => nav.name === menuSelected)?.title || ''}
          />
        }
        color={colors.tertiary}
        size="2rem"
      />
      <WrapperDropDown isVisible={isActive}>
        {navs.map((nav) => (
          <Option onClick={() => handleChangeMenu(nav.name)}>
            <Text title={<Translator path={nav.title} />} size="2rem" />
          </Option>
        ))}
      </WrapperDropDown>
    </Wrapper>
  );
};
