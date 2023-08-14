import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useGlobalState } from '@/lib/context/globalContext';
import accountMessages from '@/lib/global/_accountMessages';

export default function AccountMessage({ action }) {
  const accountMessage = accountMessages.find((message) => message.type === action);
  const { isMobile } = useGlobalState();

  return (
    <div
      className={`rounded border-radius bg-white py-7 shadow ${isMobile && 'w-100'}`}
      style={!isMobile ? { width: 750 } : {}}
    >
      <div
        className="d-flex flex-column align-items-center justify-content-center mx-auto"
        style={!isMobile ? { width: 470 } : {}}
      >
        <div className="d-flex align-items-center mb-3">
          <FontAwesomeIcon
            icon={accountMessage?.icons[0]}
            className="text-primary common-icon-size-3"
            scale="4x"
          />
          <FontAwesomeIcon
            icon={accountMessage?.icons[1]}
            scale="2x"
            className="common-icon-size-2"
            style={{ marginLeft: -20 }}
          />
        </div>
        <p className={`fw-bold fs-1 text-center ${isMobile && 'px-3'} mb-6`}>{accountMessage?.title}</p>
        <p className={`fs-4 text-center ${isMobile && 'px-3'} mb-6`}>{accountMessage?.message}</p>
        <Link className={`btn btn-primary text-uppercase ${isMobile && 'px-3'}`} href="/getstarted">{accountMessage?.buttonText}</Link>
        <p className={`fw-semibold my-3 text-center ${isMobile ? 'px-3 fs-6' : 'fs-large'}`}>
          {accountMessage?.bottomText}
          {' '}
          <Link href={accountMessage?.link?.href}>{accountMessage?.link?.text}</Link>
        </p>
      </div>
    </div>
  );
}
