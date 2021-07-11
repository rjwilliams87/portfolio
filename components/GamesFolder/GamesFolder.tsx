import React from 'react';

import {
  IBaseFolder,
  useFolderDispatch,
  useFoldersState,
} from '../../context/folders';
import { Folder } from '../Folder';

const FOLDER_ID = 'games';
const FOLDER_NAME = 'Games';
const FOLDER_TYPE = 'folder';

/**
 *
 * TO DO:
 *   show folder if open and user double clicks shortcut
 */

const GamesFolderComponent: React.FC = () => {
  const dispatch = useFolderDispatch();
  const state = useFoldersState();

  const folder = state.find((folder) => folder.id === FOLDER_ID);
  console.log('FOLDER = ', folder);
  const closeFolder = (e) => {
    e.preventDefault();
    dispatch({ type: 'close', value: { id: FOLDER_ID } });
  };

  const hideFolder = (e) => {
    e.preventDefault();
    dispatch({ type: 'hide', value: { id: FOLDER_ID } });
  };

  console.log('STATE = ', state);

  if (!folder) return;

  return (
    folder.active && (
      <Folder>
        <button onClick={closeFolder}>X</button>
        <button onClick={hideFolder}>hide</button>
      </Folder>
    )
  );
};

export const GamesFolder: IBaseFolder = {
  id: FOLDER_ID,
  name: FOLDER_NAME,
  type: FOLDER_TYPE,
  component: GamesFolderComponent,
};
