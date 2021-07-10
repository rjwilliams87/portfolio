import { useState } from 'react';

import Draggable from 'react-draggable';

import { IBaseFolder } from '../../context/folders';

export const ProjectsFolder: IBaseFolder = {
  id: 'projects',
  name: 'Projects',
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
            border: '1px solid purple',
            position: 'absolute',
            background: 'purple',
            cursor: 'pointer',
            zIndex,
          }}
        />
      </Draggable>
    );
  },
};
