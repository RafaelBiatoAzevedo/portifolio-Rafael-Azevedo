import { FC } from 'react';

import { certificates } from '~/utils/paths';

import { Certificate } from './components/Certificate';

import { Wrapper } from './styles';

export const Certificates: FC = (): JSX.Element => {
  return (
    <Wrapper>
      {certificates.map((certificate) => (
        <Certificate key={certificate.title} certificate={certificate} />
      ))}
    </Wrapper>
  );
};
