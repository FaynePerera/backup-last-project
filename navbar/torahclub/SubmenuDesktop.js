import { Navbar, Container, Nav } from 'react-bootstrap';
import Image from 'next/image';
import image from '../../../public/logos/torahclub/torahclub-logo.svg';
import styles from '@/styles/navigation/Submenu.module.scss';
import { useGlobalState } from '@/lib/context/globalContext';
import Link from 'next/link';
import ButtonJoinNow from '../../buttons/ButtonJoinNow';

export default function SubmenuDesktop() {
  const { view } = useGlobalState();
  return (
    <Navbar expand="lg" bg="white" className={styles.mainContainer}>
      <Container className="justify-content-start px-0">
        <Link className="ps-2 navbar-brand" href="/">
          <Image
            src={image}
            alt={image.caption ?? 'FFOZ'}
            width={view.width >= 1200 ? 248 : 200}
            height={view.width >= 1200 ? 51 : 45}
            priority
          />
        </Link>
        <Navbar.Collapse id="basic-navbar-nav" className="me-auto">
          <Nav className="mx-auto" variant="tabs">
            <Link
              href="#"
              className={`${styles.navbarLinks} text-black nav-link`}
            >
              HOW IT WORKS
            </Link>
            <Link
              href="#"
              className={`${styles.navbarLinks} text-black nav-link`}
            >
              START A CLUB
            </Link>
            <Link
              href="#"
              className={`${styles.navbarLinks} text-black nav-link`}
            >
              OUR COMMUNITY
            </Link>
          </Nav>
          <div className="pe-2">
            <ButtonJoinNow className="text-nowrap" />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
