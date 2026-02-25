import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Abogada from './Abogada';
import Areas from './Areas';
import ContactMe from './ContactMe';
import FondoAbogada from "../../assets/Images/FondoCarlaCardozo.jpg"
import { Fade } from "react-awesome-reveal";
import MapaEstudio from './MapaEstudio';
const Inicio = () => {
    return (


        
          <Container    className="main  " id='home'>
            <section   className="  hero">
            <div className='hero-bg'>
                <img src={FondoAbogada} alt="Fondo Estudio Cardozo" className='hero-bg__img' />
            <div className="hero-bg__overlay" />
            </div>

      <div className='hero-content'>
     
        <Fade direction="down">
           
      <h1 className='h1Font'>Estudio Cardozo & Asociados
</h1>
</Fade>
<hr />
<h2>
    Defendemos tus derechos y acompañamos cada decisión legal con compromiso, experiencia y profesionalismo.

</h2>
<Fade direction='up'>
<p>Brindamos soluciones jurídicas claras y personalizadas, con ética y cercanía en cada caso.
</p>
</Fade>
<Fade direction='right'>
<Button type="submit" href="#ContactMe" className="gradient-button  mt-3">Contactenos</Button>
      <small className="hero-trust">
  Respuesta en menos de 24 hs · Atención personalizada
</small>
        </Fade>
        
        </div>
        </section>
        <Abogada></Abogada>
        <Areas></Areas>
        <MapaEstudio></MapaEstudio>
        <ContactMe></ContactMe>
        </Container>
    );
};

export default Inicio;