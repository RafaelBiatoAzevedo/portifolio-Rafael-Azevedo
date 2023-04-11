import { FC, createElement } from 'react';

import { useTheme } from 'styled-components';

import { ISkill } from '~/interfaces/ISkill';
import { Translator } from '~/components/Translator';
import { Text } from '~/components/Text';

import { Wrapper } from './styles';

interface ILinkTech {
  skill: ISkill;
}

export const LinkTech: FC<ILinkTech> = ({ skill }): JSX.Element => {
  const { colors } = useTheme();
  return (
    <Wrapper href={skill.href} target="Blank">
      {!!skill.icon &&
        createElement(skill.icon, { size: '2.5rem', color: skill.colorIcon })}
      <Text
        title={<Translator path={skill.name} />}
        color={colors.onBackgroundPrimary}
        weight="bold"
      >
        {}
      </Text>
    </Wrapper>
  );
};
