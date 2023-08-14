import Link from 'next/link';
import { Breadcrumb } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/pro-regular-svg-icons';
import { useRouter } from 'next/router';
import { useGlobalState } from '@/lib/context/globalContext';

export default function CustomBreadcrumb({ items }) {
  const router = useRouter();
  const { isMobile, isTablet } = useGlobalState();

  return (items && items.length > 0 && (
    <Breadcrumb
      className={`m-0${isMobile && ' w-100'}`}
      bsPrefix="breadcrumb flex-nowrap d-block text-truncate"
      style={isTablet ? { width: '45%' } : {}}
    >
      {
        items && items.map((item, index) => (
          <Breadcrumb.Item
            linkAs="span"
            key={item.id}
            className="d-inline-block"
          >
            <Link href={item.href} className="text-black fw-semibold">
              {index === 0 && <FontAwesomeIcon icon={faHome} className="me-2" />}
              {item.text}
            </Link>
          </Breadcrumb.Item>
        ))
      }
      <Breadcrumb.Item
        linkAs="span"
        className="fw-bold text-capitalize text-dark d-inline-block"
        onClick={() => router.reload()}
        role="button"
      >
        {router.query?.slug?.split('-').join(' ')}
      </Breadcrumb.Item>
    </Breadcrumb>
  ));
}
