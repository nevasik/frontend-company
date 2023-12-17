import Modal from 'react-bootstrap/Modal';

function CommonModal({show, setShow, title, children}) {
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal className="p-5" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
}

export default CommonModal;