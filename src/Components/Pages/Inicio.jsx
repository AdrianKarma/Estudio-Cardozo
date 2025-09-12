import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Abogada from './Abogada';
import Areas from './Areas';
import ContactMe from './ContactMe';
import FondoAbogada from "../../assets/Images/FondoCarlaCardozo.jpg"
const Inicio = () => {
    return (
          <div   className="main  ">
            <div className='ConteinerFondoAbogada'>
                <img src={FondoAbogada} alt="Fondo Estudio Cardozo" className='ConteinerFondoAbogada' />
            </div>
      <Container className='TextoFondoAbogada'>
      <h1>Estudio Cardozo & Asociados
</h1>
<h2>
    Defendemos tus derechos y acompañamos cada decisión legal con compromiso, experiencia y profesionalismo.

</h2>

<p>En nuestro estudio trabajamos con seriedad, ética y cercanía para brindar soluciones jurídicas claras y efectivas. Cada caso es único, y nuestro objetivo es acompañarte con asesoramiento personalizado, protegiendo lo que más valorás.
</p>

<Button type="submit" className="gradient-button ms-5">Contactenos</Button>
        
        </Container>
        <Abogada></Abogada>
        <Areas></Areas>
        <ContactMe></ContactMe>
        </div>
    );
};

export default Inicio;