import { FC } from 'react';

import { useTheme } from 'styled-components';

import { LinksSocial } from '~/components/LinksSocial';
import picture from '~/assets/images/picture.png';

import { Wrapper, WrapperText, WrapperImage } from './styles';

import { Translator } from '../Translator';
import { Text } from '../Text';

export const Start: FC = () => {
  const { colors, fontWeight } = useTheme();
  return (
    <Wrapper>
      <WrapperText>
        <div>
          <Text
            title={<Translator path="Header.salute" />}
            color={colors.onBackgroundPrimary}
            size="5rem"
            weight={fontWeight.medium}
          >
            ,
          </Text>
          <Text
            title={<Translator path="Header.Im" />}
            color={colors.onBackgroundPrimary}
            size="3.5rem"
            weight={fontWeight.medium}
          >
            <Text
              title="Rafael Azevedo"
              color={colors.secondary}
              size="3.5rem"
              weight={fontWeight.bold}
              mLeft="10px"
            />
            ,
          </Text>
          <Text
            title={<Translator path="Header.profession" />}
            color={colors.onBackgroundPrimary}
            size="3.5rem"
            weight={fontWeight.medium}
          />
        </div>
        <div>
          <Text
            title={<Translator path="Start.messageOne" />}
            color={colors.onBackgroundPrimary}
            size="2rem"
          />
          <Text
            title={<Translator path="Start.messageTwo" />}
            color={colors.onBackgroundPrimary}
            size="2rem"
          />
        </div>
      </WrapperText>
      <WrapperImage>
        <img src={picture} alt="rafael" />
        <LinksSocial />
      </WrapperImage>
    </Wrapper>
  );
};
