import { FC } from 'react';

import { useTranslation } from 'react-i18next';

type TTranslator = {
  path: string;
};

export const Translator: FC<TTranslator> = ({ path }) => {
  const { t } = useTranslation();
  return t(path);
};
