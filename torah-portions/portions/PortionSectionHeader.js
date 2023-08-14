import { Badge } from 'react-bootstrap';
import { useGlobalState } from '@/lib/context/globalContext';

export default function PortionSectionHeader({
  title,
  subtitle,
  thisWeek,
  nextWeek
}) {
  const { isMobile } = useGlobalState();

  return (
    <div className={`d-flex flex-column ${isMobile ? 'py-5' : 'py-9'}`}>
      {thisWeek && (
        <Badge bg="info" className="fs-4 fw-semibold align-self-start mb-3">
          This Week
        </Badge>
      )}
      {nextWeek && (
        <Badge bg="info" className="fs-4 fw-semibold align-self-start mb-3">
          Next Week
        </Badge>
      )}
      <p className="fw-bold display-5">{title}</p>
      <p className="fw-bold fs-6 m-0 text-uppercase">{subtitle}</p>
    </div>
  );
}
