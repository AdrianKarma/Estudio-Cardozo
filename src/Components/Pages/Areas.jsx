import React from 'react';
import { Card, Container, Button } from 'react-bootstrap';
import { Fade } from "react-awesome-reveal";
const Areas = () => {
  return (
    <Container className="mt-5">
     
  <h2 className="section-title ">Áreas de práctica</h2>
  <p className="section-subtitle">
    Asesoramiento y representación legal en las siguientes áreas:
  </p>

          <div className="row justify-content-center">
           
        <div className="col-12 col-sm-6 col-lg-3 mb-4 ">
          <Fade direction='left'>
          <Card className="h-100 AreaCard">
            <Card.Body className="text-center">
                <i className="bi bi-people" style={{ fontSize: '4rem', color: '#79222E' }}></i>
              <Card.Title className='mb-5'>Familia</Card.Title>
              
              <Card.Text>
               Te acompañamos en divorcios, regímenes de visitas y acuerdos familiares, buscando soluciones claras y justas para vos y tu familia.
              </Card.Text>
          <Button type="submit" className="gradient-button">Ver más detalles</Button>
            
            </Card.Body>
          </Card></Fade>
          
        </div>


        <div className="col-12 col-sm-6 col-lg-3 mb-4 ">
         <Fade direction='left'>  <Card className="h-100 AreaCard">
            <Card.Body className="text-center">
                <i className="bi-building" style={{ fontSize: '4rem', color: '#79222E' }}></i>
              <Card.Title className='mb-5'>Laboral</Card.Title>
              
              <Card.Text>
             Te asesoramos ante despidos, conflictos laborales y reclamos salariales, defendiendo tus derechos en cada etapa.
              </Card.Text>
                   <Button type="submit" className="gradient-button">Ver más detalles</Button>
              
            </Card.Body>
          </Card></Fade>
        </div>


        <div className="col-12 col-sm-6 col-lg-3 mb-4 ">
         <Fade direction='left'>  <Card className="h-100 AreaCard ">
            <Card.Body className="text-center">
                <i className="bi-file-text" style={{ fontSize: '4rem', color: '#79222E' }}></i>
              <Card.Title className='mb-5'>Civil y Comercial</Card.Title>
             
              <Card.Text>
            Asesoramiento en contratos, alquileres, deudas y conflictos comerciales, brindando soluciones claras y seguras.
              </Card.Text>
                  <Button type="submit" className="gradient-button">Ver más detalles</Button>
             
            </Card.Body>
          </Card></Fade>
        </div>


        <div className="col-12 col-sm-6 col-lg-3 mb-4 ">
         <Fade direction='left'>  <Card className="h-100 AreaCard">
            <Card.Body className="text-center">
                <i className="bi-shield-lock" style={{ fontSize: '4rem', color: '#79222E' }}></i>
              <Card.Title className='mb-5'>Penal</Card.Title>
             
              <Card.Text>
             Defensa y acompañamiento en procesos penales, tanto si sos víctima como imputado, con asesoramiento serio y cercano.
              </Card.Text>
              <Button type="submit" className="gradient-button">Ver más detalles</Button>
        
            </Card.Body>
          </Card></Fade>
        </div>
        
      </div>
    </Container>
  );
};

export default Areas;
