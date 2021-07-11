import React, { useState } from 'react';

import Draggable from 'react-draggable';

interface IDimensions {
  height: string;
  width: string;
  top: string | number;
  left: string | number;
}

import {
  // IBaseFolder,
  useFolderDispatch,
} from '../../context/folders';

export const Banner: React.FC = ({
  folderId,
  onExpand,
  onMinimize,
}: {
  folderId: string;
  onExpand: () => void;
  onMinimize: () => void;
}) => {
  const dispatch = useFolderDispatch();
  const [resize, setResize] = useState<{ id: string; handler: () => void }>({
    id: 'expand',
    handler: onExpand,
  });

  const closeFolder = (e) => {
    e.preventDefault();
    dispatch({ type: 'close', value: { id: folderId } });
  };

  const hideFolder = (e) => {
    e.preventDefault();
    dispatch({ type: 'hide', value: { id: folderId } });
  };

  const toggleResize = () => {
    if (resize.id === 'expand')
      setResize({
        id: 'minimize',
        handler: onMinimize,
      });
    else
      setResize({
        id: 'expand',
        handler: onExpand,
      });
  };

  const handleResize = () => {
    resize.handler();
    toggleResize();
  };

  return (
    <div
      style={{
        width: '100%',
        height: '30px',
        border: '1px solid grey',
        background: 'lightgrey',
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
      <button onClick={hideFolder}>hide</button>
      <button onClick={handleResize}>resize</button>
      <button onClick={closeFolder}>X</button>
    </div>
  );
};

export const Folder: React.FC = ({
  folderId,
  children,
}: {
  folderId: string;
  children: React.ReactChild;
}) => {
  /**
   * needs to be collapsible
   * needs to be resizable
   * needs to accept child elements
   */

  const [zIndex, setZIndex] = useState<number>(10);
  const [styles, setStyles] = useState<IDimensions>({
    width: '500px',
    height: '500px',
    top: 'calc(50vh - 250px - 40px)',
    left: 'calc(50vw - 250px)',
  });

  const onFocus = () => setZIndex(10);
  const onBlur = () => setZIndex(0);
  const onExpand = () => {
    setStyles({
      width: '100vw',
      height: 'calc(100vh - 40px)',
      top: 0,
      left: 0,
    });
  };
  const onMinimize = () => {
    setStyles({
      width: '500px',
      height: '500px',
      top: 'calc(50vh - 250px - 40px)',
      left: 'calc(50vw - 250px)',
    });
  };

  return (
    <Draggable>
      {/* on focus the z index needs to plus 1 */}
      {/* on blur the z index needs to minus 1 */}
      <div
        // to do: manage editable content
        contentEditable
        onFocus={onFocus}
        onBlur={onBlur}
        style={{
          border: '1px solid black',
          position: 'absolute',
          background: 'white',
          cursor: 'pointer',
          opacity: 100,
          zIndex,
          ...styles,
        }}
      >
        <Banner
          folderId={folderId}
          onExpand={onExpand}
          onMinimize={onMinimize}
        />
        {children}
      </div>
    </Draggable>
  );
};
