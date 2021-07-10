import { Layout } from '../../components/Layout';
import { ShortcutFolder } from '../../components/ShortcutFolder';
import { useFoldersState, withFoldersContext } from '../../context/folders';
import {
  TShortcut,
  useShortcutsState,
  withShortcutsContext,
} from '../../context/shortcuts';

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
  const folders = useFoldersState();
  const shortcuts = useShortcutsState();

  return (
    <Layout>
      {folders.map((folder) => {
        const { component: Component } = folder;
        return <Component key={folder.id} />;
      })}
      {shortcuts.map(({ folder, title }: TShortcut) => (
        <ShortcutFolder folder={folder} key={title} title={title} />
      ))}
    </Layout>
  );
};

export default withFoldersContext(withShortcutsContext(Home));
