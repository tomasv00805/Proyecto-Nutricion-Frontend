import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function ModalThanks() {
  return (
    <div className="modal" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '10' }}>
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Gracias!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Tu respuesta fue guardada satisfactoriamente!</p>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary"><Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}><span >Más Sobre Nosotros!</span></Link></Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default ModalThanks;
