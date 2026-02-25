import React, { useState } from "react";
import { Card, Container, Button, Modal } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";

const AREAS = [
  {
    key: "familia",
    title: "Derecho de Familia",
    iconClass: "bi bi-people",
    desc:
      "Intervenimos en conflictos familiares que requieren asesoramiento claro y acompañamiento estratégico.",
    modalTitle: "Derecho de Familia",
    modalBody: (
      <>
        <p>
          Intervenimos en conflictos familiares que requieren asesoramiento claro y acompañamiento estratégico.
        </p>
        <p><strong>Casos frecuentes:</strong></p>
        <ul>
          <li>Cuota alimentaria</li>
          <li>Régimen comunicacional (visitas)</li>
          <li>Cuidado personal</li>
          <li>Divorcios</li>
          <li>Incumplimientos de acuerdos</li>
        </ul>
        <p>
          Cada situación familiar es distinta. Analizamos tu caso en detalle y definimos la mejor vía legal para proteger tus derechos y los de tus hijos
        </p>
        <p><strong>Primer paso:</strong> evaluación inicial de la situación y documentación disponible.</p>
      </>
    ),
    whatsappText: "Hola! Quiero consultar sobre mi situación familiar",
  },
  {
    key: "laboral",
    title: "Laboral",
    iconClass: "bi bi-building",
    desc:
      "Te asesoramos ante despidos, conflictos laborales y reclamos salariales...",
    modalTitle: "Derecho Laboral",
    modalBody: (
      <>
        <p>Asesoramiento ante conflictos laborales y despidos.</p>
        <p>Situaciones habituales:</p>
        <ul>
          <li>Despidos (con y sin causa)</li>
          <li>Trabajo no registrado</li>
          <li>Reclamos salariales</li>
          <li>Indemnizaciones</li>
           <li>Diferencias en liquidación final</li>
        </ul>
        <p>Revisamos tu caso y calculamos correctamente lo que corresponde según la ley vigente.</p>
        <p>Primer paso: análisis de telegramas, recibos y documentación laboral.</p>
      </>
    ),
    whatsappText: "Hola! Quiero consultar sobre un tema laboral",
  },
  {
    key: "civil",
    title: "Civil y Comercial",
    iconClass: "bi bi-file-text",
    desc:
      "Asesoramiento en contratos, alquileres, deudas y conflictos comerciales...",
    modalTitle: "Derecho Civil y Comercial",
    modalBody: (
      <>
        <p>Asistencia legal en conflictos patrimoniales y contractuales.</p>
        <p>Casos frecuentes:</p>
        <ul>
          <li>Incumplimiento de contratos</li>
          <li>Conflictos por alquileres</li>
          <li>Reclamos por deudas</li>
          <li>Daños y perjuicios</li>
        </ul>
        <p>Evaluamos la documentación y definimos la estrategia legal adecuada para proteger tus intereses.</p>
      </>
    ),
    whatsappText: "Hola! Quiero consultar sobre un tema civil/comercial",
  },
  {
    key: "jubilaciones",
    title: "Jubilaciones y Pensiones",
    iconClass: "bi bi-cash-coin",
    desc:
      "Jubilaciones con y sin moratoria, pensiones por discapacidad y PUAM...",
    modalTitle: "Jubilaciones y Pensiones",
    modalBody: (
      <>
      <p>Asesoramiento para iniciar o regularizar trámites previsionales.</p>
        <ul>
          <li>Jubilaciones con y sin moratoria</li>
          <li>Pensiones por discapacidad</li>
          <li>PUAM</li>
          <li>Regímenes especiales (docentes, casas particulares, choferes, agrario, minería)</li>
        </ul>
        <p>Analizamos tu situación y te indicamos los pasos necesarios para avanzar con tu trámite.</p>
      </>
    ),
    whatsappText: "Hola! Quiero consultar sobre jubilación/pensión",
  },
];

const Areas = () => {
  const [selectedArea, setSelectedArea] = useState(null);

  const handleClose = () => setSelectedArea(null);
  const handleShow = (area) => setSelectedArea(area);

  const waNumber = "5493816585961";
  const waLink = selectedArea
    ? `https://wa.me/${waNumber}?text=${encodeURIComponent(selectedArea.whatsappText)}`
    : "#";

  return (
    <Container className="mt-5" id="Areas">
      <h2 className="section-title">Áreas de práctica</h2>
      <p className="section-subtitle">
        Asesoramiento y representación legal en las siguientes áreas:
      </p>

      <div className="row justify-content-center">
        {AREAS.map((area) => (
          <div key={area.key} className="col-12 col-sm-6 col-lg-3 mb-4">
            <Fade direction="left">
              <Card className="h-100 AreaCard">
                <Card.Body className="text-center">
                  <i
                    className={area.iconClass}
                    style={{ fontSize: "4rem", color: "#79222E" }}
                  />
                  <Card.Title className="mb-5">{area.title}</Card.Title>
                  <Card.Text>{area.desc}</Card.Text>

                  <Button
                    type="button"
                    className="gradient-button"
                    onClick={() => handleShow(area)}
                  >
                    Ver más detalles
                  </Button>
                </Card.Body>
              </Card>
            </Fade>
          </div>
        ))}
      </div>

      <Modal show={!!selectedArea} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedArea?.modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{selectedArea?.modalBody}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button className="gradient-button" href={waLink} target="_blank" rel="noreferrer">
            Consultar por WhatsApp
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Areas;