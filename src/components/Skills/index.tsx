import { createElement, FC, useMemo } from 'react';

import { IconType } from 'react-icons/lib';

import { useTheme } from 'styled-components';

import { ISkill } from '~/interfaces/ISkill';

import { LinkTech } from './components/LinkTech';

import {
  GridTechs,
  Link,
  TextMessage,
  Wrapper,
  WrapperSoftSkills,
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
  skills: ISkill[];
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
    if (title === 'Hard Skills') return colors.onBackgroundSecondary;
    return colors.onBackgroundPrimary;
  }, [title, colors]);

  return (
    <Wrapper
      backgroudColor={
        title === 'Hard Skills'
          ? colors.onBackgroundPrimary
          : colors.onBackgroundSecondary
      }
      isSoftSkills={title === 'Soft Skills'}
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
      </div>
      {title === 'Soft Skills' ? (
        <WrapperSoftSkills>
          {skills.map((skill) => (
            <div>
              <Text
                color={colors.onTertiary}
                title={<Translator path={skill.name} />}
                size="1.6rem"
                weight="900"
              />
            </div>
          ))}
        </WrapperSoftSkills>
      ) : (
        <GridTechs>
          {skills.map((skill) => (
            <LinkTech skill={skill} />
          ))}
        </GridTechs>
      )}
    </Wrapper>
  );
};
