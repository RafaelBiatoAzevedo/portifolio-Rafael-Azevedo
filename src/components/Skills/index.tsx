import { createElement, FC, useMemo } from 'react';

import { IconType } from 'react-icons/lib';

import { useTheme } from 'styled-components';

import {
  Link,
  Wrapper,
  WrapperLinks,
  WrapperText,
  WrapperTitle,
} from './styles';

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

  const onBackgroungColor = useMemo(() => {
    if (title === 'Soft Skills') return colors.onBackgroundSecondary;
    return colors.onBackgroundPrimary;
  }, [title, colors]);

  return (
    <Wrapper
      backgroudColor={
        title === 'Soft Skills'
          ? colors.onBackgroundPrimary
          : colors.onBackgroundSecondary
      }
    >
      <WrapperText>
        <WrapperTitle>
          <Text
            title={title}
            size="3rem"
            weight="600"
            color={onBackgroungColor}
          />
          <div>
            {createElement(iconOne, {
              color: onBackgroungColor,
            })}
            <Text title="+" size="3rem" color={onBackgroungColor} />
            {createElement(iconsTwo, {
              color: onBackgroungColor,
            })}
          </div>
        </WrapperTitle>
        <div>
          <Text
            title={<Translator path={pathMessage} />}
            size="1.6rem"
            color={onBackgroungColor}
          />
        </div>
        <WrapperLinks>
          {title === 'Hard Skills' && (
            <Link href="https://www.puc-campinas.edu.br/" target="blank">
              <Text
                title="PUC-CAMPINAS"
                color="#0e4194"
                size="1.5rem"
                weight="bold"
              />
            </Link>
          )}
          {title === 'Hard Skills' && (
            <Text
              title="-"
              size="1.5rem"
              color={onBackgroungColor}
              weight="bold"
            />
          )}
          <Link href="https://www.betrybe.com/" target="blank">
            <Text title="TRYBE" color="#1db702" weight="bold" size="1.5rem" />
          </Link>
        </WrapperLinks>
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
