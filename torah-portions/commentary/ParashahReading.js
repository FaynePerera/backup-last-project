import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faChevronUp,
  faHeadphones
} from '@fortawesome/pro-solid-svg-icons';
import logo from '../../../public/logos/torahportions/portions-audio-reading-icon.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function ParashahReading({
  parashah,
  className,
  showParashah,
  setShowParashah
}) {
  return (
    <div className={className}>
      <div className="py-5 px-5 px-lg-10 bg-light text-center rounded-2">
        <div className="mb-4">
          <Image
            src={logo}
            alt="Weekly Bible Reading with Audio"
            width={200}
            height={172}
          />
        </div>
        <h2 className="mb-5">Weekly Bible Reading with Audio</h2>
        <h5 className="fw-bold em-spacing-05">
          {' '}
          SEE PORTION READING DETAIILS BELOW
        </h5>
        <div>
          <FontAwesomeIcon
            icon={showParashah ? faChevronUp : faChevronDown}
            className="mt-3 link"
            size="2xl"
            onClick={() => setShowParashah(!showParashah)}
          />
        </div>
      </div>
      {showParashah && (
        <div className="border rounded-2 mt-3 py-5 px-4 border-light">
          <div className="fw-bold em-spacing-08 mb-1">{parashah.title}</div>
          <div className="mb-3 fw-bold fs-4">Portion Details</div>
          <div className="d-flex mb-5">
            <div style={{ width: 128 }} className="fw-bold em-spacing-02">
              <div>Torah</div>
              <div>Haftarah</div>
              <div>Gospel</div>
            </div>
            <div>
              <div>{parashah.torahReading}</div>
              <div>{parashah.haftarahReading}</div>
              <div>{parashah.gospelReading}</div>
            </div>
          </div>
          <div className="fs-4 fw-bold mb-3">Bible Readings</div>
          <Link
            href={`/torah-portions/parashah/${parashah.slug}`}
            className="text-black"
          >
            <div className="d-flex align-items-center bg-light rounded-2 py-3 px-7 mb-4">
              <div
                className="me-3 p-5 circle"
                style={{ background: 'rgba(0, 81, 133, 0.4)' }}
              >
                <FontAwesomeIcon icon={faHeadphones} size="xl" />
              </div>
              <div className="fs-5">READ AND LISTEN TO THESE PORTIONS</div>
            </div>
          </Link>
          <div className="mb-3">
            Follow the weekly Scripture passages from the Torah, Prophets, and
            Gospels read aloud in Messianic Jewish synagogues every Sabbath.
            Read or listen to each portion with a free audio reading from the
            Bible.
          </div>
          <div className="mb-3 fw-bold fs-4">Portion Summary</div>
          <div>{parashah.summary}</div>
        </div>
      )}
    </div>
  );
}
