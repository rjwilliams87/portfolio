import { Dock } from '../Dock';

const layout = {
  width: '100vw',
  height: '100vh',
};

const screen = {
  width: '100%',
  height: '100%',
};

interface LayoutProps {
  children: JSX.Element | JSX.Element[] | null;
}

const Layout = ({ children = null }: LayoutProps) => {
  return (
    <div style={layout}>
      <div style={screen}>{children}</div>
      <Dock />
    </div>
  );
};

export { Layout };
