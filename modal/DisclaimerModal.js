import Modal from 'react-bootstrap/Modal';
import info from '@/lib/notifications/_disclaimerModal';

export default function DisclaimerModal(props) {
  const modal = info.find((item) => item.slug === props.slug);
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      fullscreen="sm-down"
    >
      <Modal.Header closeButton>
        <Modal.Title
          className="fw-semibold"
          id="contained-modal-title-vcenter"
        >
          {modal.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p dangerouslySetInnerHTML={{ __html: modal.body }} />
      </Modal.Body>
    </Modal>
  );
}
