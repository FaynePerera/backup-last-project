import { Col, Row, Table } from 'react-bootstrap';
import Images from '../media/Image';
import style from '@/styles/torah-portions/WeeklyTorahSection.module.scss';
import { useGlobalState } from '@/lib/context/globalContext';
import Link from 'next/link';
import { dateFormatter } from '@/utils/_convert';

export default function TorahPortion({
  image,
  title,
  slug,
  date,
  category,
  leyning,
  commentary
}) {
  const { isMobile } = useGlobalState();
  const portion = image ? (
    <div
      className={`card ${isMobile && 'mb-3'} ${
        !isMobile && `${style.portionThisWeek} me-3`
      }`}
    >
      <Row className="g-0">
        <Col lg="4">
          {image && (
            <Images image={image} radius={isMobile ? ['top'] : ['left']} />
          )}
        </Col>
        <Col lg="8">
          <div className="card-body px-5 pt-3 pb-0">
            <div className="d-flex justify-content-between align-items-center">
              {category ? (
                <p className="m-0 small fw-bold em-spacing-08">
                  FESTIVAL PORTION
                </p>
              ) : (
                <p className="m-0 small fw-bold em-spacing-08">
                  CURRENT PORTION
                </p>
              )}
              <p className="m-0 small fw-semibold text-gray-700">
                {dateFormatter(new Date(date))}
              </p>
            </div>
            <p className="m-0 fs-1">{title}</p>
            <div className="mt-3">
              <Table borderless size="sm">
                <tbody>
                  <tr>
                    <td className={style.portionInfoTitle}>
                      <span className="fw-bold small text-uppercase">
                        TORAH
                      </span>
                    </td>
                    <td className="p-0">
                      <span className="fw-normal small text-uppercase">
                        {leyning.torah}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className={style.portionInfoTitle}>
                      <span className="fw-bold small text-uppercase">
                        PROPHETS
                      </span>
                    </td>
                    <td className="p-0">
                      <span className="fw-normal small text-uppercase">
                        {leyning.haftarah}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className={style.portionInfoTitle}>
                      <span className="fw-bold small text-uppercase">
                        GOSPEL
                      </span>
                    </td>
                    <td className="p-0">
                      <span className="fw-normal small text-uppercase">
                        {leyning.gospel}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div
              className={`mb-3 ${
                isMobile ? 'd-grid gap-2' : 'd-flex flex-wrap'
              }`}
            >
              {!isMobile && (
                <span className="me-3">
                  <Link
                    href={`/torah-portions/parashah/${slug}`}
                    role="button"
                    className="btn btn-sm btn-dark"
                  >
                    LISTEN & READ
                  </Link>
                </span>
              )}
              {isMobile && (
                <Link
                  href={`/torah-portions/parashah/${slug}`}
                  role="button"
                  className="btn btn-sm btn-dark"
                >
                  LISTEN & READ
                </Link>
              )}
              <Link
                href={`/torah-portions/commentary/${commentary}`}
                role="button"
                className="btn btn-sm btn-outline-dark"
              >
                COMMENTARY
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  ) : (
    <div className={`card h-100 ${!isMobile && style.portionNextWeek}`}>
      <div className="card-body px-5 pb-0 pt-3">
        <div className="d-flex justify-content-between align-items-center">
          {category ? (
            <p className="m-0 small fw-bold em-spacing-08">FESTIVAL PORTION</p>
          ) : (
            <p className="m-0 small fw-bold em-spacing-08">NEXT PORTION</p>
          )}
          <p className="m-0 small fw-semibold text-gray-700">
            {dateFormatter(new Date(date))}
          </p>
        </div>
        <p className="m-0 fs-1">{title}</p>

        <div className="mt-3">
          <Table borderless size="sm">
            <tbody>
              <tr>
                <td className={style.portionInfoTitle}>
                  <span className="fw-bold small text-uppercase">TORAH</span>
                </td>
                <td className="p-0">
                  <span className="fw-normal small text-uppercase">
                    {leyning.torah}
                  </span>
                </td>
              </tr>
              <tr>
                <td className={style.portionInfoTitle}>
                  <span className="fw-bold small text-uppercase">PROPHETS</span>
                </td>
                <td className="p-0">
                  <span className="fw-normal small text-uppercase">
                    {leyning.haftarah}
                  </span>
                </td>
              </tr>
              <tr>
                <td className={style.portionInfoTitle}>
                  <span className="fw-bold small text-uppercase">GOSPEL</span>
                </td>
                <td className="p-0">
                  <span className="fw-normal small text-uppercase">
                    {leyning.gospel}
                  </span>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className={`mb-3 ${isMobile && 'd-grid gap-2'}`}>
          <Link
            href={`/torah-portions/parashah/${slug}`}
            role="button"
            className="btn btn-sm btn-outline-dark"
          >
            PREVIEW
          </Link>
        </div>
      </div>
    </div>
  );

  return portion;
}
