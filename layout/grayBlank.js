import React from 'react';
import DevTools from '@/components/dev/DevTools';
import { useGlobalState } from '@/lib/context/globalContext';

export default function GrayBlankPage({ children }) {
  const { showDevToolsBar } = useGlobalState();
  return (
    <div className="bg-secondary vh-100">
      {
        // This section takes care of hidding or displaying the devTools bar on the right of the app
        showDevToolsBar ? <DevTools /> : null
      }
      {children}
    </div>
  );
}

export const getLayout = (page) => (
  <GrayBlankPage {...page.props}>{page}</GrayBlankPage>
);
