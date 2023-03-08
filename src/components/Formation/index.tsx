import { FC } from 'react';

import { useTheme } from 'styled-components';

import pucIcon from '~/assets/images/courses/pucIcon.svg';

import {
  Wrapper,
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
      <WrapperTitle>
        <Text
          size="3rem"
          title={<Translator path="Formation.title" />}
          weight={fontWeight.medium}
          color={colors.tertiary}
        />
      </WrapperTitle>
      <WrapperContent>
        <Image src={pucIcon} alt="logoPucCampinas" />
        <WrapperInfo>
          <WrapperTitle>
            <Text
              size="1.7rem"
              title={<Translator path="Formation.titleOne" />}
              weight={fontWeight.medium}
              color={colors.tertiary}
            />
          </WrapperTitle>
          <div>
            <Text
              title={<Translator path="Formation.titleTwo" />}
              color={colors.secondary}
              size="1.5rem"
              weight={fontWeight.medium}
            />
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
          </div>
        </WrapperInfo>
      </WrapperContent>
    </Wrapper>
  );
};
