import { useState } from 'react';

import Draggable from 'react-draggable';

import { useFolderDispatch, IBaseFolder } from '../../context/folders';

const style = {
  width: '100px',
  height: '65px',
  border: '1px solid black',
  margin: '1rem 2.5px',
  cursor: 'pointer',
};

export const About: IBaseFolder = {
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

export const Games: IBaseFolder = {
  id: 'games',
  name: 'Games',
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
            border: '1px solid red',
            position: 'absolute',
            background: 'red',
            cursor: 'pointer',
            zIndex,
          }}
        />
      </Draggable>
    );
  },
};

const ShortcutFolder = ({
  folder,
  title,
}: {
  folder: IBaseFolder;
  title: string;
}) => {
  // const [open, setOpen] = useState<boolean>(false);
  const dispatch = useFolderDispatch();

  const handleOpen = (event) => {
    event.preventDefault();
    dispatch({ type: 'open', value: folder });
  };

  return (
    <>
      <Draggable>
        <div
          style={style}
          id={`${title}-dnd-content`}
          onDoubleClick={handleOpen}
        >
          {title}
        </div>
      </Draggable>
    </>
  );
};

export { ShortcutFolder };
