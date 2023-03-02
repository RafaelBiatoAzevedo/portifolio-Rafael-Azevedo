import { IconType } from 'react-icons/lib';

type TTechnology = {
  name: string;
  icon: IconType;
  color: string;
};

export type TProject = {
  icon: any;
  linkHomepage: string;
  linkGihub: string;
  title: string;
  type: string;
  status: string;
  datas: string[];
  technologies: TTechnology[];
};
