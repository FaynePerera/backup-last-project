import { useGlobalState } from '@/lib/context/globalContext';

export default function GospelInsightsSection() {
  const { isMobile } = useGlobalState();

  return (
    <div className={`d-flex flex-column ${isMobile && 'px-2 pt-2'}`} style={{ marginBottom: 32 }}>
      <p className="fw-bold fs-2 m-0">Gospel Insights</p>
      <p className="fw-normal fs-4 mb-0" style={!isMobile ? { width: 703 } : {}}>
        Weekly teachings on the Gospels, Acts, early Apostolic history, and a
        life of discipleship.
      </p>
    </div>
  );
}
