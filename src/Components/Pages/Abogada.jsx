import React from 'react';
import FotoAbogada from "../../assets/Images/Abogada.jpg"
import { Container } from 'react-bootstrap';

const Abogada = () => {
    return (
        <Container className='d-flex flex-column flex-md-row align-items-center mt-5'>
            {/* Foto */}
            <div className='FotoAbogada mb-3 mb-md-0'>
                <img src={FotoAbogada} alt="Abogada Carla Cardozo" className="img-fluid rounded" />
            </div>

            {/* Texto */}
            <div className='TextoAbogada ms-md-4 d-flex flex-column'>
                <h2>Dra. Carla Cardozo</h2>
                <h4>Abogada – Estudio Cardozo & Asociados</h4>

                <p>
                    Defiendo tus derechos con compromiso, claridad y cercanía.  
                    Mi misión es que entiendas cada paso de tu proceso legal y te sientas acompañado con confianza y profesionalismo.  
                    <br />
                    <strong>[Agendá tu consulta]</strong>
                </p>

                {/* Botones de contacto pegados abajo */}
                <div className='contactoCards d-flex gap-2 mt-auto'>
                    <div className='CardContacto'>Whatsapp</div>
                    <div className='CardContacto'>Facebook</div>
                    <div className='CardContacto'>Email</div>
                </div>
            </div>
        </Container>
    );
};

export default Abogada;
