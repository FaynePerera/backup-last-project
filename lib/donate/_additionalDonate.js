import { faPaypal } from '@fortawesome/free-brands-svg-icons';
import {
  faMoneyCheckDollarPen,
  faPhoneOffice
} from '@fortawesome/pro-light-svg-icons';
import friend from '../../public/logos/friends/friends-icon-isolated-black.svg';

const additionalDonate = [
  {
    icon: faPaypal,
    heading: 'Paypal',
    body: 'Send a donation securely through your PayPal account. <a class="d-inline-block" href="https://www.paypal.com/donate/?hosted_button_id=M5SWSTTWZCK4W" target="_blank">Donate now &raquo;</a>'
  },
  {
    icon: faMoneyCheckDollarPen,
    heading: 'Check',
    body: 'Send a Check to: FFOZ, PO Box 649, Marshfield, MO 65706. Made payable to <span class="d-inline-block">First Fruits of Zion.</span>'
  },
  {
    svg: friend.src,
    alt: 'FFOZ Friends',
    heading: 'Become a Friend',
    body: 'Sign up for the <em>FFOZ Friends</em> program at any level and support us monthly and receive benefits. <a class="d-inline-block" href="ffoz.org/friends" target="_blank">Learn More &raquo;</a>'
  },
  {
    icon: faPhoneOffice,
    heading: 'Call Us',
    body: 'Call 800-775-4807, Mondays to Thursdays (9am–3pm CST) to speak to our Care Team for all other options.'
  }
];

export default additionalDonate;
