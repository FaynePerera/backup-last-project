import { useGlobalState } from '@/lib/context/globalContext';

export default function PortionLibrarySection() {
  const { isMobile } = useGlobalState();
  return (
    <div className={`d-flex flex-column ${isMobile && 'px-2 pt-2'}`}>
      <p className="fw-bold fs-2 m-0">Torah Portions Library</p>
      <p
        className="fw-normal fs-4 mb-3"
        style={!isMobile ? { width: 703 } : {}}
      >
        A library of condensed commentary on the weekly Torah Portions.
      </p>
    </div>
  );
}
