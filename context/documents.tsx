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

export interface IBaseDocument {
  id: string;
  name: string;
  type: 'email' | 'folder' | 'game' | 'media' | 'text';
  component: JSX.Element;
}

export interface IDocumentState extends IBaseDocument {
  active: boolean;
  open: boolean;
}

type TDocumentsState = IDocumentState[];

interface IGenericDocumentAction extends IDispatchAction {
  type: 'open' | 'close' | 'show' | 'hide';
  value: any;
}

interface IBaseDocumentAction extends IGenericDocumentAction {
  type: 'hide' | 'show';
  value: { id: string };
}

interface IOpenDocumentAction extends IGenericDocumentAction {
  type: 'open' | 'close';
  value: IBaseDocument;
}

type TDocumentsDispatchAction = IBaseDocumentAction | IOpenDocumentAction;

type TDocumentsReducerHandler = IGenericReducerHandler<
  TDocumentsState,
  TDocumentsDispatchAction
>;

/************************************/
/****** CONTEXT OBJECTS *************/
/************************************/

export const DocumentsState = React.createContext<TDocumentsState>([]);

export const DocumentsDispatch =
  React.createContext<TContextDispatch<TDocumentsDispatchAction> | null>(null);

/************************************/
/*** DOCUMENTS CONTEXT HOOKS ********/
/************************************/

export const useDocumentsState = (): TDocumentsState => {
  const context = React.useContext(DocumentsState);

  if (!context) {
    throw new Error(
      'useDocumentsState must but called within DocumentsContext',
    );
  }

  return context;
};

export const useDocumentsDispatch = (): TContextDispatch<
  IOpenDocumentAction | IBaseDocumentAction
> => {
  const context = React.useContext(DocumentsDispatch);

  if (!context) {
    throw new Error(
      'useDocumentsDispatch must be called within DocumentsContext',
    );
  }

  return context;
};

/************************************/
/******* REDUCER AND HELPERS ********/
/************************************/

const openDocument = (
  state: TDocumentsState,
  action: IOpenDocumentAction,
): TDocumentsState => {
  if (state.find((doc) => doc.id === action.value.id)) return state;

  const documentState = { active: true, open: true }; // open might be superfluous
  const document = { ...documentState, ...action.value };
  return [...state, document];
};

const closeDocument = (
  state: TDocumentsState,
  action: IBaseDocumentAction,
): TDocumentsState =>
  state.filter((document) => document.id === action.value.id);

const showDocument = (
  state: TDocumentsState,
  action: IBaseDocumentAction,
): TDocumentsState =>
  state.map((document) => {
    if (document.id !== action.value.id) return document;
    document.active = true;
    return document;
  });

const hideDocument = (
  state: TDocumentsState,
  action: IBaseDocumentAction,
): TDocumentsState =>
  state.map((document) => {
    if (document.id !== action.value.id) return document;
    document.active = false;
    return document;
  });

export const documentsContextReducer: React.Reducer<
  TDocumentsState,
  TDocumentsDispatchAction
> = (state: TDocumentsState, action: TDocumentsDispatchAction) => {
  const handlers = {
    open: openDocument as TDocumentsReducerHandler,
    close: closeDocument as TDocumentsReducerHandler,
    show: showDocument as TDocumentsReducerHandler,
    hide: hideDocument as TDocumentsReducerHandler,
  };
  const handler: TDocumentsReducerHandler = handlers[action.type];
  return handler(state, action) || state;
};

/************************************/
/***** CONTEXT PROVIDER AND HOC *****/
/************************************/

export const DocumentsContext: React.ComponentType<IContextProps> = ({
  children,
}: IContextProps) => {
  const [state, dispatch] = React.useReducer<
    React.Reducer<TDocumentsState, TDocumentsDispatchAction>
  >(documentsContextReducer, []);

  return (
    <DocumentsState.Provider value={state}>
      <DocumentsDispatch.Provider value={dispatch}>
        {children}
      </DocumentsDispatch.Provider>
    </DocumentsState.Provider>
  );
};

export const withDocumentsContext = withContext(DocumentsContext);
