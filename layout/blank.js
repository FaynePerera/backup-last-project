import React from 'react';
import DevTools from '@/components/dev/DevTools';
import { useGlobalState } from '@/lib/context/globalContext';

export default function BlankPage({ children }) {
  const { showDevToolsBar } = useGlobalState();
  return (
    <>
      {
        // This section takes care of hidding or displaying the devTools bar on the right of the app
        showDevToolsBar ? <DevTools /> : null
      }
      {children}
    </>
  );
}

export const getLayout = (page) => (
  <BlankPage {...page.props}>{page}</BlankPage>
);
