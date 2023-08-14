import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faSquareInstagram,
  faSquareYoutube
} from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const socials = [
  {
    name: 'Twitter',
    icon: faTwitter,
    url: 'https://twitter.com/followffoz',
    alt: 'Follow us on Twitter'
  },
  {
    name: 'Facebook',
    icon: faFacebook,
    url: 'https://www.facebook.com/firstfruitsofzion',
    alt: 'Follow us on Facebook'
  },
  {
    name: 'Instagram',
    icon: faSquareInstagram,
    url: 'https://www.instagram.com/first_fruits_of_zion/',
    alt: 'Follow us on Instagram'
  },
  {
    name: 'YouTube',
    icon: faSquareYoutube,
    url: 'https://www.youtube.com/channel/UCz7q0C1OWSQDxoCF4AJH0zA',
    alt: 'Follow us on YouTube'
  }
];

export default function SocialIcons() {
  return (
    <>
      {socials.map((social, index, row) => (
        <Link
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noreferrer"
          className="text-gray-600 "
        >
          <FontAwesomeIcon
            icon={social.icon}
            size="xl"
            style={index < row.length - 1 && { paddingRight: '12px' }}
          />
        </Link>
      ))}
    </>
  );
}
