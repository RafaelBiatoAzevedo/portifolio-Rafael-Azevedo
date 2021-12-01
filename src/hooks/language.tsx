import {
  FC,
  createContext,
  useState,
  useContext,
  useEffect,
  useMemo,
} from 'react';

import { useTranslation } from 'react-i18next';

import { IContextLanguage } from '../interfaces/IContextLanguage';

import { TLanguage } from '../types/TLanguage';

const ContextLanguage = createContext<IContextLanguage>({} as IContextLanguage);

const LanguageProvider: FC = ({ children }) => {
  const [language, setLanguage] = useState<TLanguage>('en-US');
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  const changeLanguage = (type: TLanguage): void => {
    setLanguage(type);
  };

  const valueProvider = useMemo(
    () => ({ language, changeLanguage }),
    [language]
  );

  return (
    <ContextLanguage.Provider value={valueProvider}>
      {children}
    </ContextLanguage.Provider>
  );
};

function useLanguage(): IContextLanguage {
  return useContext(ContextLanguage);
}

export { LanguageProvider, useLanguage };
