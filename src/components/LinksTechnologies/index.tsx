import { FC } from 'react';

import {
  SiHtml5,
  SiCss3,
  SiRedux,
  SiStyledcomponents,
  SiNativescript,
  SiTypescript,
  SiVuetify,
  SiMongodb,
  SiMysql,
  SiPython,
  SiJava,
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
        <Text title="" color={colors.html} size="3rem">
          <SiHtml5 />
        </Text>
      </Link>
      <Link href="https://www.w3schools.com/css/" target="_blank">
        <Text title="" color={colors.css} size="3rem">
          <SiCss3 />
        </Text>
      </Link>
      <Link href="https://www.javascript.com/" target="_blank">
        <Text title="" color={colors.java} size="3rem">
          <SiJava />
        </Text>
      </Link>
      <Link href="https://www.python.org/" target="_blank">
        <Text title="" color={colors.python} size="3rem">
          <SiPython />
        </Text>
      </Link>
      <Link href="https://www.javascript.com/" target="_blank">
        <Text title="" color={colors.js} size="3rem">
          <FaJs />
        </Text>
      </Link>
      <Link href="https://www.typescriptlang.org/" target="_blank">
        <Text title="" color={colors.ts} size="3rem">
          <SiTypescript />
        </Text>
      </Link>
      <Link href="https://pt-br.reactjs.org/" target="_blank">
        <Text title="" color={colors.react} size="3rem">
          <FaReact />
        </Text>
      </Link>
      <Link href="https://vuejs.org/guide/introduction.html" target="_blank">
        <Text title="" color={colors.vue} size="3rem">
          <SiVuetify />
        </Text>
      </Link>
      <Link href="https://reactnative.dev/" target="_blank">
        <Text title="" color={colors.react} size="3rem">
          <SiNativescript />
        </Text>
      </Link>
      <Link href="https://redux.js.org/" target="_blank">
        <Text title="" color={colors.redux} size="3rem">
          <SiRedux />
        </Text>
      </Link>
      <Link href="https://nodejs.org/en/" target="_blank">
        <Text title="" color={colors.node} size="3rem">
          <FaNodeJs />
        </Text>
      </Link>
      <Link href="https://styled-components.com/" target="_blank">
        <Text title="" color={colors.styled} size="3rem">
          <SiStyledcomponents />
        </Text>
      </Link>
      <Link href="https://www.mongodb.com/" target="_blank">
        <Text title="" color={colors.mongo} size="3rem">
          <SiMongodb />
        </Text>
      </Link>
      <Link href="https://www.mysql.com/" target="_blank">
        <Text title="" color={colors.mysql} size="3rem">
          <SiMysql />
        </Text>
      </Link>
    </Wrapper>
  );
};
