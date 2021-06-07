import React from 'react';

import { TShortcut, SHORTCUTS } from '../lib/shortcuts';
import { withContext } from './context.hoc';
import {
  IContextProps,
  IDispatchAction,
  TContextDispatch,
} from './context.types';

/************************************/
/****** INTERFACES AND TYPES ********/
/************************************/

type TShortcutState = TShortcut[];

interface IShortcutAction extends IDispatchAction {
  type: 'add' | 'remove';
  value: TShortcut;
}

type TShortcutHandler = (
  state: TShortcutState,
  action: IShortcutAction,
) => TShortcutState;

interface IShortcutHandlers {
  add: TShortcutHandler;
  remove: TShortcutHandler;
}

/************************************/
/****** CONTEXT OBJECTS *************/
/************************************/

export const ShortcutsState = React.createContext<TShortcutState>(SHORTCUTS);

export const ShortcutsDispatch =
  React.createContext<TContextDispatch<IShortcutAction> | null>(null);

/************************************/
/*** SHORTCUTS CONTEXT HOOKS ********/
/************************************/

export const useShortcutsState = (): TShortcutState => {
  const context = React.useContext(ShortcutsState);

  if (!context) {
    throw new Error(
      'useShortcutsState must but called within ShortcutsContext',
    );
  }

  return context;
};

export const useShortcutsDispatch = (): React.Dispatch<IShortcutAction> => {
  const context = React.useContext(ShortcutsDispatch);

  if (!context) {
    throw new Error('useThemeDispatch must be called within ShortcutsContext');
  }

  return context;
};

/************************************/
/******* REDUCER AND HELPERS ********/
/************************************/

const addShortcut: TShortcutHandler = (
  state: TShortcutState,
  action: IShortcutAction,
): TShortcutState => {
  return [...state, action.value];
};
// to do remove by id
const removeShortcut: TShortcutHandler = (
  state: TShortcutState,
  action: IShortcutAction,
): TShortcutState => {
  return [...state, action.value];
};

const shortcutContextReducer: React.Reducer<TShortcutState, IShortcutAction> = (
  state: TShortcutState,
  action: IShortcutAction,
) => {
  const handlers: IShortcutHandlers = {
    add: addShortcut,
    remove: removeShortcut,
  };
  const handler: TShortcutHandler = handlers[action.type];

  return handler(state, action) || state;
};

/************************************/
/***** CONTEXT PROVIDER AND HOC *****/
/************************************/

export const ShortcutsContext: React.ComponentType<IContextProps> = ({
  children,
}: IContextProps) => {
  const [state, dispatch] = React.useReducer<
    React.Reducer<TShortcutState, IShortcutAction>
  >(shortcutContextReducer, SHORTCUTS);

  return (
    <ShortcutsState.Provider value={state}>
      <ShortcutsDispatch.Provider value={dispatch}>
        {children}
      </ShortcutsDispatch.Provider>
    </ShortcutsState.Provider>
  );
};

export const withShortcutsContext = withContext(ShortcutsContext);
