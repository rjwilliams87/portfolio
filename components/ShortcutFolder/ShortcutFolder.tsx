import Draggable from 'react-draggable';

import { useDocumentsDispatch, IBaseDocument } from '../../context/documents';

const folder = {
  width: '100px',
  height: '65px',
  border: '1px solid black',
  margin: '1rem 2.5px',
  cursor: 'pointer',
};

const About: IBaseDocument = {
  id: 'about_0',
  name: 'About',
  type: 'folder',
  component: () => (
    <Draggable>
      {/* on focus the z index needs to plus 1 */}
      {/* on blur the z index needs to minus 1 */}
      <div
        style={{
          width: '500px',
          height: '500px',
          border: '1px solid green',
          position: 'absolute',
          background: 'green',
          zIndex: 9,
        }}
      />
    </Draggable>
  ),
};

const ShortcutFolder = ({ title }: { title: string }) => {
  // const [open, setOpen] = useState<boolean>(false);
  const dispatch = useDocumentsDispatch();

  const handleOpen = (event) => {
    event.preventDefault();
    dispatch({ type: 'open', value: About });
  };

  return (
    <>
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
