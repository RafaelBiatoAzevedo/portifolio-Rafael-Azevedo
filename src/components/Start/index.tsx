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
            color={colors.secondary}
            size="4rem"
            weight={fontWeight.medium}
          >
            ,
          </Text>
          <Text
            title={<Translator path="Header.Im" />}
            color={colors.secondary}
            size="3.5rem"
            weight={fontWeight.medium}
          >
            <Text
              title="Rafael Azevedo"
              color={colors.tertiary}
              size="3.5rem"
              weight={fontWeight.bold}
              mLeft="10px"
            />
            ,
          </Text>
          <Text
            title={<Translator path="Header.profession" />}
            color={colors.secondary}
            size="3.5rem"
            weight={fontWeight.medium}
          />
        </div>
        <div>
          <Text
            title="Sou apaixonado por tecnologia e inovação."
            color={colors.tertiary}
            size="2rem"
          />
          <Text
            title="Minha satisfação é desenvolver softwares para facilitar a vida das pessoas."
            color={colors.tertiary}
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