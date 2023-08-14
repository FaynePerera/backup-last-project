import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SharingIcon({ icon, dimensions, handleClick }) {
  return (
    <span
      className="bg-white border border-light me-3 rounded-circle"
      style={{ padding: 10, width: 44, height: 44 }}
      onClick={handleClick}
    >
      <FontAwesomeIcon
        icon={icon}
        scale="1.5"
        style={dimensions}
        role="button"
        className="text-dark"
      />
    </span>
  );
}
