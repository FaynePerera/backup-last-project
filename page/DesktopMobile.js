import { useGlobalState } from '@/lib/context/globalContext';

export default function DesktopMobile({ Mobile, Desktop }) {
  const { isMobile } = useGlobalState();
  return (isMobile
    ? <Mobile />
    : <Desktop />
  );
}
