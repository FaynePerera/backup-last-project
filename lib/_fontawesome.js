import {
  faBooks,
  faPodiumStar,
  faPeopleGroup
} from '@fortawesome/pro-duotone-svg-icons';
import { faCoffee } from '@fortawesome/pro-regular-svg-icons';
import { faCircleCheck } from '@fortawesome/sharp-solid-svg-icons';

const { library } = require('@fortawesome/fontawesome-svg-core');

library.add(faBooks, faPodiumStar, faPeopleGroup, faCoffee, faCircleCheck);
