import Modal from 'react-bootstrap/Modal';

function ModalCharging() {
  return (
    <div className="modal" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '10' }}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Procesando</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Estamos procesando tu respuesta...</p>
        </Modal.Body>
        <Modal.Footer>
          {/* Agrega botones o contenido adicional aquí si es necesario */}
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default ModalCharging;

