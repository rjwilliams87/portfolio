import React from 'react';

import {
  useMenuDispatch,
  useMenuState,
  withMenuContext,
} from '../../context/menu';
import { Dock } from '../Dock';

const layout = {
  width: '100vw',
  height: '100vh',
};

const screen = {
  width: '100%',
  height: '100%',
};

const LayoutComponent: React.FC = ({ children }) => {
  const dispatch = useMenuDispatch();
  const state = useMenuState();

  const close = (event: React.MouseEvent | React.KeyboardEvent): void => {
    // eslint-disable-next-line
    // @ts-ignore: next-line
    const ancestor = event.target.closest('#dock');

    if (ancestor || !state.open) return;

    dispatch({ type: 'close' });
  };

  return (
    <div style={layout} role="main">
      <div
        style={screen}
        role="presentation"
        onMouseUp={close}
        onClick={close}
        onKeyPress={close}
      >
        {children}
      </div>
      <Dock />
    </div>
  );
};

const Layout = withMenuContext(LayoutComponent);

export { Layout };
