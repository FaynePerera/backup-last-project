import Accordion from 'react-bootstrap/Accordion';
import { Container, Row, Col } from 'react-bootstrap';
import CardCarousel from '@/components/carousel/CardCarousel';
import { useState, useEffect } from 'react';
import CardSlider from '@/components/cardgroup/CardSlider';
import {
  studyCards,
  learningCards,
  involvedCards
} from '@/lib/global/_exploreSection';
import { useGlobalState } from '@/lib/context/globalContext';

export default function ExploreSection({ info }) {
  const [cardChoice, setCardChoice] = useState(studyCards);
  const { isMobile } = useGlobalState();

  useEffect(() => {
    setCardChoice(studyCards);
  }, [isMobile]);

  return (
    <div>
      {!isMobile ? (
        <Container fluid className={info?.class}>
          <Container>
            <div className="ps-4">
              <h5 className="pt-5 text-uppercase fw-bold em-spacing-05">
                Explore First Fruits of Zion
              </h5>
              <h1 className="fw-normal pb-5">
                We&rsquo;re on a global mission to transform lives.
              </h1>
              <Row>
                <div className="d-flex flex-row">
                  <Col className="col-xl-4 col-lg-4 col-md-3 pe-4">
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0" className=" border-0 pb-2 bg-transparent ">
                        <Accordion.Button
                          className="fs-5 fw-bold cursor-pointer bg-gray-100 rounded-2"
                          onClick={() => setCardChoice(studyCards)}
                          style={
                            cardChoice === studyCards
                              ? { borderTop: '4px solid var(--bs-info)' }
                              : { borderTop: '4px solid var(--bs-gray-100)' }
                          }
                        >
                          Group Studies
                        </Accordion.Button>

                        <Accordion.Body className="pt-2 pb-3">
                          Gathering together, discussing the word, and building
                          godly faith-based relationships.
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="1" className=" border-0 pb-2 bg-transparent ">
                        <Accordion.Button
                          onClick={() => setCardChoice(learningCards)}
                          style={
                            cardChoice === learningCards
                              ? { borderTop: '4px solid var(--bs-info)' }
                              : { borderTop: '4px solid var(--bs-gray-100)' }
                          }
                          className="fs-5 fw-bold cursor-pointer bg-gray-100 rounded-2"
                        >
                          Start Learning
                        </Accordion.Button>
                        <Accordion.Body className="pt-2 pb-3">
                          Get started today. Join the FFOZ Community and get
                          free access to years of material.
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="2" className=" border-0 pb-2 bg-transparent ">
                        <Accordion.Button
                          onClick={() => setCardChoice(involvedCards)}
                          style={
                            cardChoice === involvedCards
                              ? { borderTop: '4px solid var(--bs-info)' }
                              : { borderTop: '4px solid var(--bs-gray-100)' }
                          }
                          className="fs-5 fw-bold cursor-pointer bg-gray-100 rounded-2"
                        >
                          Get Involved
                        </Accordion.Button>
                        <Accordion.Body className="pt-2 pb-3">
                          Discover ways to get involved with First Fruits of
                          Zion on our global mission to transform lives.
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Col>
                  <Col className="col-xl-8 ">
                    <CardCarousel cardChoice={cardChoice} />
                  </Col>
                </div>
              </Row>
            </div>
          </Container>
        </Container>
      ) : (
        <Container fluid className={info?.class}>
          <h6 className="pt-5 text-uppercase fw-bold em-spacing-05">
            Explore First Fruits of Zion
          </h6>
          <h1 className="fw-normal pb-5">
            We&rsquo;re on a global mission to transform lives.
          </h1>

          <Col>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0" className=" border-0 pb-2 bg-transparent ">
                <Accordion.Button
                  onClick={() => setCardChoice(studyCards)}
                  className="fs-5 fw-bold cursor-pointer bg-gray-100 rounded-2"
                  style={
                    cardChoice === studyCards
                      ? { borderTop: '4px solid var(--bs-info)' }
                      : { borderTop: '4px solid var(--bs-gray-100)' }
                  }
                >
                  Group Studies
                </Accordion.Button>
                <Accordion.Body className="pt-4 pb-3 pe-0">
                  Gathering together, discussing the word, and building godly
                  faith-based relationships.
                  <Row
                    className="row-cols-3 g-3 flex-nowrap overflow-auto pb-sm-0 pb-md-4"
                    style={{ maxwidth: '991px' }}
                  >
                    {cardChoice === studyCards && (
                      <CardSlider cardChoice={studyCards} />
                    )}
                  </Row>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1" className=" border-0 pb-2 bg-transparent ">
                <Accordion.Button
                  onClick={() => setCardChoice(learningCards)}
                  className="fs-5 fw-bold cursor-pointer bg-gray-100 rounded-2"
                  style={
                    cardChoice === learningCards
                      ? { borderTop: '4px solid var(--bs-info)' }
                      : { borderTop: '4px solid var(--bs-gray-100)' }
                  }
                >
                  Start Learning
                </Accordion.Button>
                <Accordion.Body className="pt-4 pb-3 pe-0">
                  Get started today. Join the FFOZ Community and get free access
                  to years of material.
                  <Row
                    className="row-cols-3 g-3 flex-nowrap overflow-auto  pb-sm-0 pb-md-4"
                    style={{ maxwidth: '991px' }}
                  >
                    {cardChoice === learningCards && (
                      <CardSlider cardChoice={cardChoice} />
                    )}
                  </Row>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2" className=" border-0 pb-2 bg-transparent ">
                <Accordion.Button
                  onClick={() => setCardChoice(involvedCards)}
                  className="fs-5 fw-bold cursor-pointer bg-gray-100 rounded-2"
                  style={
                    cardChoice === involvedCards
                      ? { borderTop: '4px solid var(--bs-info)' }
                      : { borderTop: '4px solid var(--bs-gray-100)' }
                  }
                >
                  Get Involved
                </Accordion.Button>
                <Accordion.Body className="pt-4 pb-3 pe-0">
                  Discover ways to get involved with First Fruits of Zion on our
                  global mission to transform lives.
                  <Row
                    className="row-cols-3 g-3 flex-nowrap overflow-auto  pb-sm-0 pb-md-4"
                    style={{ maxwidth: '991px' }}
                  >
                    {cardChoice === involvedCards && (
                      <CardSlider cardChoice={cardChoice} />
                    )}
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Container>
      )}
    </div>
  );
}
