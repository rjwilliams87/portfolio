import React from 'react';

import { TShortcut, SHORTCUTS } from '../lib/shortcuts';

type TShortcutState = TShortcut[];

type TShortcutAction = {
  type: 'add' | 'remove';
  value: TShortcut;
};

type TShortcutHandler = (
  state: TShortcutState,
  action: TShortcutAction,
) => TShortcutState;

type TShortcutHandlers = {
  add: TShortcutHandler;
  remove: TShortcutHandler;
};

type TContextProps = {
  children: JSX.Element | JSX.Element[] | null | undefined;
};

export interface WithShortcutsContextProps extends TContextProps {
  displayName?: string;
}

export const ShortcutsState = React.createContext<TShortcutState>(SHORTCUTS);
export const ShortcutsDispatch =
  React.createContext<React.Dispatch<TShortcutAction> | null>(null);

export const useShortcutsState = (): TShortcutState => {
  const context = React.useContext(ShortcutsState);

  if (!context) {
    throw new Error(
      'useShortcutsState must but called within ShortcutsContext',
    );
  }

  return context;
};

export const useShortcutsDispatch = (): React.Dispatch<TShortcutAction> => {
  const context = React.useContext(ShortcutsDispatch);

  if (!context) {
    throw new Error('useThemeDispatch must be called within ShortcutsContext');
  }

  return context;
};

const addShortcut: TShortcutHandler = (
  state: TShortcutState,
  action: TShortcutAction,
): TShortcutState => {
  return [...state, action.value];
};
// to do remove by id
const removeShortcut: TShortcutHandler = (
  state: TShortcutState,
  action: TShortcutAction,
): TShortcutState => {
  return [...state, action.value];
};

const shortcutContextReducer: React.Reducer<TShortcutState, TShortcutAction> = (
  state: TShortcutState,
  action: TShortcutAction,
) => {
  const handlers: TShortcutHandlers = {
    add: addShortcut,
    remove: removeShortcut,
  };
  const handler: TShortcutHandler = handlers[action.type];

  return handler(state, action) || state;
};

export const ShortcutsContext = ({ children }: TContextProps) => {
  const [state, dispatch] = React.useReducer<
    React.Reducer<TShortcutState, TShortcutAction>
  >(shortcutContextReducer, SHORTCUTS);

  return (
    <ShortcutsState.Provider value={state}>
      <ShortcutsDispatch.Provider value={dispatch}>
        {children}
      </ShortcutsDispatch.Provider>
    </ShortcutsState.Provider>
  );
};

export const withShortcutsContext = <P extends WithShortcutsContextProps>(
  Component: React.ComponentType<P>,
): React.ComponentType<P> => {
  const displayName = Component?.displayName || 'Component';

  const ComponentWithTheme = (props: P) => {
    return (
      <ShortcutsContext>
        <Component {...(props as P)} />
      </ShortcutsContext>
    );
  };

  ComponentWithTheme.displayName = `withShortcuts${displayName}`;

  return ComponentWithTheme;
};
