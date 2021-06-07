import React from 'react';

import { withContext } from './context.hoc';
import {
  IContextProps,
  IDispatchAction,
  TContextDispatch,
} from './context.types';

/************************************/
/****** INTERFACES AND TYPES ********/
/************************************/

interface IMenuState {
  open: boolean;
}

interface IMenuDispatchAction extends IDispatchAction {
  type: 'open' | 'close';
}

interface IMenueReducerHandlers {
  open(): IMenuState;
  close(): IMenuState;
}

/************************************/
/****** CONTEXT OBJECTS *************/
/************************************/

const MenuStateContext = React.createContext<IMenuState>({
  open: false,
});

const MenuDispatchContext =
  React.createContext<TContextDispatch<IMenuDispatchAction> | null>(null);

/************************************/
/****** MENU CONTEXT HOOKS **********/
/************************************/

export const useMenuState = (): IMenuState => {
  const context = React.useContext(MenuStateContext);

  if (!context) {
    throw new Error('useMenuState must but called within MenuContext');
  }

  return context;
};

export const useMenuDispatch = (): React.Dispatch<IMenuDispatchAction> => {
  const context = React.useContext(MenuDispatchContext);

  if (!context) {
    throw new Error('useMenuDispatch must but called within MenuContext');
  }

  return context;
};

/************************************/
/******* REDUCER AND HELPERS ********/
/************************************/

const openMenu = (): IMenuState => ({
  open: true,
});
const closeMenu = (): IMenuState => ({
  open: false,
});

const menuContextReducer: React.Reducer<IMenuState, IMenuDispatchAction> = (
  state,
  action,
) => {
  const handlers: IMenueReducerHandlers = {
    open: openMenu,
    close: closeMenu,
  };
  const handler = handlers[action.type];

  return handler() || state;
};

/************************************/
/***** CONTEXT PROVIDER AND HOC *****/
/************************************/

export const MenuContext: React.ComponentType<IContextProps> = ({
  children,
}: IContextProps) => {
  const [state, dispatch] = React.useReducer<
    React.Reducer<IMenuState, IMenuDispatchAction>
  >(menuContextReducer, { open: false });

  return (
    <MenuStateContext.Provider value={state}>
      <MenuDispatchContext.Provider value={dispatch}>
        {children}
      </MenuDispatchContext.Provider>
    </MenuStateContext.Provider>
  );
};

export const withMenuContext = withContext(MenuContext);
