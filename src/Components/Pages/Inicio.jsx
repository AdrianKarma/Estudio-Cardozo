import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Abogada from './Abogada';
import Areas from './Areas';
import ContactMe from './ContactMe';
import FondoAbogada from "../../assets/Images/FondoCarlaCardozo.jpg"
import { Fade } from "react-awesome-reveal";
const Inicio = () => {
    return (
          <div   className="main  ">
            <div className='ConteinerFondoAbogada'>
                <img src={FondoAbogada} alt="Fondo Estudio Cardozo" className='ConteinerFondoAbogada' />
            </div>
      <Container className='TextoFondoAbogada'>
        <Fade direction="down">
      <h1 className='h1Font'>Estudio Cardozo & Asociados
</h1>
</Fade>
<h2>
    Defendemos tus derechos y acompañamos cada decisión legal con compromiso, experiencia y profesionalismo.

</h2>
<Fade direction='up'>
<p>En nuestro estudio trabajamos con seriedad, ética y cercanía para brindar soluciones jurídicas claras y efectivas. Cada caso es único, y nuestro objetivo es acompañarte con asesoramiento personalizado, protegiendo lo que más valorás.
</p>
</Fade>
<Fade direction='right'>
<Button type="submit" className="gradient-button ms-5">Contactenos</Button>
        </Fade>
        </Container>
        <Abogada></Abogada>
        <Areas></Areas>
        <ContactMe></ContactMe>
        </div>
    );
};

export default Inicio;