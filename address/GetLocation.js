import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationCheck } from '@fortawesome/pro-solid-svg-icons';

export default function GetLocation({ automatic, setLat, setLng }) {
  const getPosition = () => {
    setLat(null);
    setLng(null);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      },
      (error) => {
        console.error(`Error Code = ${error.code} - ${error.message}`);
      }
    );
  };
  const handleClick = () => {
    getPosition();
  };
  useEffect(() => {
    if (automatic) getPosition();
  });
  return (
    <a onClick={handleClick} className="link" role="button" tabIndex="0">
      <FontAwesomeIcon icon={faLocationCheck} />
      {' '}
      USE MY LOCATION
    </a>
  );
}
