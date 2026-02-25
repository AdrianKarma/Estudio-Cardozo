import React from 'react';
import FotoAbogada from "../../assets/Images/Abogada.jpg"
import { Container } from 'react-bootstrap';
import { Fade } from "react-awesome-reveal";
import { FaWhatsapp, FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Abogada = () => {
    return (
        <Container className='d-flex flex-column flex-md-row align-items-center mt-5' id='AboutMe'>
            {/* Foto */}
            <div className='FotoAbogada mb-3 mb-md-0'>
               <Fade>
                <img src={FotoAbogada} alt="Abogada Carla Cardozo" className="img-fluid rounded" />
                </Fade>
            </div>

            {/* Texto */}
            <Container className='TextoAbogada  d-flex flex-column d-block text-center'>
               <Fade direction='down'>
                
                <h1 >Dra. Carla Cardozo</h1>
                <h2>Abogada – Procuradora</h2>
                <p className="info-profesional">M.P. Nº 10560 – Colegio de Abogados de Tucumán  </p>
               <p className="info-profesional">Egresada de la Universidad Nacional de Tucumán</p>
</Fade>
                <p className='mt-4'>
                  Brindo asesoramiento jurídico personalizado, con seguimiento directo y compromiso en cada etapa del proceso.
                    <strong className='d-block text-center'>[Agendá tu consulta]</strong>
                </p>

                {/* Botones de contacto pegados abajo */}
               <div className='contactoCards d-block  text-center '>
  <a 
  href="https://wa.me/5493816585961" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="CardContacto whatsapp mt-2 ms-2"
>
  <FaWhatsapp style={{ marginRight: "8px" }} />
  Whatsapp
</a>

  <a 
    href="https://www.facebook.com/Abogada.Carla.Cardozo" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="CardContacto facebook mt-2 ms-2"
  >
    <FaFacebookF style={{ marginRight: "8px" }} />
    Facebook
  </a>

  <a 
    href="mailto:carla.nazarena.cardozo@gmail.com" 
         target="_blank" 
    rel="noopener noreferrer" 
    className="CardContacto gmail mt-2 ms-2" 
  >
    <MdEmail style={{ marginRight: "8px" }} />
    Email
  </a>
</div>
            </Container>
        </Container>
    );
};

export default Abogada;
