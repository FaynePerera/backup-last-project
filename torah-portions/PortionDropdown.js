import { Col } from 'react-bootstrap';
import { portions, specials } from '@/lib/torah-portions/_torahPortions';
import Dropdown from 'react-bootstrap/Dropdown';
import Link from 'next/link';
import { dateFormatter } from '@/utils/_convert';
import { faHeadphones } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '@/styles/torah-portions/PortionDropdown.module.scss';
import { useGlobalState } from '@/lib/context/globalContext';
import { currentPortionSlug } from '@/lib/torah-portions/_torahPortions';
import { scrollLeft } from '@/utils/_scroll';
import { useEffect } from 'react';
import { currentPortionBook } from '@/lib/torah-portions/_torahPortions';

export default function PortionDropdown({
  parashah,
  toggleActiveKey,
  activeKey
}) {
  useEffect(() => {
    scrollLeft('portion_card_scroller', currentPortionBook);
  }, []);

  const { isMobile } = useGlobalState();
  return (
    <Col
      lg={2}
      style={!isMobile ? { width: '300px' } : { width: '88%' }}
      id={parashah}
    >
      <header className="bg-black text-white ps-2 py-3 rounded-top fw-semibold">
        {parashah}
      </header>
      {portions
        .filter((item) => item.book.includes(parashah))
        .map((item) => (
          <Dropdown
            onClick={() => {
              toggleActiveKey(item.key);
            }}
            key={item.key}
            autoClose="outside"
            align="start"
          >
            <Dropdown.Toggle
              variant="secondary"
              id="dropdown-autoclose-outside"
              className={`cursor-pointer ${styles.container} ${
                item.slug === currentPortionSlug
                  ? 'bg-info text-white'
                  : item.key === activeKey
                  ? 'bg-gray-500'
                  : ''
              }  d-flex align-items-center justify-content-between border-0 rounded-0 mb-1`}
            >
              <span className="xsmall">{item.title}</span>
              <span className="xsmall ms-auto">
                {item.date && dateFormatter(new Date(item.date))}
              </span>
            </Dropdown.Toggle>

            <Dropdown.Menu className="w-100" align="start">
              <Dropdown.ItemText className="bg-white ">
                {item.hdate && (
                  <div className="xsmall d-flex justify-content-between ">
                    <p className="fw-bold text-uppercase">Hebrew Date</p>
                    <p className="fw-semibold">{item.hdate}</p>
                  </div>
                )}

                <div className="xsmall  d-flex mb-2">
                  <span className="fw-bold me-7 text-uppercase">Torah</span>

                  <span className="fw-normal ">{item.leyning.torah}</span>
                </div>

                {item.special ? (
                  specials
                    .filter((special) => special.slug === item.special)
                    .map((special) => (
                      <div key={special.slug} className="mb-2">
                        {special.leyning.torah && (
                          <div className="xsmall  d-flex mb-2 ">
                            <span className="fw-bold me-7 text-uppercase">
                              Torah
                            </span>
                            <span className="fw-normal">
                              {special.leyning.torah}*
                            </span>
                          </div>
                        )}
                        <div className="xsmall d-flex mb-2 ">
                          <span
                            className="fw-bold text-uppercase "
                            style={{ marginRight: '28px' }}
                          >
                            Prophets
                          </span>
                          <span className="fw-normal ">
                            {special.leyning.haftarah}*
                          </span>
                        </div>
                        <div className="xsmall d-flex">
                          <span className="fw-bold me-6 text-uppercase">
                            Gospel
                          </span>
                          <span className="fw-normal">
                            {special.leyning.gospel}*
                          </span>
                        </div>
                        <p className="xsmall fw-normal">*{special.title}</p>
                      </div>
                    ))
                ) : (
                  <>
                    <div className="xsmall d-flex mb-2">
                      <span
                        className="fw-bold text-uppercase"
                        style={{ marginRight: '25px' }}
                      >
                        Prophets
                      </span>
                      <span className="fw-normal">{item.leyning.haftarah}</span>
                    </div>
                    <div className="xsmall d-flex ">
                      <p className="fw-bold me-6 text-uppercase">Gospel</p>

                      <p className="fw-normal">{item.leyning.gospel}</p>
                    </div>
                  </>
                )}

                <Link
                  className="btn btn-xs btn-outline-richblack "
                  href={`/torah-portions/parashah/${item.slug}`}
                >
                  <FontAwesomeIcon icon={faHeadphones} />
                  {'  '}
                  Bible & Audio Learning
                </Link>
              </Dropdown.ItemText>
            </Dropdown.Menu>
          </Dropdown>
        ))}

      {parashah != 'Leviticus' && (
        <div
          className="bg-gray-100 "
          style={{ width: '100%', height: '55px' }}
        ></div>
      )}
    </Col>
  );
}
