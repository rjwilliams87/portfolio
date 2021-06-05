import Draggable from 'react-draggable';

const folder = {
  width: '100px',
  height: '65px',
  border: '1px solid black',
  margin: '1rem 2.5px',
  cursor: 'pointer',
};

const ShortcutFolder = ({ title }: { title: string }) => {
  return (
    <Draggable>
      <div style={folder} id={`${title}-dnd-content`}>
        {title}
      </div>
    </Draggable>
  );
};

export { ShortcutFolder };
