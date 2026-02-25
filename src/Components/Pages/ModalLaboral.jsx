import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function StaticExample() {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Derecho Laboral</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <h4>Asesoramiento ante conflictos laborales y despidos.</h4>
          <p>

Situaciones habituales:

Despido sin causa

Trabajo no registrado

Reclamos salariales

Indemnizaciones

Diferencias en liquidación final

Revisamos tu caso y calculamos correctamente lo que corresponde según la ley vigente.

Primer paso: análisis de telegramas, recibos y documentación laboral.

Botón CTA:
Evaluar mi caso laboral</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Cerrar</Button>
          <Button variant="primary" href="https://wa.me/5493816585961" >Evaluar mi caso Laboral</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default StaticExample;