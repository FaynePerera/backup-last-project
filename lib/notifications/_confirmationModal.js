import {
  faMessageExclamation,
  faMessageSmile
} from '@fortawesome/pro-duotone-svg-icons';

const info = [
  {
    slug: 'error_payment',
    title: {
      icon: faMessageExclamation,
      color: 'danger',
      text: 'Problem'
    },
    body: 'We encountered a problem while processing this transaction. Please try again! If the problem persists, contact our support team.',
    hasClose: true,
    button: { text: 'Try Again', retry: true }
  },
  {
    slug: 'success_donate',
    title: { icon: faMessageSmile, color: 'success', text: 'Thank You!' },
    body: 'Your donation was submitted successfully.<br> Your generosity helps support the mission of <span class="d-inline-block">First Fruits of Zion.</span>',
    hasClose: false,
    button: { text: 'GO TO FFOZ HOME', href: '/' }
  },
  {
    slug: 'success_friend',
    title: { icon: faMessageSmile, color: 'success', text: 'Thank You!' },
    body: 'You have successfully signed up as an <span class="fst-italic d-inline-block">FFOZ Friend</span>. Welcome! Visit your Friends Dashboard to start enjoying your benefits.',
    hasClose: false,
    button: { text: 'GO TO FRIENDS DASHBOARD', href: '/friends' }
  }
];

export default info;
