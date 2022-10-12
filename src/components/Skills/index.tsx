import { createElement, FC, useMemo } from 'react';

import { IconType } from 'react-icons/lib';

import { useTheme } from 'styled-components';

import { Wrapper, WrapperText, WrapperTitle } from './styles';

import { Translator } from '../Translator';
import { Text } from '../Text';

interface ISKillsProps {
  title: string;
  iconOne: IconType;
  iconsTwo: IconType;
  pathMessage: string;
  skills: string[];
}

export const Skills: FC<ISKillsProps> = ({
  title,
  iconOne,
  iconsTwo,
  pathMessage,
  skills,
}): JSX.Element => {
  const { colors } = useTheme();

  const colorOnBackgroung = useMemo(() => {
    if (title === 'Hard Skills') return '#444444';
    return colors.primary;
  }, [title, colors.primary]);

  return (
    <Wrapper
      backgroudColor={title === 'Soft Skills' ? '#444444' : colors.primary}
    >
      <WrapperText>
        <WrapperTitle>
          <Text
            title={title}
            size="3rem"
            weight="600"
            color={colorOnBackgroung}
          />
          <div>
            {createElement(iconOne, {
              color: colorOnBackgroung,
            })}
            <Text title="+" size="3rem" color={colorOnBackgroung} />
            {createElement(iconsTwo, {
              color: colorOnBackgroung,
            })}
          </div>
        </WrapperTitle>
        <div>
          <Text
            title={<Translator path={pathMessage} />}
            size="1.6rem"
            color={colorOnBackgroung}
          />
        </div>
      </WrapperText>
      <div>
        {skills.map((skill) => (
          <div>
            <Text
              title={<Translator path={skill} />}
              size="1.6rem"
              weight="900"
            />
          </div>
        ))}
      </div>
    </Wrapper>
  );
};
