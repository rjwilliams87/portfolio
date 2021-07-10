import { useState } from 'react';

import Draggable from 'react-draggable';

import { IBaseFolder } from '../../context/folders';

export const AboutFolder: IBaseFolder = {
  id: 'about',
  name: 'About',
  type: 'folder',
  component: () => {
    const [zIndex, setZIndex] = useState<number>(10);

    const onFocus = () => setZIndex(10);
    const onBlur = () => setZIndex(0);

    return (
      <Draggable>
        {/* on focus the z index needs to plus 1 */}
        {/* on blur the z index needs to minus 1 */}
        <div
          contentEditable
          onFocus={onFocus}
          onBlur={onBlur}
          style={{
            width: '500px',
            height: '500px',
            border: '1px solid green',
            position: 'absolute',
            background: 'green',
            cursor: 'pointer',
            zIndex,
          }}
        />
      </Draggable>
    );
  },
};
