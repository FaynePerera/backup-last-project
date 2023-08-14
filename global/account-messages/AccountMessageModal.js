import React from 'react';
import { Modal } from 'react-bootstrap';
import AccountMessage from './AccountMessage';

export default function AccountMessageModal({ action, show, onHide }) {
  return (
    <Modal
      show={show}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      keyboard={false}
      style={{ backdropFilter: 'blur(20px)' }}
      onHide={onHide}
    >
      <Modal.Body className="p-0">
        <AccountMessage {...{ action }} />
      </Modal.Body>
    </Modal>
  );
}
