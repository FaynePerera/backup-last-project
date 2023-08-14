import { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faRightToBracket,
  faBars,
  faXmarkLarge,
  faUser
} from '@fortawesome/pro-solid-svg-icons';
import Image from 'next/image';
import imageTorah from '../../../public/logos/torahclub/torahclub-logo.svg';
import imageMessiah from '../../../public/logos/messiah/messiah-logo.svg';
import styles from '@/styles/navigation/SubmenuMobile.module.scss';
import { useGlobalState } from '@/lib/context/globalContext';
import SubBar from '@/components/submenu/SubBar';
import groupStudies from '@/lib/submenu/_groupStudies';
import startLearnings from '@/lib/submenu/_startLearning';
import getInvolved from '@/lib/submenu/_getInvolved';
import ButtonJoinNow from '../../buttons/ButtonJoinNow';
import { motion } from 'framer-motion';
import useCheckSession from '@/hooks/useCheckSession';
import NotificationCenter from '@/components/notifications/NotificationCenter';

const variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 0, transition: { duration: 1 } }
};

export default function SubmenuMobile({ type }) {
  const { view } = useGlobalState();
  const demo = [false, false, false];
  const [visibles, setVisibles] = useState(demo);
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [xValue, setXValue] = useState(0);
  const isLoggedIn = useCheckSession();
  const getHeight = () => view.height - (isLoggedIn ? 165 : 250);

  const onClick = (index) => {
    const newVisibles = visibles.map((visible, i) => (i === index
      ? !visible
      : false));
    setVisibles(newVisibles);
  };

  const scrollHiddingBehavior = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    const scroll = !isOpen && !showNotification ? 'hidden' : '';
    document.body.style.overflow = scroll;
    document.getElementById('__next').style.overflow = scroll;
  };

  const navbarOnClick = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setVisibles(demo);
    }
    scrollHiddingBehavior();
  };

  const openCloseNotifications = (event) => {
    setXValue(event.clientX);
    setShowNotification(!showNotification);
    scrollHiddingBehavior();
  };

  return (
    <>
      <Navbar
        expand="lg"
        bg="white"
        className={`${isOpen && styles.mainContainer} py-0`}
      >
        <div className="d-flex flex-column vw-100 h-100">
          <div
            className={`d-flex justify-content-between ${
              styles.topBar
            } align-items-center px-3 ${isOpen && 'shadow-none'}`}
          >
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className={styles.toggler}
              onClick={navbarOnClick}
            >
              {!isOpen && <FontAwesomeIcon icon={faBars} size="sm" />}
              {isOpen && <FontAwesomeIcon icon={faXmarkLarge} size="sm" />}
            </Navbar.Toggle>
            <Navbar.Brand href="/">
              <Image
                src={type === 'torah' ? imageTorah : imageMessiah}
                alt={
                  type === 'torah'
                    ? imageTorah.caption
                    : imageMessiah.caption ?? 'FFOZ'
                }
                width={view.width >= 1200 ? 305 : 215}
                height={view.width >= 1200 ? 58 : 41}
                priority
              />
            </Navbar.Brand>
            <FontAwesomeIcon
              icon={isLoggedIn ? faUser : faRightToBracket}
              className={styles.icons}
              onClick={isLoggedIn ? (e) => openCloseNotifications(e) : undefined}
              role="button"
            />
          </div>
          <motion.div initial="closed" animate="open" variants={variants}>
            <Navbar.Collapse id="basic-navbar-nav">
              <form role="search" className="px-3 mb-3">
                <input
                  className="form-control is-search-field"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
              <Nav
                className="me-auto overflow-auto border-bottom"
                variant="tabs"
                style={{ height: getHeight() }}
              >
                <Link
                  href="#"
                  className={`${styles.navbarLinks} border-top m-0 rounded-0 text-dark fs-5 nav-link`}
                >
                  READ
                </Link>
                <Link
                  href="#"
                  className={`${styles.navbarLinks} border-top m-0 rounded-0 text-dark fs-5 nav-link`}
                >
                  LISTEN
                </Link>
                <Link
                  href="#"
                  className={`${styles.navbarLinks} border-top m-0 rounded-0 text-dark fs-5 nav-link`}
                >
                  WATCH
                </Link>
                <Link
                  href="#"
                  className={`${styles.navbarLinks} border-top m-0 rounded-0 text-dark fs-5 nav-link`}
                >
                  MAGAZINE
                </Link>
                <Link
                  href="#"
                  className={`${styles.navbarLinks} border-top m-0 rounded-0 text-dark fs-5 nav-link`}
                >
                  CONNECT
                </Link>
                <p
                  className={`${styles.navbarLinks} text-gray-600 m-0 py-4 rounded-0 fs-5`}
                >
                  Explore First Fruits of Zion
                </p>
                <Nav.Link
                  className={`${styles.navbarLinks} d-flex justify-content-between border-bottom m-0 rounded-0 text-dark small`}
                  onClick={() => onClick(0)}
                >
                  GROUP STUDIES
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    size="sm"
                    className="align-self-center"
                  />
                </Nav.Link>

                {visibles[0] && (
                  <SubBar
                    elements={groupStudies}
                    center={false}
                    source="mobile"
                  />
                )}

                <Nav.Link
                  className={`${styles.navbarLinks} d-flex justify-content-between border-bottom m-0 rounded-0 text-dark small`}
                  onClick={() => onClick(1)}
                >
                  START LEARNING
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    size="sm"
                    className="align-self-center"
                  />
                </Nav.Link>

                {visibles[1] && (
                  <SubBar
                    elements={startLearnings}
                    center={false}
                    source="mobile"
                  />
                )}

                <Nav.Link
                  className={`${styles.navbarLinks} d-flex justify-content-between border-bottom m-0 rounded-0 text-dark small`}
                  onClick={() => onClick(2)}
                >
                  GET INVOLVED
                  {' '}
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    size="sm"
                    className="align-self-center"
                  />
                </Nav.Link>

                {visibles[2] && (
                  <SubBar
                    elements={getInvolved}
                    center={false}
                    source="mobile"
                  />
                )}

                <Nav.Link
                  className={`${styles.navbarLinks} border-bottom m-0 rounded-0 text-dark small`}
                >
                  ABOUT US
                </Nav.Link>

                <Nav.Link
                  className={`${styles.navbarLinks} border-bottom m-0 rounded-0 text-dark small`}
                >
                  STORE
                </Nav.Link>
              </Nav>
              <Nav className="my-3 mx-3">
                {!isLoggedIn && (
                  <Link
                    href="/signin"
                    className="btn btn-outline-dark text-nowrap mb-3"
                  >
                    SIGN IN
                  </Link>
                )}
                <ButtonJoinNow />
              </Nav>
            </Navbar.Collapse>
          </motion.div>
        </div>
      </Navbar>
      {
        isLoggedIn && showNotification && (
          <NotificationCenter xValue={xValue} onCloseNotifications={openCloseNotifications} />
        )
      }
    </>
  );
}
