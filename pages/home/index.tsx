import { Layout } from '../../components/Layout';
import { ShortcutFolder } from '../../components/ShortcutFolder';
import { SHORTCUTS, TShortcut } from '../../lib/shortcuts';

// const text = 'Home';

/**
 *
 * it should
 * display a list of desktop icons
 *
 * be responsive
 *
 * have a nav bar
 */

const Home = () => {
  return (
    <Layout>
      {SHORTCUTS.map(({ title }: TShortcut) => (
        <ShortcutFolder key={title} title={title} />
      ))}
    </Layout>
  );
};

export default Home;
