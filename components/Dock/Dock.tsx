import { useState } from 'react';

import { Menu } from '../Menu';

const styles = {
  width: '100%',
  border: '1px solid black',
  height: '40px',
  position: 'fixed',
  bottom: 0,
  display: 'flex',
};

const container = {
  width: '100px',
  height: '100%',
  border: '1px solid red',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const container2 = {
  height: '100%',
  width: 'calc(100vw - 100px - 100px)',
  border: '1px solid green',
  display: 'flex',
  alignItems: 'center',
};

const container3 = {
  height: '100%',
  width: '200px',
  border: '1px solid green',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const folder = {
  width: '200px',
  height: '90%',
  border: '1px solid black',
  margin: '0 1px',
};

const DockTab = () => {
  return <div style={folder}></div>;
};

const Dock = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const tabs = ['About', 'Portfolio']; // will need to be pulled from context

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <>
      {showMenu && <Menu />}
      <div style={styles}>
        <div style={container}>
          <button style={{ height: '90%', width: '92%' }} onClick={toggleMenu}>
            Start
          </button>
        </div>
        <div style={container2}>
          {tabs.map((tab, index) => (
            <DockTab key={`shortcut-${index}`} />
          ))}
        </div>
        <div style={container3}>
          <div
            style={{
              height: '90%',
              width: '92%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              border: '1px solid red',
            }}
          >
            <div>Icon</div>
            <div>11:29 AM</div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Dock };
