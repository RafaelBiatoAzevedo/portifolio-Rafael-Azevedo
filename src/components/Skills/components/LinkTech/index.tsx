import { FC } from 'react';

import { IconType } from 'react-icons';

import { Wrapper } from './styles';

interface ISkill {
  name: string;
  icon: IconType;
  href: string;
  colorIcon: string;
}

interface ILinkTech {
  skill: ISkill;
}

export const LinkTech: FC<ILinkTech> = ({ skill }): JSX.Element => {
  return <Wrapper />;
};
