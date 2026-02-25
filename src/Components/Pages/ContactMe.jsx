import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

// 🔴 Import del modal (ajustá la ruta según dónde lo guardaste)
import TermsModal from "../Common/TermsModal"; // 🔴

const SERVICE_ID = "service_oequigi";
const TEMPLATE_ID = "template_sfnxvri";
const USER_ID = "nYbuojWlUtnldXPsd";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // 🔴 Estado para abrir/cerrar modal + checkbox controlado
  const [openTerms, setOpenTerms] = useState(false); // 🔴
  const [accepted, setAccepted] = useState(false); // 🔴

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔴 Validación: si no acepta términos, no manda
    if (!accepted) { // 🔴
      setStatus("Debes aceptar los términos y condiciones."); // 🔴
      return; // 🔴
    } // 🔴

    setStatus("Sending...");

    const templateParams = {
      to_name: "Recipient Name",
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      message: formData.message,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then(
        (response) => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", phone: "", message: "" });

          // 🔴 Reset del checkbox al enviar OK
          setAccepted(false); // 🔴
        },
        (error) => {
          setStatus("Error sending message.");
          console.error("Error sending email:", error);
        }
      );
  };

  return (
    <Container className="p-5 containerContact mb-5 regularTextContact " id="ContactMe">
      <Row className="justify-content-left mb-3">
        <Col xs={12}>
          <h2 className="TitleContact">Contáctanos</h2>
        </Col>
      </Row>

      <Fade>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col xs={12} md={8} className="mb-3">
              <Form.Group>
                <Form.Control
                  as="textarea"
                  rows={8}
                  placeholder="Cuéntenos cómo podemos asistirle con su caso o consulta legal..."
                  className="mb-3 rounded-0 textBox"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>

            <Col xs={12} md={4}>
              <div className="textForm">
                <Form.Group className="mb-3 itemsform">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    className="textBar"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3 itemsform">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    className="textBar"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3 itemsform">
                  <Form.Label>Numero de Telefono</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    className="textBar"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  {/* 🔴 Checkbox controlado (sin required, validamos en submit) */}
                  <Form.Check // 🔴
                    className="itemsform"
                    type="checkbox"
                    label="He leído y acepto los términos y condiciones."
                    checked={accepted} // 🔴
                    onChange={(e) => setAccepted(e.target.checked)} // 🔴
                  />
                </Form.Group>

                <Form.Text className="d-block mb-3 textPrivacyNotice">
                  {/* 🔴 En vez de navegar a /Terms, abre el modal */}
                  <button // 🔴
                    type="button" // 🔴
                    className="linkPrivateNotice" // 🔴 (reutilizás tu clase)
                    onClick={() => setOpenTerms(true)} // 🔴
                    style={{ // 🔴
                      background: "none",
                      border: "none",
                      padding: 0,
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Términos y condiciones
                  </button>
                </Form.Text>
              </div>

              <Button type="submit" variant="primary" className="gradient-button rounded-0">
                Enviar
              </Button>

              <p className="mt-3 status-message ">{status}</p>
            </Col>
          </Row>
        </Form>
      </Fade>

      {/* 🔴 Modal al final del componente */}
      <TermsModal // 🔴
        open={openTerms} // 🔴
        onClose={() => setOpenTerms(false)} // 🔴
        title="Términos y Condiciones" // 🔴 (opcional)
      >
        
      

<h2>Estudio Cardozo & Asociados</h2>

<p>
El presente sitio web pertenece a <strong>Estudio Cardozo & Asociados</strong>, con domicilio en San Miguel de Tucumán, Provincia de Tucumán, República Argentina.
</p>

<p>
Correo electrónico de contacto: 
<a href="mailto:carla.nazarena.cardozo@gmail.com">
carla.nazarena.cardozo@gmail.com
</a>
</p>

<p>
El acceso y uso del presente sitio web implica la aceptación plena y sin reservas de los presentes Términos y Condiciones.
</p>

<h2>1. Objeto</h2>

<p>
El presente sitio tiene como finalidad brindar información general sobre los servicios jurídicos ofrecidos por el Estudio Cardozo & Asociados en sus distintas áreas de práctica.
</p>

<p>
La información publicada tiene carácter meramente informativo y orientativo.
</p>

<h2>2. Uso del sitio web</h2>

<p>
El usuario se compromete a utilizar el sitio web de manera lícita y conforme a la legislación vigente.
</p>

<p>
El contenido del sitio no constituye asesoramiento legal específico ni genera relación profesional abogado-cliente por el solo acceso o utilización del mismo.
</p>

<p>
La relación profesional únicamente se configura mediante acuerdo expreso entre las partes.
</p>

<h2>3. Responsabilidad</h2>

<p>
Estudio Cardozo & Asociados no garantiza resultados específicos en los asuntos jurídicos informados en el sitio.
</p>

<p>
El estudio no será responsable por decisiones adoptadas por el usuario en base a la información publicada sin haber recibido asesoramiento profesional personalizado.
</p>

<h2>4. Protección de datos personales</h2>

<p>
Los datos personales que el usuario proporcione a través del formulario de contacto (nombre, correo electrónico, número telefónico u otros) serán utilizados exclusivamente con la finalidad de responder consultas y brindar información sobre los servicios ofrecidos.
</p>

<p>
Dichos datos no serán cedidos ni compartidos con terceros.
</p>

<p>
El tratamiento de los datos se realiza conforme a lo dispuesto por la Ley N° 25.326 de Protección de Datos Personales de la República Argentina.
</p>

<p>
El usuario podrá solicitar la actualización, rectificación o supresión de sus datos enviando un correo electrónico a la dirección de contacto informada.
</p>

<h2>5. Propiedad intelectual</h2>

<p>
Todos los contenidos del sitio web, incluyendo textos, imágenes, logotipos y diseño, son propiedad de Estudio Cardozo & Asociados, salvo indicación en contrario, y se encuentran protegidos por la normativa vigente en materia de propiedad intelectual.
</p>

<p>
Queda prohibida su reproducción total o parcial sin autorización expresa.
</p>

<h2>6. Modificaciones</h2>

<p>
Estudio Cardozo & Asociados se reserva el derecho de modificar los presentes Términos y Condiciones en cualquier momento, sin necesidad de previo aviso.
</p>
      </TermsModal>
    </Container>
  );
};

export default ContactMe;