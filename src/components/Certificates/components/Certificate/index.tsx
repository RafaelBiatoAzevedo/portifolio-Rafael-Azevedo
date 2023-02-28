import { FC } from 'react';

import { GiCheckMark } from 'react-icons/gi';
import { BsFileEarmarkPdfFill } from 'react-icons/bs';
import { AiFillSafetyCertificate } from 'react-icons/ai';

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
  WrapperLinks,
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
          size="1.8rem"
          title={<Translator path={certificate.title} />}
          weight={fontWeight.bold}
          color={colors.onBackgroundSecondary}
        />
      </WrapperTitle>
      <WrapperContent>
        <WrapperImage>
          <Image src={certificate.icon} alt="Certificate" />
          <WrapperLinks>
            <Link href={certificate.linkPdf} target="_blank">
              <BsFileEarmarkPdfFill size="2.5rem" color={colors.secondary} />
            </Link>
            <Link href={certificate.linkCredentials} target="_blank">
              <AiFillSafetyCertificate size="2.5rem" color={colors.secondary} />
            </Link>
          </WrapperLinks>
        </WrapperImage>
        <WrapperInfo>
          <Text
            title={<Translator path="Certificates.titleOne" />}
            color={colors.secondary}
            size="1.6rem"
            weight={fontWeight.medium}
          />
          {certificate.contents.map((content) => (
            <Text
              title=""
              color={colors.secondary}
              paddingX="6px"
              padddingY="4px"
            >
              <GiCheckMark />
              <Text
                key={content}
                title={<Translator path={content} />}
                color={colors.onBackgroundSecondary}
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
