import React from 'react';

import { withContext } from './context.hoc';
import {
  IContextProps,
  IDispatchAction,
  IGenericReducerHandler,
  TContextDispatch,
} from './context.types';

/************************************/
/****** INTERFACES AND TYPES ********/
/************************************/

export interface IBaseFolder {
  id: string;
  name: string;
  type: 'email' | 'folder' | 'game' | 'media' | 'text';
  component: React.ComponentType;
}

export interface IFolderState extends IBaseFolder {
  active: boolean;
  open: boolean;
}

type TFoldersState = IFolderState[];

interface IGenericFolderAction extends IDispatchAction {
  type: 'open' | 'close' | 'show' | 'hide';
  value: any;
}

interface IBaseFolderAction extends IGenericFolderAction {
  type: 'close' | 'hide' | 'show';
  value: { id: string };
}

interface IOpenFolderAction extends IGenericFolderAction {
  type: 'open';
  value: IBaseFolder;
}

type TFoldersDispatchAction = IBaseFolderAction | IOpenFolderAction;

type TFoldersReducerHandler = IGenericReducerHandler<
  TFoldersState,
  TFoldersDispatchAction
>;

/************************************/
/****** CONTEXT OBJECTS *************/
/************************************/

export const FoldersState = React.createContext<TFoldersState>([]);

export const FolderDispatch =
  React.createContext<TContextDispatch<TFoldersDispatchAction> | null>(null);

/************************************/
/*** DOCUMENTS CONTEXT HOOKS ********/
/************************************/

export const useFoldersState = (): TFoldersState => {
  const context = React.useContext(FoldersState);

  if (!context) {
    throw new Error('useFoldersState must but called within FoldersContext');
  }

  return context;
};

export const useFolderDispatch = (): TContextDispatch<
  IOpenFolderAction | IBaseFolderAction
> => {
  const context = React.useContext(FolderDispatch);

  if (!context) {
    throw new Error('useFolderDispatch must be called within FoldersContext');
  }

  return context;
};

/************************************/
/******* REDUCER AND HELPERS ********/
/************************************/

const openFolder = (
  state: TFoldersState,
  action: IOpenFolderAction,
): TFoldersState => {
  if (state.find((doc) => doc.id === action.value.id)) return state;

  const documentState = { active: true, open: true }; // open might be superfluous
  const document = { ...documentState, ...action.value };
  return [...state, document];
};

const closeDocument = (
  state: TFoldersState,
  action: IBaseFolderAction,
): TFoldersState => state.filter((document) => document.id !== action.value.id);

const showFolder = (
  state: TFoldersState,
  action: IBaseFolderAction,
): TFoldersState =>
  state.map((document) => {
    if (document.id !== action.value.id) return document;
    document.active = true;
    return document;
  });

const hideFolder = (
  state: TFoldersState,
  action: IBaseFolderAction,
): TFoldersState =>
  state.map((document) => {
    if (document.id !== action.value.id) return document;
    document.active = false;
    return document;
  });

export const foldersContextReducer: React.Reducer<
  TFoldersState,
  TFoldersDispatchAction
> = (state: TFoldersState, action: TFoldersDispatchAction) => {
  const handlers = {
    open: openFolder as TFoldersReducerHandler,
    close: closeDocument as TFoldersReducerHandler,
    show: showFolder as TFoldersReducerHandler,
    hide: hideFolder as TFoldersReducerHandler,
  };
  const handler: TFoldersReducerHandler = handlers[action.type];
  return handler(state, action) || state;
};

/************************************/
/***** CONTEXT PROVIDER AND HOC *****/
/************************************/

export const FoldersContext: React.ComponentType<IContextProps> = ({
  children,
}: IContextProps) => {
  const [state, dispatch] = React.useReducer<
    React.Reducer<TFoldersState, TFoldersDispatchAction>
  >(foldersContextReducer, []);

  return (
    <FoldersState.Provider value={state}>
      <FolderDispatch.Provider value={dispatch}>
        {children}
      </FolderDispatch.Provider>
    </FoldersState.Provider>
  );
};

export const withFoldersContext = withContext(FoldersContext);
