import { FC } from 'react';

import {
  SiHtml5,
  SiCss3,
  SiRedux,
  SiStyledcomponents,
  SiNativescript,
  SiTypescript,
} from 'react-icons/si';
import { FaJs, FaReact, FaNodeJs } from 'react-icons/fa';

import { useTheme } from 'styled-components';

import { Text } from '~/components/Text';

import { Wrapper, Link } from './styles';

export const LinksTechnologies: FC = (): JSX.Element => {
  const { colors } = useTheme();
  return (
    <Wrapper>
      <Link href="https://www.w3schools.com/html/" target="_blank">
        <Text title="" color={colors.html} size="2rem">
          <SiHtml5 />
        </Text>
      </Link>
      <Link href="https://www.w3schools.com/css/" target="_blank">
        <Text title="" color={colors.css} size="2rem">
          <SiCss3 />
        </Text>
      </Link>
      <Link href="https://www.javascript.com/" target="_blank">
        <Text title="" color={colors.js} size="2rem">
          <FaJs />
        </Text>
      </Link>
      <Link href="https://www.typescriptlang.org/" target="_blank">
        <Text title="" color={colors.ts} size="2rem">
          <SiTypescript />
        </Text>
      </Link>
      <Link href="https://pt-br.reactjs.org/" target="_blank">
        <Text title="" color={colors.react} size="2rem">
          <FaReact />
        </Text>
      </Link>
      <Link href="https://redux.js.org/" target="_blank">
        <Text title="" color={colors.redux} size="2rem">
          <SiRedux />
        </Text>
      </Link>
      <Link href="https://reactnative.dev/" target="_blank">
        <Text title="" color={colors.react} size="2rem">
          <SiNativescript />
        </Text>
      </Link>
      <Link href="https://nodejs.org/en/" target="_blank">
        <Text title="" color={colors.node} size="2rem">
          <FaNodeJs />
        </Text>
      </Link>
      <Link href="https://styled-components.com/" target="_blank">
        <Text title="" color={colors.styled} size="2.5rem">
          <SiStyledcomponents />
        </Text>
      </Link>
    </Wrapper>
  );
};
