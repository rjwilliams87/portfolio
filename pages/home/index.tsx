import { Layout } from '../../components/Layout';
import { ShortcutFolder } from '../../components/ShortcutFolder';
import {
  useShortcutsState,
  withShortcutsContext,
} from '../../context/shortcuts';
import { TShortcut } from '../../lib/shortcuts';

// const text = 'Home';

/**
 *
 * it should
 * display a list of desktop icons
 *
 * be responsive
 *
 * have a nav bar
 *
 * pull open folder context and render a modal for each open folder
 */

const Home = () => {
  const shortcuts = useShortcutsState();

  return (
    <Layout>
      {shortcuts.map(({ title }: TShortcut) => (
        <ShortcutFolder key={title} title={title} />
      ))}
    </Layout>
  );
};

export default withShortcutsContext(Home);
