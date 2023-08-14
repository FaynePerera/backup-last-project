import { Row, Col, Container } from 'react-bootstrap';
import Link from 'next/link';
import { useGlobalState } from '@/lib/context/globalContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScroll, faScrollTorah, faChartTreeMap } from '@fortawesome/pro-duotone-svg-icons';

export default function StudyDisciplesSection() {
  const { isMobile } = useGlobalState();

  return (
    <>
      <div className={`d-flex flex-column mt-5 ${isMobile && 'px-2 pt-2'}`}>
        <p className="fw-bold fs-2 m-0">Torah Study for Disciples</p>
        <p className="fw-normal fs-4 mb-5">Torah Portions is for Christians who desire to study the Torah through relatable and inspiring Messianic Jewish commentary on the weekly Torah Portion and Gospel sections.</p>
      </div>
      <div className="bg-white mb-5 flex-column">
        <Container className={isMobile && 'p-0'}>
          <Row className={isMobile && 'g-0'}>
            <Col xl="4" lg="4" className="pl-0 mb-5 d-flex flex-column">
              <Row>
                <div className="d-flex align-items-left">
                  <FontAwesomeIcon
                    icon={faChartTreeMap}
                    size="3x"
                  />
                </div>
                <p className="fw-bold fs-4 m-0 mt-2 mb-4">Free Content</p>
                <p className="fw-light fs-6 mb-5" style={isMobile ? { minWidth: 'fit-content' } : {}}>
                  Unlock all the content on Torah Portions by creating a free account.
                  Registered users can set email preferences to have the weekly Portion delivered through email,
                  access FFOZ teachings in one curated dashboard experience,
                  and bookmark teachings in their library.
                </p>
              </Row>
              <Row className="mt-auto">
                <span className=""><Link href="/getstarted" role="button" className="btn btn-sm btn-primary">GET STARTED</Link></span>
              </Row>
            </Col>
            <Col xl="4" lg="4" className="pl-0 mb-5 d-flex flex-column">
              <Row>
                <div className="d-flex align-items-left">
                  <FontAwesomeIcon
                    icon={faScrollTorah}
                    size="3x"
                  />
                </div>
                <p className="fw-bold fs-4 m-0 mt-2 mb-4">What is the Torah?</p>
                <p className="fw-light fs-6 mb-5" style={isMobile ? { minWidth: 'fit-content' } : {}}>
                  The Torah is the foundation of faith in Yeshua.
                  All of the concepts embedded in the gospel—God, holiness, righteousness, sin, sacrifice,
                  repentance, faith, forgiveness, covenant, grace,
                  the kingdom of heaven on earth, and many more—are introduced in the Torah.
                </p>
              </Row>
              <Row className="mt-auto">
                <span className=""><Link href="/torah-portions/what-is-the-torah" role="button" className="btn btn-sm btn-outline-richblack">LEARN MORE</Link></span>
              </Row>
            </Col>
            <Col xl="4" lg="4" className="pl-0 mb-5 d-flex flex-column">
              <Row>
                <div className="d-flex align-items-left">
                  <FontAwesomeIcon
                    icon={faScroll}
                    size="3x"
                  />
                </div>
                <p className="fw-bold fs-4 m-0 mt-2 mb-4">What’s a Torah portion?</p>
                <p className="fw-light fs-6 mb-5" style={!isMobile ? { minWidth: 'fit-content' } : {}}>
                  The Jewish people divided the Torah into fifty-four portions to be read over the course of a year.
                  This weekly discipline helps disciples to master the fundamental truths of the Torah,
                  giving us important context for everything we read in the New Testament.
                </p>
              </Row>
              <Row className="mt-auto">
                <span className=""><Link href="/torah-portions/what-is-a-torah-portion" role="button" className="btn btn-sm btn-outline-richblack">LEARN MORE</Link></span>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
