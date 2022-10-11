import { createElement, FC } from 'react';

import { IconType } from 'react-icons/lib';

import { useTheme } from 'styled-components';

import { Wrapper, WrapperText, WrapperTitle } from './styles';

import { Translator } from '../Translator';
import { Text } from '../Text';

interface ISKillsProps {
  title: string;
  iconOne: IconType;
  iconsTwo: IconType;
  message: string;
  skills: string[];
}

export const Skills: FC<ISKillsProps> = ({
  title,
  iconOne,
  iconsTwo,
  message,
  skills,
}): JSX.Element => {
  const { colors } = useTheme();
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
            color={title === 'Hard Skills' ? '#444444' : colors.primary}
          />
          <div>
            {createElement(iconOne, {
              color: title === 'Hard Skills' ? '#444444' : colors.primary,
            })}
            <Text
              title="+"
              size="3rem"
              color={title === 'Hard Skills' ? '#444444' : colors.primary}
            />
            {createElement(iconsTwo, {
              color: title === 'Hard Skills' ? '#444444' : colors.primary,
            })}
          </div>
        </WrapperTitle>
        <div>
          <Text
            title={message}
            size="1.6rem"
            color={title === 'Hard Skills' ? '#444444' : colors.primary}
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
