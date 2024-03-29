import { createElement, FC } from 'react';

import { SiGithub } from 'react-icons/si';
import { MdPreview } from 'react-icons/md';

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
  WrapperImage,
  WrapperLinks,
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
          size="1.8rem"
          title={<Translator path={project.title} />}
          weight={fontWeight.medium}
          color={colors.tertiary}
        />
      </WrapperTitle>
      <WrapperContent>
        <WrapperImage>
          <Image src={project.icon} alt="project" />
          <WrapperLinks>
            <Link href={project.linkHomepage} target="_blank">
              <MdPreview size="2.5rem" color={colors.secondary} />
            </Link>
            <Link href={project.linkGihub} target="_blank">
              <SiGithub size="2rem" color={colors.secondary} />
            </Link>
          </WrapperLinks>
        </WrapperImage>
        <WrapperInfo>
          <div>
            <Text
              title={<Translator path="Projects.titleOne" />}
              color={colors.secondary}
              size="1.2rem"
              weight={fontWeight.medium}
            />
            <Text
              title={<Translator path={project.type} />}
              color={colors.tertiary}
              size="1.3rem"
              padddingY="2px"
              paddingX="8px"
            />
          </div>
          <div>
            <Text
              title={<Translator path="Projects.titleTwo" />}
              color={colors.secondary}
              size="1.2rem"
              weight={fontWeight.medium}
            />
            <Text
              title={<Translator path={project.status} />}
              color={colors.tertiary}
              size="1.3rem"
              padddingY="2px"
              paddingX="8px"
            />
          </div>
          <div>
            <Text
              title={<Translator path="Projects.titleThree" />}
              color={colors.secondary}
              size="1.2rem"
              weight={fontWeight.medium}
            />
            {project.datas.map((data) => (
              <Text
                key={data}
                title={<Translator path={data} />}
                color={colors.tertiary}
                size="1.3rem"
                padddingY="2px"
                paddingX="8px"
              />
            ))}
          </div>
          <div>
            <Text
              title={<Translator path="Projects.titleFour" />}
              color={colors.secondary}
              size="1.2rem"
              weight={fontWeight.medium}
            />
            <WrapperTechonologies>
              {project.technologies.map((techonology) => (
                <Text
                  key={techonology.name}
                  title=""
                  color={techonology.color}
                  size="1.5rem"
                >
                  {createElement(techonology.icon, { size: '2.5rem' })}
                </Text>
              ))}
            </WrapperTechonologies>
          </div>
        </WrapperInfo>
      </WrapperContent>
    </Wrapper>
  );
};
