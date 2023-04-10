import { FC } from 'react';

import { ISkill } from '~/interfaces/ISkill';

import { Wrapper } from './styles';

interface ILinkTech {
  skill: ISkill;
}

export const LinkTech: FC<ILinkTech> = ({ skill }): JSX.Element => {
  return <Wrapper />;
};
