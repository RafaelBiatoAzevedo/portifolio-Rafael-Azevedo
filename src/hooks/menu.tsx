import {
  FC,
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from 'react';

import { TMenu } from '~/types/TMenu';
import { IContextMenu } from '~/interfaces/IContextMenu';

const ContextMenu = createContext<IContextMenu>({} as IContextMenu);

const MenuProvider: FC = ({ children }): JSX.Element => {
  const [menuSelected, setMenuSelected] = useState<TMenu>('start');

  const changeMenuSelected = useCallback((menu: TMenu) => {
    setMenuSelected(menu);
  }, []);

  const valueProvider = useMemo(
    () => ({
      menuSelected,
      changeMenuSelected,
    }),
    [menuSelected, changeMenuSelected]
  );
  return (
    <ContextMenu.Provider value={valueProvider}>
      {children}
    </ContextMenu.Provider>
  );
};

const useMenu = (): IContextMenu => {
  return useContext(ContextMenu);
};

export { MenuProvider, useMenu };
