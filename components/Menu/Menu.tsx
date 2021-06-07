import React from 'react';

import { SHORTCUTS } from '../../lib/shortcuts';

const menuItem = {
  width: '100%',
  height: '50px',
  borderTop: '1px solid black',
};

const menu = {
  minHeight: '400px',
  width: '300px',
  border: '1px solid black',
  position: 'fixed',
  bottom: '40px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
};

const subMenu = {
  width: '300px',
  height: '100px',
  left: '300px',
  border: '1px solid red',
  position: 'fixed',
};

/**
 * TO DO:
 * rename SHORTCUTS constants to folders
 */

const SubMenu = ({ coords }: { coords: { x: number; y: number } }) => {
  return <div style={{ ...subMenu, top: `${coords.y - 50}px` }}></div>;
};

const MenuItem = ({ item }) => {
  const [displaySubMenu, setDisplaySubMenu] = React.useState<boolean>(false);
  const [coords, setCoords] = React.useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const handleHover = (event) => {
    console.log('happening');
    console.log('y', event.screenY, event.clientY);
    // console.log('event - ', event);
    console.log('bounds', event.target.getBoundingClientRect());
    const { x, y } = event.target.getBoundingClientRect();
    setCoords({ x, y });
    setDisplaySubMenu(true);
  };

  const handleBlur = () => {
    setDisplaySubMenu(false);
  };

  return (
    <div onMouseLeave={handleBlur} onBlur={handleBlur}>
      {displaySubMenu && <SubMenu coords={coords} />}
      <div
        style={menuItem}
        onMouseOver={handleHover}
        onFocus={handleHover}
        // onMouseOut={handleBlur}
        // onBlur={handleBlur}
      >
        {item.title}
      </div>
    </div>
  );
};

const Menu = () => {
  return (
    <div
      style={menu}
      onBlur={(e) => {
        console.log(e);
      }}
    >
      {SHORTCUTS.map((shortcut) => (
        <MenuItem key={`menu-item-${shortcut.title}`} item={shortcut} />
      ))}
    </div>
  );
};

export { Menu };
