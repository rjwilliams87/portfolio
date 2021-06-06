import { useState } from 'react';

import Draggable from 'react-draggable';

const folder = {
  width: '100px',
  height: '65px',
  border: '1px solid black',
  margin: '1rem 2.5px',
  cursor: 'pointer',
};

const ShortcutFolder = ({ title }: { title: string }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = (event) => {
    event.preventDefault();
    setOpen(true);
  };

  return (
    <>
      {open && <div>Hello open</div>}
      <Draggable>
        <div
          style={folder}
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
