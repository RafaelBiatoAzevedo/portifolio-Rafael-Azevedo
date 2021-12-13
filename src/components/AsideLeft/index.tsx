import { FC, useState } from 'react';

import { MdTouchApp } from 'react-icons/md';

import { useTheme } from 'styled-components';

import { hardSkills, softSkills } from '~/utils/paths';

import {
  Wrapper,
  WrapperSkills,
  WrapperTitle,
  WrapperContent,
  WrapperResponsive,
  ButtonShow,
  WrapperShow,
  Icon,
} from './styles';

import { Translator } from '../Translator';
import { Text } from '../Text';

export const AsideLeft: FC = (): JSX.Element => {
  const { colors, fontWeight } = useTheme();
  const [isShowHS, setIsShowHS] = useState(false);
  const [isShowSS, setIsShowSS] = useState(false);

  const arrayHard: string[] = ['H', 'A', 'R', 'D'];
  const arraySoft: string[] = ['S', 'O', 'F', 'T'];
  const arraySkills: string[] = ['S', 'K', 'I', 'L', 'L', 'S'];

  const handleChangeShowHS = (): void => {
    setIsShowHS((prev) => !prev);
  };

  const handleChangeShowSS = (): void => {
    setIsShowSS((prev) => !prev);
  };

  return (
    <Wrapper>
      <WrapperResponsive>
        <ButtonShow onClick={handleChangeShowHS}>
          {arrayHard.map((letter) => (
            <Text
              title={letter}
              color={colors.primary}
              size="2.5rem"
              weight={fontWeight.bold}
            />
          ))}
          <br />
          <Icon>
            <MdTouchApp />
          </Icon>
          <br />
          {arraySkills.map((letter) => (
            <Text
              title={letter}
              color={colors.primary}
              size="2.5rem"
              weight={fontWeight.bold}
            />
          ))}
          <WrapperShow isShow={isShowHS} size="250px">
            {isShowHS &&
              hardSkills.map((hs) => (
                <Text
                  weight={fontWeight.medium}
                  color={colors.primary}
                  title={<Translator path={hs} />}
                  size="1.8rem"
                />
              ))}
          </WrapperShow>
        </ButtonShow>
        <ButtonShow onClick={handleChangeShowSS}>
          {arraySoft.map((letter) => (
            <Text
              title={letter}
              color={colors.primary}
              size="2.5rem"
              weight={fontWeight.bold}
            />
          ))}
          <br />
          <Icon>
            <MdTouchApp />
          </Icon>
          <br />
          {arraySkills.map((letter) => (
            <Text
              title={letter}
              color={colors.primary}
              size="2.5rem"
              weight={fontWeight.bold}
            />
          ))}
          <WrapperShow isShow={isShowSS} size="180px">
            {isShowSS &&
              softSkills.map((hs) => (
                <Text
                  weight={fontWeight.medium}
                  color={colors.primary}
                  title={<Translator path={hs} />}
                  size="1.8rem"
                />
              ))}
          </WrapperShow>
        </ButtonShow>
      </WrapperResponsive>
      <WrapperSkills>
        <WrapperTitle>
          <Text
            weight={fontWeight.bold}
            color={colors.primary}
            title={<Translator path="AsideLeft.hardSkills.title" />}
            size="1.5rem"
          />
        </WrapperTitle>
        {hardSkills.map((hs) => (
          <WrapperContent key={hs}>
            <Text
              weight={fontWeight.medium}
              color={colors.secondary}
              title={<Translator path={hs} />}
              size="1.2rem"
            />
          </WrapperContent>
        ))}
        <br />
        <WrapperTitle>
          <Text
            weight={fontWeight.bold}
            color={colors.primary}
            title={<Translator path="AsideLeft.softSkills.title" />}
            size="1.5rem"
          />
        </WrapperTitle>
        {softSkills.map((hs) => (
          <WrapperContent key={hs}>
            <Text
              weight={fontWeight.medium}
              color={colors.secondary}
              title={<Translator path={hs} />}
              size="1.2rem"
            />
          </WrapperContent>
        ))}
      </WrapperSkills>
    </Wrapper>
  );
};
