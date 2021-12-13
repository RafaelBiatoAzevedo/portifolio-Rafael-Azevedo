import { FC } from 'react';

import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

import { useTheme } from 'styled-components';

import { Text } from '~/components/Text';

import { Wrapper, Link } from './styles';

export const LinksSocial: FC = (): JSX.Element => {
  const { colors } = useTheme();
  return (
    <Wrapper>
      <Link
        href="https://www.linkedin.com/in/rafael-azevedo-530889195/"
        target="_blank"
      >
        <Text title="" color={colors.tertiary} size="2.5rem">
          <FaLinkedin />
        </Text>
      </Link>
      <Link href="https://github.com/RafaelBiatoAzevedo" target="_blank">
        <Text title="" color={colors.tertiary} size="2.5rem">
          <FaGithub />
        </Text>
      </Link>
      <Link href="https://www.instagram.com/?hl=pt-br" target="_blank">
        <Text title="" color={colors.tertiary} size="2.5rem">
          <FaInstagram />
        </Text>
      </Link>
    </Wrapper>
  );
};
