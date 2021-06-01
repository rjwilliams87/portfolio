import { Dock } from '../Dock';

const layout = {
  width: '100vw',
  height: '100vh',
};

const Layout = () => {
  return (
    <div style={layout}>
      <Dock />
    </div>
  );
};

export { Layout };
