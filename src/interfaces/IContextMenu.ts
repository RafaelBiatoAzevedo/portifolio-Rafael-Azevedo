import { TMenu } from '~/types/TMenu';

export interface IContextMenu {
  menuSelected: TMenu;
  changeMenuSelected: (menu: TMenu) => void;
}
