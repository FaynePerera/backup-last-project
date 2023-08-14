import { faSidebar } from '@fortawesome/pro-duotone-svg-icons';
import { faMagnifyingGlassPlus, faBookmark } from '@fortawesome/pro-solid-svg-icons';

const accountMessages = [
  {
    type: 'reading',
    title: 'Create a free account to continue reading.',
    message:
      'Sign up for free to unlock your personal dashboards and access more FFOZ content.',
    buttonText: 'Get Started',
    bottomText: 'Already have have an account?',
    icons: [faSidebar, faMagnifyingGlassPlus],
    link: {
      text: 'Sign in here',
      href: '/signin'
    }
  },
  {
    type: 'bookmark',
    title: 'Create a free account to bookmark.',
    message:
      'Save content to your personalized library and get access to more FFOZ resources.',
    buttonText: 'Get Started',
    bottomText: 'Already have have an account?',
    icons: [faSidebar, faBookmark],
    link: {
      text: 'Sign in here',
      href: '/signin'
    }
  }
];

export default accountMessages;
