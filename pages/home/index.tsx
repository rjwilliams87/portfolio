import { Layout } from '../../components/Layout';
import { ShortcutFolder } from '../../components/ShortcutFolder';
import {
  useDocumentsState,
  withDocumentsContext,
} from '../../context/documents';
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
  const documents = useDocumentsState();
  const shortcuts = useShortcutsState();

  return (
    <Layout>
      {documents.map((document) => {
        const { component: Component } = document;
        return <Component key={document.id} />;
      })}
      {shortcuts.map(({ title }: TShortcut) => (
        <ShortcutFolder key={title} title={title} />
      ))}
    </Layout>
  );
};

export default withDocumentsContext(withShortcutsContext(Home));
