import SubmenuDesktopFfoz from './ffoz/SubmenuDesktop';
import SubmenuMobileFfoz from './ffoz/SubmenuMobile';
import SubmenuDesktopTorah from './torahclub/SubmenuDesktop';
import SubmenuMobileTorah from './torahclub/SubmenuMobile';
import SubmenuDesktopMessiah from './messiahonline/SubmenuDesktop';
import SubmenuMobileMessiah from './messiahonline/SubmenuMobile';
import DesktopMobile from '../page/DesktopMobile';

export default function Submenu({ type }) {
  switch (type) {
    case 'ffoz':
      return (
        <DesktopMobile
          Mobile={SubmenuMobileFfoz}
          Desktop={SubmenuDesktopFfoz}
        />
      );
    case 'torah':
      return (
        <DesktopMobile
          Mobile={SubmenuMobileTorah}
          Desktop={SubmenuDesktopTorah}
        />
      );
    case 'messiah':
      return (
        <DesktopMobile
          Mobile={SubmenuMobileMessiah}
          Desktop={SubmenuDesktopMessiah}
        />
      );
    default:
      return (
        <DesktopMobile
          Mobile={SubmenuMobileFfoz}
          Desktop={SubmenuDesktopFfoz}
        />
      );
  }
}
