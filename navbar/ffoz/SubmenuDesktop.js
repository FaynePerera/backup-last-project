import { useState, useRef } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/pro-solid-svg-icons';
import SubBar from '@/components/submenu/SubBar';
import groupStudies from '@/lib/submenu/_groupStudies';
import startLearnings from '@/lib/submenu/_startLearning';
import getInvolved from '@/lib/submenu/_getInvolved';
import Image from 'next/image';
import image from '../../../public/logos/ffoz/ffoz-logo.svg';
import styles from '@/styles/navigation/Submenu.module.scss';
import { useGlobalState } from '@/lib/context/globalContext';
import ButtonJoinNow from '../../buttons/ButtonJoinNow';
import Link from 'next/link';

export default function SubmenuDesktop() {
  const { view } = useGlobalState();
  const demo = [false, false, false];
  const menu = useRef(null);
  const [visibles, setVisibles] = useState(demo);

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

  return (
    <>
      <Navbar expand="lg" bg="white" className={styles.mainContainer}>
        <Container className="justify-content-start px-0">
          <Link
            className="ps-2 navbar-brand"
            href="/"
            style={{ margin: '-4px 0 2px 0' }}
          >
            <Image
              src={image}
              alt={image.caption ?? 'FFOZ'}
              width={view.width >= 1200 ? 305 : 215}
              height={view.width >= 1200 ? 58 : 41}
              priority
            />
          </Link>
          <Navbar.Collapse id="basic-navbar-nav" className="me-auto">
            <Nav className="mx-auto" variant="tabs">
              <Nav.Link
                className={`${styles.navbarLinks} text-dark ${
                  visibles[0]
                  && `nav-link-selected ${styles.navbarLinksSelected}`
                }`}
                onClick={() => onClick(0)}
              >
                GROUP STUDIES
                {' '}
                <FontAwesomeIcon
                  icon={faChevronDown}
                  size="sm"
                  className="text-gray-500 pe-none"
                />
              </Nav.Link>
              <Nav.Link
                className={`${styles.navbarLinks} text-dark ${
                  visibles[1]
                  && `nav-link-selected ${styles.navbarLinksSelected}`
                }`}
                onClick={() => onClick(1)}
              >
                START LEARNING
                {' '}
                <FontAwesomeIcon
                  icon={faChevronDown}
                  size="sm"
                  className="text-gray-500 pe-none"
                />
              </Nav.Link>
              <Nav.Link
                className={`${styles.navbarLinks} text-dark ${
                  visibles[2]
                  && `nav-link-selected ${styles.navbarLinksSelected}`
                }`}
                onClick={() => onClick(2)}
              >
                GET INVOLVED
                {' '}
                <FontAwesomeIcon
                  icon={faChevronDown}
                  size="sm"
                  className="text-gray-500 pe-none"
                />
              </Nav.Link>
            </Nav>
            <div className="pe-2">
              <ButtonJoinNow className="text-nowrap" />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div ref={menu}>
        {visibles[0] && (
          <SubBar elements={groupStudies} center source="submenu" />
        )}
        {visibles[1] && (
          <SubBar elements={startLearnings} center source="submenu" />
        )}
        {visibles[2] && (
          <SubBar elements={getInvolved} center source="submenu" />
        )}
      </div>
    </>
  );
}
