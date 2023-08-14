import Footer from '@/components/footer/Footer';
import DevTools from '@/components/dev/DevTools';
import { useGlobalState } from '@/lib/context/globalContext';
import GlobalNavigation from '../navbar/GlobalNavigation';
import Submenu from '../navbar/Submenu';

export default function SiteLayout({ children }) {
  const { showDevToolsBar } = useGlobalState();
  return (
    <>
      <GlobalNavigation type="ffoz" />
      <Submenu type="ffoz" />
      {
        // This section takes care of hidding or displaying the devTools bar on the right of the app
        showDevToolsBar ? <DevTools /> : null
      }
      {children}
      <Footer />
    </>
  );
}

export const getLayout = (page) => (
  <SiteLayout {...page.props}>{page}</SiteLayout>
);
