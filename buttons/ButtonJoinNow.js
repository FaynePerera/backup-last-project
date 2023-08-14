import Link from 'next/link';
import { useSession } from 'next-auth/react';

// VARIANTS CAN BE 1 OR 2
// TYPES CAN BE EITHER "messiah" OR "TORAH"
export default function RenderComponent(props) {
  const { status } = useSession();

  let label;
  let link = '#';
  if (status !== 'authenticated') {
    if (props.type === 'torahclub') {
      label = 'JOIN A CLUB';
    } else {
      label = 'Get STARTED';
      link = '/getstarted';
    }
  } else {
    label = 'DONATE';
    link = '/donate';
  }
  return (
    <Link href={link} className={`btn btn-primary ${props.className}`}>
      {label}
    </Link>
  );
}
