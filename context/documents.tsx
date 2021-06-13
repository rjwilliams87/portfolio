import React from 'react';

import { IDispatchAction, TContextDispatch } from './context.types';
/**
 * A modal can be of different types
 * Each type determines what component is rendered in the UI
 * a folder modal - unique but can be copied / can be opened multiple times
 * a word doc modal - unique
 * a game modal - unique
 * a video modal - unique ?? (may need)
 * a picture modal - unique ?? (may need)
 * a gif modal - unique ?? (may need)
 */

/**
 * No folder can be opened twice but folder copies can be open a the same time
 * No other modal type can be open at the same time
 */

/**
 * when a doc is opened add the doc to list of open modals
 * a modal has an active and an open state
 * active = tab is in the lower menu
 * open = modal is visible on the screen
 */

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

interface IOpenDocumentAction extends IGenericDocumentAction {
  type: 'open' | 'close';
  value: IBaseDocument;
}

interface IShowDocumentAction extends IGenericDocumentAction {
  type: 'hide' | 'show';
  value: { id: string };
}

type TDocumentsDispatchAction = IOpenDocumentAction | IShowDocumentAction;

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
  IOpenDocumentAction | IShowDocumentAction
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
  action: IOpenDocumentAction,
): TDocumentsState =>
  state.filter((document) => document.id === action.value.id);

const showDocument = (
  state: TDocumentsState,
  action: IShowDocumentAction,
): TDocumentsState =>
  state.map((document) => {
    if (document.id !== action.value.id) return document;
    document.active = true;
    return document;
  });

const hideDocument = (
  state: TDocumentsState,
  action: IShowDocumentAction,
): TDocumentsState =>
  state.map((document) => {
    if (document.id !== action.value.id) return document;
    document.active = false;
    return document;
  });

interface IGenericReducerHandler<S, A> {
  (state: S, action: A): S;
}

type TDocumentsReducerHandler = IGenericReducerHandler<
  TDocumentsState,
  TDocumentsDispatchAction
>;

export const documentsContextReducer: React.Reducer<
  TDocumentsState,
  TDocumentsDispatchAction
> = (state, action) => {
  const handlers = {
    open: openDocument,
    close: closeDocument,
    show: showDocument,
    hide: hideDocument,
  };
  const handler: TDocumentsReducerHandler = handlers[action.type];
  return handler(state, action) || state;
};
