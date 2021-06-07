import React from 'react';

export interface IContextProps {
  displayName?: string;
  children?: JSX.Element | JSX.Element[] | undefined | null;
}

export interface IDispatchAction {
  type: string;
}

export type TContextDispatch<T extends IDispatchAction> = React.Dispatch<T>;

export type TReducerHandler = (
  state: any,
  action: Required<IDispatchAction>,
) => any;
