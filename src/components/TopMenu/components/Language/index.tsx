import { FC } from 'react';

import { TLanguage } from '~/types/TLanguage';
import { useLanguage } from '~/hooks/language';
import usaFlag from '~/assets/images/flags/usaFlag.jpg';
import brazilFlag from '~/assets/images/flags/brazilFlag.jpg';

import { Image, Wrapper } from './styles';

export const Language: FC = () => {
  const { language, changeLanguage } = useLanguage();

  const handleChangeLanguage = (lang: TLanguage): void => {
    changeLanguage(lang);
  };

  return (
    <Wrapper>
      <Image
        onClick={() => handleChangeLanguage('pt-BR')}
        isActive={language === 'pt-BR'}
        src={brazilFlag}
        alt="brazilFlag"
      />
      <Image
        onClick={() => handleChangeLanguage('en-US')}
        isActive={language === 'en-US'}
        src={usaFlag}
        alt="usaFlag"
      />
    </Wrapper>
  );
};
