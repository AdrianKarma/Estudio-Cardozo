import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

// Asegúrate de usar las claves correctas
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

  // Manejar cambios en el formulario
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Enviar formulario con EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const templateParams = {
      to_name: "Recipient Name", // Aquí puedes colocar el nombre del destinatario si quieres personalizarlo
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
        },
        (error) => {
          setStatus("Error sending message.");
          console.error("Error sending email:", error);
        }
      );
  };

  return (
    <Container className="p-5 containerContact mb-5 regularTextContact" id="ContactMe">
      <Row className="justify-content-left mb-3">
        <Col xs={12}>
          <h2 className="TitleContact">Contáctanos</h2>
       <p className="subTitleContact">
  Quedo a su disposición para atender su consulta. Por favor, deje su mensaje y me pondré en contacto con usted a la brevedad.
</p>

        </Col>
      </Row>

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
                <Form.Label>Email </Form.Label>
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
                <Form.Check className="itemsform" type="checkbox" label=" I have read and accept the Terms and Conditions." required />
              </Form.Group>
              <Form.Text className="d-block mb-3 textPrivacyNotice">
            <Link to="/Terms" target=""  className='linkPrivateNotice'>Terminos y condiciones
</Link>
            
          </Form.Text>
            </div>
            <Button type="submit" variant="primary" className="buttonNav rounded-0">
              Enviar
            </Button>
            <p className="mt-3 status-message ">{status}</p>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default ContactMe;