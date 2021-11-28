import { FC } from 'react';
import { Image, Wrapper } from './styles';

import brazilFlag from '~/assets/images/flags/brazilFlag.png';
import usaFlag from '~/assets/images/flags/usaFlag.png';

export const Language: FC = () => {
  return (
    <Wrapper>
      <Image src={brazilFlag} alt="brazil"></Image>
      <Image src={usaFlag} alt="brazil"></Image>
    </Wrapper>
  );
};
