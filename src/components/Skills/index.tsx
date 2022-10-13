import { createElement, FC, useMemo } from 'react';

import { IconType } from 'react-icons/lib';

import { useTheme } from 'styled-components';

import {
  Link,
  TextMessage,
  Wrapper,
  WrapperText,
  WrapperTitle,
} from './styles';

import { Translator } from '../Translator';
import { Text } from '../Text';
import { LinksTechnologies } from '../LinksTechnologies';

interface ISKillsProps {
  title: string;
  iconOne: IconType;
  iconsTwo: IconType;
  pathMessageOne: string;
  pathMessageTwo: string;
  skills: string[];
}

export const Skills: FC<ISKillsProps> = ({
  title,
  iconOne,
  iconsTwo,
  pathMessageOne,
  pathMessageTwo,
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
      <div>
        <WrapperText>
          <WrapperTitle>
            <Text
              title={title}
              size="3.5rem"
              weight="600"
              color={onBackgroungColor}
            />
            <div>
              {createElement(iconOne, {
                color: onBackgroungColor,
              })}
              <Text title="+" size="3.5rem" color={onBackgroungColor} />
              {createElement(iconsTwo, {
                color: onBackgroungColor,
              })}
            </div>
          </WrapperTitle>
          <TextMessage textColor={onBackgroungColor}>
            <Translator path={pathMessageOne} />
            {title === 'Hard Skills' && (
              <Link
                href="https://www.puc-campinas.edu.br/"
                target="blank"
                textColor="#0e4194"
              >
                PUC-CAMPINAS
              </Link>
            )}
            {title === 'Hard Skills' && ','}
            <Link
              href="https://www.betrybe.com/"
              target="blank"
              textColor="#1db702"
            >
              TRYBE
            </Link>
            <Translator path={pathMessageTwo} />
          </TextMessage>
        </WrapperText>
        {title === 'Hard Skills' && <LinksTechnologies />}
      </div>
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
