import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Popover from 'react-bootstrap/Popover';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/pro-solid-svg-icons';
import {
  faRotateLeft,
  faRotateRight,
  faEllipsisVertical
} from '@fortawesome/pro-regular-svg-icons';

export default function CustomAudioPlayer({
  audio,
  player,
  num,
  playControl,
  speedControl,
  speed
}) {
  const [seek, setSeek] = useState(15000);
  const popover = (
    <Popover>
      <Popover.Body style={{ width: '250px' }}>
        <Form.Label>Speed</Form.Label>
        <div className="d-flex">
          <Form.Range
            defaultValue={speed}
            onChange={(e) => speedControl(num, e.target.value)}
            min="0.5"
            max="2"
            step="0.5"
          />
          <span style={{ width: '35px' }} className="ps-2">
            {speed}x
          </span>
        </div>
        <Form.Label>Seek </Form.Label>
        <div className="d-flex">
          <Form.Range
            defaultValue={seek}
            onChange={(e) => setSeek(e.target.value)}
            min="5000"
            max="60000"
            step="5000"
          />
          <span style={{ width: '35px' }} className="ps-2">
            {seek / 1000}s
          </span>
        </div>
      </Popover.Body>
    </Popover>
  );
  return (
    <>
      <AudioPlayer
        autoPlay={false}
        layout="horizontal-reverse"
        src={audio}
        progressJumpSteps={{
          forward: seek,
          backward: seek
        }}
        ref={player}
        className=" "
        customAdditionalControls={[]}
        customProgressBarSection={[
          RHAP_UI.CURRENT_TIME,
          RHAP_UI.PROGRESS_BAR,
          RHAP_UI.DURATION,
          <OverlayTrigger
            rootClose
            trigger="click"
            placement="top"
            overlay={popover}
          >
            <FontAwesomeIcon
              icon={faEllipsisVertical}
              color="black"
              size="lg"
            />
          </OverlayTrigger>
        ]}
        customIcons={{
          play: (
            <FontAwesomeIcon
              icon={faPlay}
              color="black"
              size="sm"
              onClick={playControl}
            />
          ),
          pause: <FontAwesomeIcon icon={faPause} color="black" size="sm" />,
          rewind: (
            <FontAwesomeIcon icon={faRotateLeft} color="black" size="2xs" />
          ),
          forward: (
            <FontAwesomeIcon icon={faRotateRight} color="black" size="2xs" />
          )
        }}
      />
      <style jsx global>
        {`
          .rhap_container {
            position: fixed;
            bottom: 25px;
            right: 5%;
            width: 90%;
            height: 100px;
            box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
            border-radius: 8px;
            z-index: 999;
            background-color: white;
          }

          @media only screen and (max-width: 768px) {
            .rhap_main {
              display: flex;
              flex-direction: column;
            }
          }

          .rhap_controls-section {
            display: flex;
            flex: 1;
          }

          @media only screen and (max-width: 768px) {
            .rhap_controls-section {
              flex-direction: column;
            }
          }

          .rhap_main-controls {
            display: flex;
            flex: 1;

            padding-right: 25px;
          }

          .rhap_progress-filled {
            background-color: #005185;
          }
          .rhap_progress-indicator {
            background-color: #005185;
          }
          .rhap_download-progress {
            background-color: #005185;
            opacity: 0.2;
          }

          .rhap_time {
            color: black;
          }
          .rhap_total-time {
            margin-right: 20px;
          }
          .rhap_current-time {
            width: 50px;
          }

          .rhap_volume-controls {
            padding-right: 25px;
          }
          .rhap_volume-button {
            color: black;
          }

          .rhap_volume-bar {
            width: 100px;
          }
          @media only screen and (max-width: 768px) {
            .rhap_volume-bar {
              width: 200px;
            }
          }

          .rhap_volume-indicator {
            background-color: black;

            opacity: 1;
          }
        `}
      </style>
    </>
  );
}
