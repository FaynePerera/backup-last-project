import { Col, Container, Row } from 'react-bootstrap';
import TorahPortion from './TorahPortion';
import { useGlobalState } from '@/lib/context/globalContext';
import style from '@/styles/torah-portions/WeeklyTorahSection.module.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/pro-solid-svg-icons';

export default function WeeklyTorahSection({
  currentPortion,
  nextPortion,
  image,
  commentary
}) {
  const { isMobile, isDesktop } = useGlobalState();
  return (
    <Container fluid className="bg-gray-100 g-0">
      <Container>
        <Row className="g-0">
          <Col className={`${isMobile ? 'py-3' : 'py-9'} mx-auto`}>
            <p className="display-5 fw-bold">Weekly Torah Portion</p>
            {!isMobile && (
              <p className="fw-bold fs-6 em-spacing-05">
                TEACHINGS ON THE TORAH PORTION, THE PROPHETS, AND THE GOSPELS
              </p>
            )}
            <p className="fw-normal fs-3 text-body">
              But He answered and said, &quot;It is written: &apos;Man shall not
              live on bread alone, but on every {isDesktop && <br />} word that
              comes out of the mouth of God.&apos;&quot; (Matthew 4:4)
            </p>
            {!isMobile && (
              <div className="overflow-auto">
                <div
                  className={`d-flex mt-10 align-items-center mb-3 overflow ${
                    !isMobile && style.torahPortion
                  }`}
                >
                  <p className="fw-bold fs-6 em-spacing-05 m-0 flex-grow-1">
                    CURRENT TORAH PORTIONS
                  </p>
                  <Link
                    href="#"
                    role="button"
                    className="btn btn-sm btn-outline-dark"
                  >
                    SEE ALL TORAH PORTIONS{' '}
                    <FontAwesomeIcon icon={faCaretDown} />
                  </Link>
                </div>
                <div className={`d-flex ${style.torahPortions}`}>
                  <div id="this-week-portion">
                    <TorahPortion
                    {...currentPortion}
                    {...{ image, commentary }}
                  />
                  </div>
                  <div id="next-week-portion">
                    <TorahPortion {...nextPortion} />
                  </div>
                </div>
              </div>
            )}
            {isMobile && (
              <>
                <p className="fw-bold fs-6 em-spacing-05 text-uppercase">
                  Teachings on the Torah portion, the prophets, and the gospels{' '}
                </p>
                <Row>
                  <Col id="this-week-portion" md="12">
                    <TorahPortion
                      {...currentPortion}
                      {...{ image, commentary }}
                    />
                  </Col>
                  <Col id="next-week-portion" md="12">
                    <TorahPortion {...nextPortion} />
                  </Col>
                </Row>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
