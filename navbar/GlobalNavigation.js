import Link from 'next/link';
import { Container, Nav, Navbar } from 'react-bootstrap';
import styles from '@/styles/navigation/GlobalNavigation.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faUserAlt,
  faChevronDown,
  faBell,
  faSidebar
} from '@fortawesome/pro-solid-svg-icons';
import SubBar from '@/components/submenu/SubBar';
import groupStudies from '@/lib/submenu/_groupStudies';
import startLearnings from '@/lib/submenu/_startLearning';
import getInvolved from '@/lib/submenu/_getInvolved';
import ourSites from '@/lib/submenu/_ourSites';
import { useState, useRef } from 'react';
import Image from 'next/image';
import image from '../../public/logos/ffoz/ffoz-icon-square-color.svg';
import { useGlobalState } from '@/lib/context/globalContext';
import { useSession } from 'next-auth/react';
import NotificationCenter from '../notifications/NotificationCenter';

export default function GlobalNavigation({ type }) {
  const { status } = useSession();
  const isLoggedIn = status === 'authenticated';
  const { isMobile } = useGlobalState();
  const demo = [false, false, false, false];
  const menu = useRef(null);
  const [visibles, setVisibles] = useState(demo);
  const [showNotification, setShowNotification] = useState(false);
  const notifications = useRef(null);
  const [xValue, setXValue] = useState(0);

  const onClick = (index) => {
    const newVisibles = visibles.map((visible, i) => (i === index
      ? !visible
      : false));
    setVisibles(newVisibles);

    const closeOpenMenus = (e) => {
      if (
        menu.current
        && !menu.current.contains(e.target)
        && !e.target.classList.contains('nav-link-selected')
      ) {
        setVisibles(demo);
      }
    };

    if (newVisibles.includes(true)) {
      window.addEventListener('mouseup', closeOpenMenus);
    } else {
      window.removeEventListener('mouseup', closeOpenMenus);
    }
  };

  const notificationClick = (event) => {
    event.preventDefault();
    setXValue(event.clientX);
    setShowNotification(!showNotification);
  };

  return (
    !isMobile && (
      <>
        <Navbar bg="dark" className={styles.navContainer}>
          <Container className="justify-content-start px-0">
            <Link
              href="/"
              className={`ms-2 nav-link ${
                isLoggedIn ? 'text-white' : 'text-gray-600'
              }`}
            >
              <FontAwesomeIcon icon={faSidebar} size="xl" />
            </Link>
            {type !== 'ffoz' && (
              <Navbar.Brand href="/" className="ps-2 ms-3">
                <Image
                  src={image}
                  alt={image.caption ?? 'FFOZ'}
                  width={25}
                  height={30}
                  priority
                />
              </Navbar.Brand>
            )}

            <Nav className="flex-grow-1" variant="tabs">
              {type === 'ffoz' ? (
                <Nav.Link
                  className={`me-auto text-white ms-3 ${styles.navLink} ${
                    visibles[0] && `nav-link-selected ${styles.navActive}`
                  }`}
                  onClick={() => onClick(0)}
                >
                  OUR SITES
                  {' '}
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    size="xs"
                    className="pe-none"
                  />
                </Nav.Link>
              ) : (
                <>
                  <Nav.Link
                    className={`ms-3 text-white ${styles.navLink} ${
                      visibles[1] && `nav-link-selected ${styles.navActive}`
                    }`}
                    onClick={() => onClick(1)}
                  >
                    GROUP STUDIES
                    {' '}
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      size="xs"
                      className="pe-none"
                    />
                  </Nav.Link>
                  <Nav.Link
                    className={`ms-3 text-white ${styles.navLink} ${
                      visibles[2] && `nav-link-selected ${styles.navActive}`
                    }`}
                    onClick={() => onClick(2)}
                  >
                    START LEARNING
                    {' '}
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      size="xs"
                      className="pe-none"
                    />
                  </Nav.Link>
                  <Nav.Link
                    className={`ms-3 me-auto text-white ${styles.navLink} ${
                      visibles[3] && `nav-link-selected ${styles.navActive}`
                    }`}
                    onClick={() => onClick(3)}
                  >
                    GET INVOLVED
                    {' '}
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      size="xs"
                      className="pe-none"
                    />
                  </Nav.Link>
                </>
              )}
            </Nav>
            <Nav>
              <Link href="#" className="ms-3 text-white nav-link">
                <FontAwesomeIcon icon={faSearch} size="lg" />
              </Link>
              <Link href="#" className="ms-3 text-white nav-link">
                ABOUT US
              </Link>
              <Link
                href="https://ffoz.com"
                className="ms-3 text-white nav-link"
                target="_blank"
              >
                STORE
              </Link>
              {!isLoggedIn ? (
                <Link href="/signin" className="ms-3 text-white nav-link">
                  SIGN IN
                </Link>
              ) : (
                <>
                  <Link href="/" className="ms-3 text-white nav-link" onClick={(e) => notificationClick(e)}>
                    <FontAwesomeIcon icon={faBell} size="lg" />
                  </Link>
                  <Link href="/" className="ms-3 text-white nav-link">
                    <FontAwesomeIcon icon={faUserAlt} size="lg" />
                  </Link>
                </>
              )}
            </Nav>
          </Container>
        </Navbar>
        {
          isLoggedIn && !isMobile && showNotification && (
            <div ref={notifications}>
              <NotificationCenter xValue={xValue} />
            </div>
          )
        }
        <div ref={menu}>
          {visibles[0] && <SubBar elements={ourSites} />}
          {visibles[1] && <SubBar elements={groupStudies} />}
          {visibles[2] && <SubBar elements={startLearnings} />}
          {visibles[3] && <SubBar elements={getInvolved} />}
        </div>
      </>
    )
  );
}
