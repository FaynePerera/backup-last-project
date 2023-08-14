import Header from '@/components/header/Header';
import { getSiteLayout } from '@/layout';
import DevTools from '@/components/dev/DevTools';
import { useGlobalState } from '@/lib/context/globalContext';

export default function PageLayout({ children, page }) {
  const { showDevToolsBar } = useGlobalState();
  return (
    <>
      {
        // This section takes care of hidding or displaying the devTools bar on the right of the app
        showDevToolsBar ? <DevTools /> : null
      }
      <Header title={page.title} />
      {children}
    </>
  );
}

export const getLayout = (page) => getSiteLayout(<PageLayout {...page.props}>{page}</PageLayout>);
