import { faAt, faBookmark } from '@fortawesome/pro-regular-svg-icons';
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

const socialNetworks = [{
  id: 1,
  name: 'TwitterSharing',
  dimensions: {
    width: 24,
    height: 24
  },
  icon: faTwitter,
  active: true
}, {
  id: 2,
  name: 'FacebookSharing',
  dimensions: {
    width: 21,
    height: 24
  },
  icon: faFacebookF,
  active: true
}, {
  id: 3,
  name: 'InstagramSharing',
  dimensions: {
    width: 23,
    height: 22
  },
  icon: faInstagram,
  active: true
}, {
  id: 4,
  name: 'EmailSharing',
  dimensions: {
    width: 22,
    height: 23
  },
  icon: faAt,
  active: true
}, {
  id: 5,
  name: 'BookmarkSharing',
  dimensions: {
    width: 22,
    height: 24
  },
  icon: faBookmark,
  active: false
}];

export default socialNetworks;
