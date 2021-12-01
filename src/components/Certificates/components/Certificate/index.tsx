import { FC } from 'react';

import { GiCheckMark } from 'react-icons/gi';

import { useTheme } from 'styled-components';

import { TCertificate } from '~/types/TCertificate';
import { Translator } from '~/components/Translator';
import { Text } from '~/components/Text';

import {
  Wrapper,
  WrapperImage,
  WrapperTitle,
  WrapperContent,
  WrapperInfo,
  Image,
  Link,
} from './styles';

type TCertificateData = {
  certificate: TCertificate;
};

export const Certificate: FC<TCertificateData> = ({
  certificate,
}): JSX.Element => {
  const { colors, fontWeight } = useTheme();
  return (
    <Wrapper>
      <WrapperTitle>
        <Text
          size="1.7rem"
          title={<Translator path={certificate.title} />}
          weight={fontWeight.medium}
          color={colors.tertiary}
        />
      </WrapperTitle>
      <WrapperContent>
        <WrapperImage>
          <Image src={certificate.icon} alt="Certificate" />
          <Link href={certificate.linkPdf} target="_blank">
            <Text
              color={colors.secondary}
              title={<Translator path="Certificates.view" />}
              weight={fontWeight.medium}
              size="1.1rem"
            />
          </Link>
          <Link href={certificate.linkCredentials} target="_blank">
            <Text
              color={colors.secondary}
              title={<Translator path="Certificates.credentials" />}
              weight={fontWeight.medium}
              size="1.1rem"
            />
          </Link>
        </WrapperImage>
        <WrapperInfo>
          <Text
            title={<Translator path="Certificates.titleOne" />}
            color={colors.secondary}
            size="1.6rem"
            weight={fontWeight.medium}
          />
          <br />
          {certificate.contents.map((content) => (
            <Text
              title=""
              color={colors.secondary}
              paddingX="6px"
              padddingY="2px"
            >
              <GiCheckMark />
              <Text
                key={content}
                title={<Translator path={content} />}
                color={colors.tertiary}
                size="1.3rem"
                paddingX="6px"
              />
            </Text>
          ))}
        </WrapperInfo>
      </WrapperContent>
    </Wrapper>
  );
};
