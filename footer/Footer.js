import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../../public/logos/ffoz/ffoz-logo-dark.svg';
import Image from 'next/image';
import styles from '@/styles/navigation/Footer.module.scss';
import ButtonJoinNow from '../buttons/ButtonJoinNow';
import footerElements from '@/lib/submenu/_globalFooterFFOZ';
import SocialIcons from '../social/SocialIcons';
import { useGlobalState } from '@/lib/context/globalContext';

export default function Render() {
  const { isLoggedIn } = useGlobalState();
  return (
    <>
      {/* ---- TOP SHAPE ---- */}
      <div className="position-relative">
        <div className="shape shape-bottom shape-fluid-x">
          <svg
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z"
              fill="#F0F3F7"
            />
          </svg>
        </div>
      </div>
      <Container
        fluid
        className="g-0 bg-light text-center text-lg-start pt-lg-10 pt-6"
      >
        <Container>
          <Row className="align-items-lg-start align-items-md-center px-6 ">
            <Col xl={3} lg={6} sm={12} className="mb-9">
              <Row className="mb-5 ">
                <Col className="justify-content-center justify-content-lg-start d-flex">
                  <div className="p-0 m-0 ">
                    <Link href="/">
                      <Image
                        src={logo}
                        alt="First Fruits of Zion"
                        width={194}
                        height={94}
                      />
                    </Link>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <h6 className="xsmall fw-semibold em-spacing-02">
                    FOLLOW US ON
                  </h6>
                  <SocialIcons />
                </Col>
              </Row>
            </Col>
            <Col xl={3} lg={6} sm={12} className="mb-9 d-flex justify-content-center justify-content-lg-start">
              <div style={{ maxWidth: 240 }}>
                <div>
                  <h4 className="fw-semibold">
                    {isLoggedIn ? 'Support our Mission' : 'Join our Community'}
                  </h4>
                </div>
                <div className="mb-1">
                  <p>
                    {isLoggedIn
                      ? 'Prayerfully consider supporting this work.'
                      : 'Create a free account to start learning.'}
                  </p>
                </div>
                <div>
                  <ButtonJoinNow type="main" />
                </div>
              </div>
            </Col>
            {footerElements.map((element) => (
              <Col
                xl={3}
                lg={6}
                sm={12}
                key={`header_footer_${element.header}`}
                className="mb-7"
              >
                <h6 className="fw-bold em-spacing-08 small">
                  {element.header}
                </h6>
                <ul className="list-unstyled small">
                  {element.items.map((item) => (
                    <li key={`link_footer_${item.title}`} className="mb-2">
                      <Link
                        href={item.href}
                        className={`text-gray-700 ${styles.footerLink}`}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>
            ))}
          </Row>
        </Container>
        <Container fluid className="bg-dark py-3">
          <Row className="pe-10 ps-10">
            <Col>
              <p className="text-center text-white m-0 em-spacing-02 fs-small">
                {new Date().getFullYear()}
                © ALL RIGHTS RESERVED, FIRST FRUITS OF
                ZION
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
