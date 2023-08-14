import Accordion from 'react-bootstrap/Accordion';
import { useRef, useState } from 'react';
import { useGlobalState } from '@/lib/context/globalContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpenCover } from '@fortawesome/pro-regular-svg-icons';
import { faHeadphones } from '@fortawesome/pro-solid-svg-icons';
import { faCirclePlay } from '@fortawesome/pro-duotone-svg-icons';
import CustomAudioPlayer from '@/components/player/CustomAudioPlayer';
import BibleText from '../BibleText';

export default function PortionAccordion({
  title,
  translation,
  hebrewTitle,
  torahText,
  torahReading,
  haftarahReading,
  haftarahText,
  gospelReading,
  gospelText,
  specialHaftarah
}) {
  const [play, setPlay] = useState([]);
  const [speed0, setSpeed0] = useState(1);
  const [speed1, setSpeed1] = useState(1);
  const [speed2, setSpeed2] = useState(1);

  const player = (num) => {
    switch (num) {
      case 0:
        return player0;
      case 1:
        return player1;
      case 2:
        return player2;
      default:
        return player0;
    }
  };
  const player0 = useRef();
  const player1 = useRef();
  const player2 = useRef();

  function speedControl(num, speeds) {
    player(num).current.audio.current.playbackRate = speeds;
    if (num === 0) setSpeed0(speeds);
    if (num === 1) setSpeed1(speeds);
    if (num === 2) setSpeed2(speeds);
  }

  const audiofunction = (num) => {
    setPlay((prevPlay) =>
      prevPlay.includes(num) ? [...prevPlay] : [...prevPlay, num]
    );
    setTimeout(() => {
      player(num).current.audio.current.play();
    }, 200);
  };

  const playControl = (num) => {
    setPlay((prevPlay) =>
      prevPlay.includes(num) ? [...prevPlay] : [...prevPlay, num]
    );
  };

  function pauseControl() {
    player1.current.audio.current.pause();
    player0.current.audio.current.pause();
    player2.current.audio.current.pause();
  }

  const { isMobile } = useGlobalState();

  return (
    <>
      <h1>{title}</h1>
      <div className="d-flex mb-5 flex-sm-row flex-column">
        <h1
          className="me-5 flex order-sm-1 order-2"
          style={{ fontFamily: 'Capitolium2' }}
        >
          {translation}
        </h1>
        <h1 className="order-1" style={{ fontFamily: 'Capitolium2' }}>
          {hebrewTitle}
        </h1>
      </div>

      <Accordion defaultActiveKey="0" className="mb-8">
        <Accordion.Item eventKey="0" className="rounded mb-2">
          <Accordion.Button
            className="cursor-pointer bg-gray-100 rounded"
            onClick={pauseControl}
          >
            <div className="d-flex flex-fill align-items-center">
              <div className="d-flex flex-fill align-items-center">
                <h5 className="me-7 me-sm-12 fs-large fw-bold">Torah</h5>
                {!isMobile && <h5 className="fw-semibold">{torahReading}</h5>}
              </div>
              <div className="d-flex ">
                <FontAwesomeIcon
                  className="mx-3 "
                  size="lg"
                  icon={faBookOpenCover}
                />
                <FontAwesomeIcon
                  className="me-6"
                  size="lg"
                  icon={faHeadphones}
                />
              </div>
            </div>
          </Accordion.Button>

          <Accordion.Body className=" pt-5 pb-3">
            <div style={{ cursor: 'pointer' }} onClick={() => audiofunction(0)}>
              <FontAwesomeIcon
                className=""
                style={{ '--fa-secondary-color': '#f0f3f7' }}
                sw
                size="4x"
                icon={faCirclePlay}
              />
              <p className="xxsmall ms-2">Start Audio</p>
            </div>

            <CustomAudioPlayer
              audio={
                play.includes(0) && `https://audio.esv.org/hw/${torahReading}`
              }
              player={player0}
              num={0}
              playControl={() => playControl(0)}
              speedControl={speedControl}
              speed={speed0}
            />

            <BibleText markdown={torahText} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className="rounded-2 mb-2 bg-transparent ">
          <Accordion.Button
            className="cursor-pointer bg-gray-100 rounded"
            onClick={pauseControl}
          >
            <div className="d-flex flex-fill align-items-center">
              <div className="d-flex flex-fill align-items-center">
                <h5 className="me-4 me-sm-10 fs-large fw-bold">Haftarah</h5>
                {!isMobile && (
                  <h5 className="fw-semibold">
                    {specialHaftarah
                      ? specialHaftarah.haftarahReading
                      : haftarahReading}
                    {specialHaftarah && '*'}
                  </h5>
                )}
              </div>
              <div className="d-flex ">
                <FontAwesomeIcon
                  className="mx-3 "
                  size="lg"
                  icon={faBookOpenCover}
                />
                <FontAwesomeIcon
                  className="me-6"
                  size="lg"
                  icon={faHeadphones}
                />
              </div>
            </div>
          </Accordion.Button>

          <Accordion.Body className="pt-5 pb-3">
            <div
              className="cursor-pointer"
              style={{ cursor: 'pointer' }}
              onClick={() => audiofunction(1)}
            >
              <FontAwesomeIcon
                className=""
                style={{ '--fa-secondary-color': '#f0f3f7' }}
                sw
                size="4x"
                icon={faCirclePlay}
              />
              <p className="xxsmall ms-2">Start Audio</p>
            </div>
            <CustomAudioPlayer
              audio={
                play.includes(1) &&
                `https://audio.esv.org/hw/${
                  specialHaftarah
                    ? specialHaftarah.haftarahReading
                    : haftarahReading
                }}`
              }
              player={player1}
              num={1}
              playControl={() => playControl(1)}
              speedControl={speedControl}
              speed={speed1}
            />
            <BibleText
              markdown={
                specialHaftarah ? specialHaftarah.haftarahText : haftarahText
              }
            />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" className="rounded-2 mb-2 bg-transparent ">
          <Accordion.Button
            className="cursor-pointer bg-gray-100 rounded"
            onClick={pauseControl}
          >
            <div className="d-flex flex-fill align-items-center">
              <div className="d-flex flex-fill align-items-center">
                <h5 className="me-5 me-sm-10 fs-large fw-bold">Gospels</h5>
                {!isMobile && (
                  <h5 className="fw-semibold">
                    {specialHaftarah
                      ? specialHaftarah.gospelReading
                      : gospelReading}
                    {specialHaftarah && '*'}
                  </h5>
                )}
              </div>
              <div className="d-flex ">
                <FontAwesomeIcon
                  className="mx-3 "
                  size="lg"
                  icon={faBookOpenCover}
                />
                <FontAwesomeIcon
                  className="me-6"
                  size="lg"
                  icon={faHeadphones}
                />
              </div>
            </div>
          </Accordion.Button>

          <Accordion.Body className="pt-5 pb-3">
            <div
              className="cursor-pointer"
              style={{ cursor: 'pointer' }}
              onClick={() => audiofunction(2)}
            >
              <FontAwesomeIcon
                className=""
                style={{ '--fa-secondary-color': '#f0f3f7' }}
                sw
                size="4x"
                icon={faCirclePlay}
              />
              <p className="xxsmall ms-2">Start Audio</p>
            </div>

            <CustomAudioPlayer
              audio={
                play.includes(2) &&
                `https://audio.esv.org/hw/${
                  specialHaftarah
                    ? specialHaftarah.gospelReading
                    : gospelReading
                }}`
              }
              player={player2}
              num={2}
              playControl={() => playControl(2)}
              speedControl={speedControl}
              speed={speed2}
            />
            <BibleText
              markdown={
                specialHaftarah ? specialHaftarah.gospelText : gospelText
              }
            />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
