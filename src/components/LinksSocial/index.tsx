import { FC } from 'react';

import { FaInstagram, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

import { useTheme } from 'styled-components';

import { Wrapper, Link } from './styles';

export const LinksSocial: FC = (): JSX.Element => {
  const { colors } = useTheme();
  return (
    <Wrapper>
      <Link
        href="https://www.linkedin.com/in/rafael-azevedo-530889195/"
        target="_blank"
      >
        <FaLinkedin color={colors.tertiary} size="3rem" />
      </Link>
      <Link href="https://github.com/RafaelBiatoAzevedo" target="_blank">
        <FaGithub color={colors.tertiary} size="3rem" />
      </Link>
      <Link href="https://www.instagram.com/?hl=pt-br" target="_blank">
        <FaInstagram color={colors.tertiary} size="3rem" />
      </Link>
      <Link href="https://wa.me/19997426983" target="_blank">
        <FaWhatsapp color={colors.tertiary} size="3rem" />
      </Link>
    </Wrapper>
  );
};
