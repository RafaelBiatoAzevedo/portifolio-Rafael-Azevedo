import { createElement, FC } from 'react';

import { useTheme } from 'styled-components';

import { TProject } from '~/types/TProject';
import { Translator } from '~/components/Translator';
import { Text } from '~/components/Text';

import {
  Wrapper,
  WrapperTitle,
  WrapperContent,
  WrapperInfo,
  Link,
  Image,
  WrapperTechonologies,
} from './styles';

type TProjectData = {
  project: TProject;
};

export const Project: FC<TProjectData> = ({ project }): JSX.Element => {
  const { colors, fontWeight } = useTheme();
  return (
    <Wrapper>
      <WrapperTitle>
        <Text
          size="1.7rem"
          title={<Translator path={project.title} />}
          weight={fontWeight.medium}
          color={colors.tertiary}
        />
      </WrapperTitle>
      <WrapperContent>
        <Link href={project.link} target="_blank">
          <Image src={project.icon} alt="project" />
          <Text
            color={colors.secondary}
            title={<Translator path="Projects.view" />}
          />
        </Link>
        <WrapperInfo>
          <Text
            title={<Translator path="Projects.titleOne" />}
            color={colors.secondary}
            size="1.6rem"
            weight={fontWeight.medium}
          />
          <br />
          <Text
            title={<Translator path={project.type} />}
            color={colors.tertiary}
            size="1.3rem"
            paddingX="6px"
          />
          <br />
          <Text
            title={<Translator path="Projects.titleTwo" />}
            color={colors.secondary}
            size="1.6rem"
            weight={fontWeight.medium}
          />
          <br />
          <Text
            title={<Translator path={project.status} />}
            color={colors.tertiary}
            size="1.3rem"
            paddingX="6px"
          />
          <br />
          <Text
            title={<Translator path="Projects.titleThree" />}
            color={colors.secondary}
            size="1.6rem"
            weight={fontWeight.medium}
          />
          <br />
          {project.datas.map((data) => (
            <Text
              key={data}
              title={<Translator path={data} />}
              color={colors.tertiary}
              size="1.3rem"
              paddingX="6px"
            />
          ))}
          <br />
          <Text
            title={<Translator path="Projects.titleFour" />}
            color={colors.secondary}
            size="1.6rem"
            weight={fontWeight.medium}
          />
          <br />
          <WrapperTechonologies>
            {project.technologies.map((techonology) => (
              <Text
                key={techonology.name}
                title=""
                color={techonology.color}
                size="1.5rem"
              >
                {createElement(techonology.icon)}
              </Text>
            ))}
          </WrapperTechonologies>
        </WrapperInfo>
      </WrapperContent>
    </Wrapper>
  );
};
