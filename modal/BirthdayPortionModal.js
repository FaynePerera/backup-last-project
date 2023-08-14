import Modal from 'react-bootstrap/Modal';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareNodes } from '@fortawesome/pro-regular-svg-icons';
import { faCalendarDay } from '@fortawesome/pro-duotone-svg-icons';
import { portions, holidays } from '@/lib/torah-portions/_torahPortions';
import { useEffect, useState, useMemo } from 'react';
import portionQuery from '@/lib/queries/_portionQuery';
import hygraphClient from '@/lib/_client';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function BirthdayPortionModal({ portion, onHide, show }) {
  const [birthdayPortion, setBirthdayPortion] = useState(null);
  const [portionSummary, setPortionSummary] = useState(null);
  const [loading, setLoading] = useState(true);

  const merged = useMemo(() => [...portions, ...holidays], []);

  useEffect(() => {
    setLoading(true);
    if (portion) {
      let finalPortion = null;
      const parashat = portion.events.find((event) =>
        event.includes('Parashat')
      );
      const holiday = holidays.find((item) =>
        item.title.includes(portion.events)
      );

      if (parashat) {
        const title = parashat.replace('Parashat ', '');
        const parashotFind = merged.find((item) => item.hebcalTitle === title);
        finalPortion = parashotFind;
      } else if (holiday) {
        finalPortion = holiday;
      } else {
        null;
      }

      const fetchPortion = async () => {
        const { parashah } = await hygraphClient().request(portionQuery, {
          slug: finalPortion.slug
        });

        setPortionSummary(parashah);
      };

      fetchPortion();
      setBirthdayPortion(finalPortion);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, [portion]);

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      fullscreen="sm-down"
      style={{ backdropFilter: 'blur(20px)' }}
    >
      <Modal.Header className="border-0" closeButton></Modal.Header>
      <Modal.Body className="border-0 d-flex flex-column">
        <div className="d-sm-flex justify-content-start align-items-center pb-4">
          <FontAwesomeIcon
            icon={faCalendarDay}
            color="#e6ae23"
            size="4x"
            className="me-0 me-sm-4 mb-5 mb-sm-0"
          />
          <h2 className="fw-semibold">
            {portion && portion.hd + ' ' + portion.hm + ' ' + portion.hy}
          </h2>
        </div>

        <h4 className="text-uppercase">Your Birthday Portion:</h4>
        {birthdayPortion && (
          <div>
            <h1 className="fw-bold">{birthdayPortion.title}</h1>

            <>
              <h1 className="fw-bold">{birthdayPortion.hebrew}</h1>
              <h4 className="fw-bold mb-5">{birthdayPortion.leyning.torah}</h4>
            </>

            <h5 className="fw-bold text-uppercase">Portion Summary</h5>
            {loading ? (
              <Skeleton count={5} className="my-2" />
            ) : (
              <p className="fs-large">
                {portionSummary && portionSummary.summary}
              </p>
            )}

            <div className="d-flex flex-column flex-sm-row  ">
              <Link
                href={`/parashah/${birthdayPortion.slug}`}
                className="me-sm-2 me-0 btn btn-dark"
              >
                Listen & Read
              </Link>
              <Link href="/" className="btn mt-sm-0 mt-2 btn-outline-dark">
                <FontAwesomeIcon icon={faShareNodes} className="me-1" />
                Share This Portion
              </Link>
            </div>
          </div>
        )}

        <p className="text-gray-600 pt-3">
          NOTE: The Hebrew date above is the day you were born according to the
          Jewish calendar. This is the day God entrusted you with life so that
          you will bring the light of the Messiah into this world. Making the
          world a better, more faithful, and Godly place. You are a light for
          the Kingdom in this era; make it shine.
        </p>
      </Modal.Body>
    </Modal>
  );
}
