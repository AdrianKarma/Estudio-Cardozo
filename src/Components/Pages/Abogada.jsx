import React from 'react';
import FotoAbogada from "../../assets/Images/Abogada.jpg"
import { Container } from 'react-bootstrap';
import { Fade } from "react-awesome-reveal";
const Abogada = () => {
    return (
        <Container className='d-flex flex-column flex-md-row align-items-center mt-5'>
            {/* Foto */}
            <div className='FotoAbogada mb-3 mb-md-0'>
               <Fade>
                <img src={FotoAbogada} alt="Abogada Carla Cardozo" className="img-fluid rounded" />
                </Fade>
            </div>

            {/* Texto */}
            <div className='TextoAbogada ms-md-4 d-flex flex-column'>
               <Fade direction='down'>
                <h2>Dra. Carla Cardozo</h2>
                <h4>Abogada – Estudio Cardozo & Asociados</h4>
</Fade>
                <p>
                    Defiendo tus derechos con compromiso, claridad y cercanía.  
                    Mi misión es que entiendas cada paso de tu proceso legal y te sientas acompañado con confianza y profesionalismo.  
                    <br />
                    <strong>[Agendá tu consulta]</strong>
                </p>

                {/* Botones de contacto pegados abajo */}
               <div className='contactoCards d-flex gap-2 mt-auto'>
  <a 
    href="https://wa.me/5493816585961" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="CardContacto"
  >
    Whatsapp
  </a>

  <a 
    href="https://www.facebook.com/Abogada.Carla.Cardozo" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="CardContacto"
  >
    Facebook
  </a>

  <a 
    href="mailto:carla.nazarena.cardozo@gmail.com" 
    className="CardContacto"
  >
    Email
  </a>
</div>
            </div>
        </Container>
    );
};

export default Abogada;
