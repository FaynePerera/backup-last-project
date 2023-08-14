import Link from 'next/link';
import Modal from 'react-bootstrap/Modal';
import info from '@/lib/notifications/_confirmationModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/pro-solid-svg-icons';

export default function ConfirmationModal({ slug, onRetry, onHide, show }) {
  const modal = info.find((item) => item.slug === slug);

  return (
    <div>
      {modal && (
        <Modal
          show={show}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          backdrop="static"
          keyboard={false}
          fullscreen="sm-down"
          style={{ backdropFilter: 'blur(20px)' }}
        >
          <Modal.Header className="flex flex-column justify-content-center border-0">
            <FontAwesomeIcon
              icon={modal.title.icon}
              size="6x"
              className={`my-6 text-${modal.title.color}`}
            />
            <Modal.Title
              className="display-4"
              id="contained-modal-title-vcenter"
            >
              {modal.title.text}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="px-md-5 px-sm-4 fs-5 pt-2 justify-content-center text-center">
            <p
              dangerouslySetInnerHTML={{ __html: modal.body }}
              className="mb-0"
            />
          </Modal.Body>
          <Modal.Footer className="justify-content-center pb-8 border-0">
            {modal.hasClose && (
              <button
                className="btn btn-secondary"
                onClick={onHide}
                type="button"
              >
                Close
              </button>
            )}
            {modal.button.retry && (
              <button
                className="btn btn-primary"
                onClick={onRetry}
                type="button"
              >
                Try Again
              </button>
            )}
            {modal.button.href && (
              <Link className="btn btn-primary" href={modal.button.href}>
                {modal.button.text}
                <FontAwesomeIcon icon={faCaretRight} />
              </Link>
            )}
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}
