import { FC } from 'react';

import { useTheme } from 'styled-components';

import pucIcon from '~/assets/images/courses/pucIcon.svg';

import {
  Wrapper,
  WrapperFormation,
  WrapperTitle,
  WrapperContent,
  WrapperInfo,
  Image,
} from './styles';

import { Translator } from '../Translator';
import { Text } from '../Text';

export const Formation: FC = (): JSX.Element => {
  const { colors, fontWeight } = useTheme();
  return (
    <Wrapper>
      <WrapperFormation>
        <WrapperTitle>
          <Text
            size="1.7rem"
            title={<Translator path="Formation.titleOne" />}
            weight={fontWeight.medium}
            color={colors.tertiary}
          />
        </WrapperTitle>
        <WrapperContent>
          <Image src={pucIcon} alt="logoPucCampinas" />
          <WrapperInfo>
            <Text
              title={<Translator path="Formation.titleTwo" />}
              color={colors.secondary}
              size="1.6rem"
              weight={fontWeight.medium}
            />
            <br />
            <Text
              title={<Translator path="Formation.situation.situationOne" />}
              color={colors.tertiary}
              size="1.3rem"
              paddingX="6px"
            />
            <Text
              title={<Translator path="Formation.situation.situationTwo" />}
              color={colors.tertiary}
              size="1.3rem"
              paddingX="6px"
            />
          </WrapperInfo>
        </WrapperContent>
      </WrapperFormation>
    </Wrapper>
  );
};
